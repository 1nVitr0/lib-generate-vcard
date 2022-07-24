import { VCardObject, VCardGroupObject, VCardList } from "../model/vCard";
import { generateContentLine } from "./contentLine";
import { PropertyName } from "../model/propertyNames";

export function generateVCard(vCard: VCardObject | VCardGroupObject | VCardList): string {
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
