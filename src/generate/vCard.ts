import { Text, Uri } from "../model/datatypes";
import {
  BeginProperty,
  ClientPidMapDictionary,
  ClientPidMapProperty,
  EndProperty,
  MultiProperty,
  Property,
  VersionProperty,
} from "../model/properties";
import { VCardDefinition, VCardGroupDefinition, VCardList, VCardProperty } from "../model/vCard";
import { isClientPidMapDict } from "../validate/properties";
import { generateContentLine } from "./contentLine";

type BeginEntry = ["begin", BeginProperty];
type EndEntry = ["end", EndProperty];
type VersionEntry = ["version", VersionProperty];

function expandClientPidMap(clientPidMap: ClientPidMapDictionary): [string, ClientPidMapProperty][] {
  const result: [string, { pid: Text; uri: Uri }][] = [];
  for (const [pid, uri] of Object.entries(clientPidMap) as [Text, Uri][]) {
    result.push(["CLIENTPIDMAP", { pid, uri }]);
  }

  return result;
}

function expandAllClientPidMaps(entries: [string, VCardProperty][]): [string, Property | MultiProperty][] {
  const pidMapEntries = [];
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    if (key === "clientPidMap" && isClientPidMapDict(value)) {
      pidMapEntries.push(...expandClientPidMap(value));
      entries.splice(i--, 1);
    }
  }
  entries.push(...pidMapEntries);

  return entries as [string, Property | MultiProperty][];
}

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
  const entries: [string, VCardProperty][] =
    vCard instanceof Array
      ? vCard.map(({ property, value, parameters }) => [property, { value, parameters }])
      : Object.entries(vCard);

  let index = entries.findIndex(([prop]) => prop === "begin");
  const begin = (index > -1 ? entries.splice(index, 1)[0] : ["begin", "VCARD"]) as BeginEntry;

  index = entries.findIndex(([prop]) => prop === "end");
  const end = (index > -1 ? entries.splice(index, 1)[0] : ["end", "VCARD"]) as EndEntry;

  index = entries.findIndex(([prop]) => prop === "version");
  const version = (index > -1 ? entries.splice(index, 1)[0] : ["version", "4.0"]) as VersionEntry;

  return [begin, version, ...expandAllClientPidMaps(entries), end]
    .map(([property, value]) => generateContentLine(property, value))
    .join("\r\n");
}
