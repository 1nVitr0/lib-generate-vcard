import {
  DateAndOrTime,
  DateOnly,
  DateTime,
  LanguageTag,
  TimeOnly,
  TimeStamp,
  Uri,
  UtcOffset,
} from "../model/datatypes";
import { NamePropertyValue, AddressPropertyValue, GenderPropertyValue, Kind } from "../model/propertyValues";
import { VCardDefinition, VCardGroupDefinition } from "../model/vCard";
import { ianaIsUtf8, isUri, isUtcOffset, isDateAndOrTime } from "../validate/dataTypes";
import { isValueParameter } from "../validate/parameters";
import {
  generateBooleanValue,
  generateDateAndOrTimeValue,
  generateDateOnlyValue,
  generateDateTimeValue,
  generateFloatValue,
  generateIntegerValue,
  generateLanguageTagValue,
  generateTextValue,
  generateTimeStampValue,
  generateTimeValue,
  generateUriValue,
  generateUtcOffsetValue,
} from "./value";
import { generateParameters } from "./parameters";
import { generateKindValue } from "./value";
import { escapeParameterValue } from "./escape";
import { propertyNames, PropertyName } from "../model/propertyNames";
import { Property, PropertyDescriptor, PropertyValue, RecordedPropertyValue } from "../model/properties";
import { defaultPropertyTypes } from "../model/propertyTypes";
import { ValueType } from "../model/parameters";

function componentList(list: (string | string[])[]): string {
  return list
    .map((s) => (s instanceof Array ? s.map(escapeParameterValue).join(",") : escapeParameterValue(s)))
    .join(";");
}

function valueTypedProperty(property: string, value: any, type: ValueType, parameters: string[]): PropertyDescriptor {
  switch (type) {
    case "uri":
      return { property, value: generateUriValue(value as Uri | Uri[]), parameters };
    case "date":
      return { property, value: generateDateOnlyValue(value as DateOnly | DateOnly[]), parameters };
    case "time":
      return { property, value: generateTimeValue(value as TimeOnly | TimeOnly[]), parameters };
    case "date-time":
      return { property, value: generateDateTimeValue(value as DateTime | DateTime[]), parameters };
    case "date-and-or-time":
      return { property, value: generateDateAndOrTimeValue(value as DateAndOrTime | DateAndOrTime[]), parameters };
    case "timestamp":
      return { property, value: generateTimeStampValue(value as TimeStamp | TimeStamp[]), parameters };
    case "boolean":
      return {
        property,
        value: generateBooleanValue(
          (value as any) instanceof Array ? (value as any).map((v: boolean) => !!v) : !!value
        ),
        parameters,
      };
    case "integer":
      return { property, value: generateIntegerValue(value as number | number[]), parameters };
    case "float":
      return { property, value: generateFloatValue(value as number | number[]), parameters };
    case "utc-offset":
      return { property, value: generateUtcOffsetValue(value as UtcOffset | UtcOffset[]), parameters };
    case "language-tag":
      return { property, value: generateLanguageTagValue(value as LanguageTag), parameters };
    case "text":
    default:
      return { property, value: generateTextValue(value.toString()), parameters };
  }
}

export function generateProperty(
  propertyKey: string,
  data: Property<PropertyValue | RecordedPropertyValue, any>
): PropertyDescriptor {
  const value = typeof data == "object" && "value" in data ? data.value : data;
  const parameterDict = typeof data == "object" && "parameters" in data ? { ...data.parameters } : {};

  if (data instanceof Array ? data.some((s) => ianaIsUtf8(s)) : ianaIsUtf8(data)) {
    parameterDict.charset = "UTF-8";
  }

  const property = (
    propertyKey in propertyNames
      ? propertyNames[propertyKey as keyof VCardDefinition | keyof VCardGroupDefinition]
      : propertyKey
  ) as PropertyName;
  let parameters = generateParameters(
    parameterDict,
    defaultPropertyTypes[property] === parameterDict.value ? ["value"] : []
  );
  let components: (string | string[])[] = [];

  const resetPropertyValueType = (type: ValueType) => {
    if (defaultPropertyTypes[property] && defaultPropertyTypes[property] !== type) {
      parameterDict.value = type;
      parameters = generateParameters(parameterDict);
    }
  };

  if (isValueParameter(parameterDict) && (typeof value !== "object" || value instanceof Array)) {
    return valueTypedProperty(property, value, parameterDict.value as ValueType, parameters);
  }

  switch (property) {
    // Properties with single value type
    case "BEGIN":
      // override any other value, no parameters
      return { property, value: value as "VCARD", parameters: [] };
    case "END":
      // override any other value, no parameters
      return { property, value: value as "VCARD", parameters: [] };
    case "VERSION":
      // Allow different versions, but throw type error if not 4.0, no parameters
      return { property, value: value as "4.0", parameters: [] };
    case "KIND":
      return { property, value: generateKindValue(value as Kind | Kind[]), parameters };
    case "LANG":
      return { property, value: generateLanguageTagValue(value as LanguageTag | LanguageTag[]), parameters };
    case "REV":
      return { property, value: generateTimeStampValue(value as TimeStamp | TimeStamp[]), parameters };
    case "N":
      components = ["", "", "", "", ""];
      if (typeof value == "string") {
        const [familyName = "", givenName = "", additionalNames = "", honorificPrefix = "", honorificSuffix = ""] =
          value.split(/,\s*/);
        components = [familyName, givenName, additionalNames, honorificPrefix, honorificSuffix];
      } else {
        const {
          familyName = "",
          givenName = "",
          additionalNames = "",
          honorificPrefix = "",
          honorificSuffix = "",
        } = value as NamePropertyValue;
        components = [familyName, givenName, additionalNames, honorificPrefix, honorificSuffix];
      }
      return { property, value: componentList(components), parameters };
    case "ADR":
      const {
        poBox = "",
        extended = "",
        street = "",
        locality = "",
        region = "",
        postalCode = "",
        country = "",
      } = value as AddressPropertyValue;
      components = [poBox, extended, street, locality, region, postalCode, country];
      return { property, value: componentList(components), parameters };
    case "GENDER":
      if (value instanceof Array) {
        const [sex, genderIdentity] = (value as [string, string]).map(escapeParameterValue);
        return { property, value: `${sex};${genderIdentity}`, parameters };
      } else if (typeof value == "object") {
        const { sex, genderIdentity } = value as GenderPropertyValue & RecordedPropertyValue;
        return {
          property,
          value: `${sex}${genderIdentity ? `;${escapeParameterValue(genderIdentity)}` : ""}`,
          parameters,
        };
      } else {
        return { property, value: generateTextValue(value as string), parameters };
      }
    case "ORG":
      return { property, value: generateTextValue(value as string | string[], ";"), parameters };
    case "CLIENTPIDMAP":
      // TODO: handle ClientPIdMapParameters
      /* istanbul ignore next */
      return { property, value: "TODO", parameters };

    // Properties with multiple possible value types
    case "TZ": // Also Uri | Text
      if (isUtcOffset(value)) {
        resetPropertyValueType("utc-offset");
        return { property, value: generateUtcOffsetValue(value as UtcOffset | UtcOffset[]), parameters };
      } // otherwise match other value types
    case "ANNIVERSARY": // Also Text
    case "BDAY": // Also Text
      if (isDateAndOrTime(value)) {
        resetPropertyValueType("date-and-or-time");
        return { property, value: generateDateAndOrTimeValue(value as DateAndOrTime | DateAndOrTime[]), parameters };
      }
    case "PHOTO":
    case "SOURCE":
    case "IMPP":
    case "GEO":
    case "LOGO":
    case "SOUND":
    case "URL":
    case "FBURL":
    case "CALADRURI":
    case "CALURI":
    case "MEMBER":
    case "TEL": // Also Text
    case "RELATED": // Also Text
    case "UID": // Also Text
    case "KEY": // Also Text
      if (isUri(value)) {
        resetPropertyValueType("uri");
        return { property, value: generateUriValue(value as Uri | Uri[]), parameters };
      } // otherwise match other value types
    case "XML":
    case "FN":
    case "NICKNAME":
    case "EMAIL":
    case "TITLE":
    case "ROLE":
    case "CATEGORIES":
    case "NOTE":
    case "PRODID":
    default: // Default to normal text value type
      resetPropertyValueType("text");
      return { property, value: generateTextValue(value as string | string[]), parameters };
  }
}
