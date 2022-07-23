import { MultiProperty, Property, PropertyValue, RecordedPropertyValue } from "../model/properties";

export function isPropertyObject(
  property: Property
): property is { value: PropertyValue | RecordedPropertyValue; parameters?: {} } {
  return typeof property == "object" && "value" in property;
}

export function isMultiPropertyList(property: Property | MultiProperty): property is Extract<MultiProperty, any[]> {
  return (
    property instanceof Array &&
    (property as any[]).every((entry) => typeof entry == "object" && !(entry instanceof Date || entry instanceof Array))
  );
}

export function isMultiPropertyObject(property: Property | MultiProperty): property is Exclude<MultiProperty, any[]> {
  return typeof property == "object" && "values" in property && property.values instanceof Array;
}

export function isMultiProperty(property: Property | MultiProperty): property is MultiProperty {
  return isMultiPropertyList(property) || isMultiPropertyObject(property);
}
