import {
  DateAndOrTime,
  DateOnly,
  DateTime,
  Kind,
  LanguageTag,
  TimeOnly,
  TimeStamp,
  Uri,
  UtcOffset,
  ValueType,
} from "../model/datatypes";
import {
  NamePropertyValue,
  PropertyDescriptor,
  propertyNames,
  AddressPropertyValue,
  GenderPropertyValue,
} from "../model/properties";
import { Property, PropertyValue, RecordedPropertyValue, VCard, VCardGroup } from "../model/vCard";
import { ianaIsUtf8, isUri, isUtcOffset } from "../validate/dataTypes";
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
import { generateParameters } from "./parameter";
import { generateKindValue } from "./value";
import { escapeParameterValue } from "./escape";

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
        value: generateBooleanValue((value as any) instanceof Array ? (value as any).map((v) => !!v) : !!value),
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
  property: string,
  data: Property<PropertyValue | RecordedPropertyValue, any>
): PropertyDescriptor {
  const value = typeof data == "object" && "value" in data ? data.value : data;
  const parameterDict: any =
    typeof data == "object" && "parameters" in data && data.parameters ? { ...data.parameters } : {};

  if (data instanceof Array ? data.some((s) => ianaIsUtf8(s)) : ianaIsUtf8(data)) {
    parameterDict.charset = "UTF-8";
  }

  property = property in propertyNames ? propertyNames[property as keyof VCard | keyof VCardGroup] : property;
  const parameters = generateParameters(parameterDict);
  let components: (string | string[])[] = [];

  if (isValueParameter(parameterDict) && typeof value !== "object") {
    // TODO: value is not array?
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
    case "LANGUAGE":
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
    case "ANNIVERSARY":
    case "BDAY":
      return { property, value: generateDateAndOrTimeValue(value as DateAndOrTime | DateAndOrTime[]), parameters };
    case "GENDER":
      if (value instanceof Array) {
        const [sex, genderIdentity] = (value as [string, string]).map(escapeParameterValue);
        return { property, value: `${sex};${genderIdentity}`, parameters };
      } else if (typeof value == "object") {
        const { sex, genderIdentity } = value as GenderPropertyValue & RecordedPropertyValue;
        return {
          property,
          value: `${escapeParameterValue(sex)}${genderIdentity ? `;${escapeParameterValue(genderIdentity)}` : ""}`,
          parameters,
        };
      } else {
        return { property, value: generateTextValue(value as string), parameters };
      }
    case "ORG":
      return { property, value: generateTextValue(value as string | string[], ";"), parameters };
    case "CLIENTPIDMAP":
      // TODO: handle ClientPIdMapParameters
      return { property, value: "TODO", parameters };

    // Properties with multiple possible value types
    case "TZ": // Also Uri | Text
      if (isUtcOffset(value)) {
        return { property, value: generateUtcOffsetValue(value as UtcOffset | UtcOffset[]), parameters };
      } // otherwise match other value types
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
    case "TZ": // Also TimezoneString | Text
    case "TEL": // Also Text
    case "RELATED": // Also Text
    case "UID": // Also Text
    case "KEY": // Also Text
      if (isUri(value)) {
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
    case "TZ": // Also TimezoneString | Uri
    case "TEL": // Also Uri
    case "RELATED": // Also Uri
    case "UID": // Also Uri
    case "KEY": // Also Uri
    default: // Default to normal text value type
      return { property, value: generateTextValue(value as string | string[]), parameters };
  }
}
