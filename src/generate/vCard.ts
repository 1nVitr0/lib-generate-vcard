import { VCardDefinition, VCardGroupDefinition, VCardList } from "../model/vCard";
import { generateContentLine } from "./contentLine";
import { PropertyName } from "../model/propertyNames";

/**
 * Generate a RFC 6350 compatible vCard string
 * from a vCard definition or an array of vCard properties.
 *
 * @category Generate
 * @param vCard vCard definition as an object or array
 * @returns the generated vCard as a string
 *
 * @example
 * ```ts
 * generateVCard({
 *   kind: Kind.Individual,
 *   fullName: "John Doe",
 *   name: {
 *    familyName: "Doe",
 *    givenName: "John",
 *   },
 *   email: "john@doe.com"
 *   phone: [
 *     { value: "123456789", parameters: { type: "home" } },
 *     { value: "987654321", parameters: { type: "work" } },
 *   ]
 * });
 * ```
 * @example
 * ```ts
 * generateVCard([
 *   { property: "KIND", value: Kind.Individual },
 *   { property: "FN", value: "John Doe" },
 *   { property: "N", value: { familyName: "Doe", name: "John" } },
 *   { property: "EMAIL", value: "john@doe.com" },
 *   { property: "TEL", value: "123456789", parameters: { type: "home" } },
 *   { property: "TEL", value: "987654321", parameters: { type: "work" } },
 * ]);
 * ```
 */
export function generateVCard(vCard: VCardDefinition | VCardGroupDefinition | VCardList): string {
  const entries =
    vCard instanceof Array
      ? vCard.map(
          ({ property, value, parameters }) => [property, { value, parameters }] as [PropertyName, VCardList[number]]
        )
      : Object.entries(vCard);

  const beginIndex = entries.findIndex(([key]) => key === "begin");
  const begin = beginIndex > -1 ? entries.splice(beginIndex, 1)[0] : ["begin", "VCARD"];
  const endIndex = entries.findIndex(([key]) => key === "end");
  const end = endIndex > -1 ? entries.splice(endIndex, 1)[0] : ["end", "VCARD"];
  const versionIndex = entries.findIndex(([key]) => key === "version");
  const version = versionIndex > -1 ? entries.splice(versionIndex, 1)[0] : ["version", "4.0"];

  const contentLines = [begin, version, ...entries, end].map(([key, value]) => generateContentLine(key, value));

  return contentLines.join("\r\n");
}
