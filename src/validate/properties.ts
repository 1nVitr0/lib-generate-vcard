import { PropertyParameters } from "../model/parameters";
import { ClientPidMapDictionary, MultiProperty, Property } from "../model/properties";
import { RecordedPropertyValue, PropertyValue } from "../model/propertyValues";

/**
 * @internal
 * @category Internally Used
 */
export function isPropertyObject(
  property: Property
): property is { value: PropertyValue | RecordedPropertyValue; parameters?: PropertyParameters } {
  return typeof property == "object" && !(property instanceof Array) && "value" in property;
}

/**
 * @internal
 * @category Internally Used
 */
export function isMultiPropertyList(property: Property | MultiProperty): property is Extract<MultiProperty, any[]> {
  return (
    property instanceof Array &&
    (property as any[]).every((entry) => typeof entry == "object" && !(entry instanceof Date || entry instanceof Array))
  );
}

/**
 * @internal
 * @category Internally Used
 */
export function isMultiPropertyObject(property: Property | MultiProperty): property is Exclude<MultiProperty, any[]> {
  return typeof property == "object" && "values" in property && property.values instanceof Array;
}

/**
 * @internal
 * @category Internally Used
 */
export function isMultiProperty(property: Property | MultiProperty): property is MultiProperty {
  return isMultiPropertyList(property) || isMultiPropertyObject(property);
}

/**
 * @internal
 * @category Internally Used
 */
export function isClientPidMapDict(
  property: Property | MultiProperty | ClientPidMapDictionary
): property is ClientPidMapDictionary {
  return (
    typeof property == "object" &&
    !(property instanceof Array) &&
    Object.keys(property).every((key) => parseInt(key).toString() === key)
  );
}
