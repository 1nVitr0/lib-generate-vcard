import { NamedParameters } from "./parameters";

export const parameterNames: Record<keyof NamedParameters, string> = {
  language: "LANGUAGE",
  altId: "ALTID",
  calScale: "CALSCALE",
  geo: "GEO",
  label: "LABEL",
  mediaType: "MEDIATYPE",
  pId: "PID",
  pref: "PREF",
  sortAs: "SORT-AS",
  tz: "TZ",
  type: "TYPE",
  value: "VALUE",
};

export const ignoreParameters: string[] = ["group"];
