import { MultiProperty, Property } from "../model/properties";
import { isMultiProperty, isMultiPropertyList } from "../validate/properties";
import { mergeParameters } from "./parameters";
import { generateProperty } from "./property";

function foldLine(line: string, maxLength = 75): string {
  const encoder = new TextEncoder();
  const lines: string[] = [];
  let remaining = line;

  while (encoder.encode(remaining).length > maxLength) {
    let lineEnd = maxLength;
    let part = remaining.slice(0, lineEnd);
    while (encoder.encode(part).length > maxLength) {
      part = remaining.slice(0, --lineEnd);
    }
    lines.push(part);
    remaining = remaining.slice(lineEnd);
  }

  lines.push(remaining);

  return lines.join("\r\n ");
}

/**
 * @internal
 * @category Internally Used
 */
export function generateContentLine(propertyKey: string, data: Property | MultiProperty): string {
  if (isMultiProperty(data)) {
    const properties: Property[] = isMultiPropertyList(data)
      ? data
      : data.values.map((v) => mergeParameters(data.commonParameters, v));

    return properties.map((entry) => generateContentLine(propertyKey, entry)).join("\r\n");
  }

  const { property, value, parameters, group } = generateProperty(propertyKey, data);
  return foldLine(
    `${group ? `${group}.` : ""}${property}${parameters.length ? `;${parameters.join(";")}` : ""}:${value}`
  );
}
