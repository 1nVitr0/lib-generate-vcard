import { MultiProperty, Property, PropertyValue, RecordedPropertyValue } from "../model/properties";

/**
 * @internal
 */
export function isPropertyObject(
  property: Property
): property is { value: PropertyValue | RecordedPropertyValue; parameters?: {} } {
  return typeof property == "object" && !(property instanceof Array) && "value" in property;
}

/**
 * @internal
 */
export function isMultiPropertyList(property: Property | MultiProperty): property is Extract<MultiProperty, any[]> {
  return (
    property instanceof Array &&
    (property as any[]).every((entry) => typeof entry == "object" && !(entry instanceof Date || entry instanceof Array))
  );
}

/**
 * @internal
 */
export function isMultiPropertyObject(property: Property | MultiProperty): property is Exclude<MultiProperty, any[]> {
  return typeof property == "object" && "values" in property && property.values instanceof Array;
}

/**
 * @internal
 */
export function isMultiProperty(property: Property | MultiProperty): property is MultiProperty {
  return isMultiPropertyList(property) || isMultiPropertyObject(property);
}
