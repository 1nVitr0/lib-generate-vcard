import { MultiProperty, Property } from "../model/properties";
import { VCard, VCardGroup } from "../model/vCard";
import { isMultiProperty, isMultiPropertyList } from "../validate/properties";
import { mergeParameters } from "./parameters";
import { generateProperty } from "./property";

export function generateContentLine<VCardType extends VCard | VCardGroup, Name extends keyof VCardType>(
  propertyKey: string,
  data: Property | MultiProperty
): string {
  if (isMultiProperty(data)) {
    const properties: Property[] = isMultiPropertyList(data)
      ? data
      : data.values.map((v) => mergeParameters(data.commonParameters, v));

    return properties.map((entry) => generateContentLine(propertyKey, entry)).join("\r\n");
  }

  const { property, value, parameters, group } = generateProperty(propertyKey, data);
  /* istanbul ignore next */
  return `${group ? `${group}.` : ""}${property}${parameters.length ? `;${parameters.join(";")}` : ""}:${value}`;
}
