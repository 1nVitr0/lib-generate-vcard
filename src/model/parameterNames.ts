import { NamedParameters } from "./parameters";

export type ParameterName =
  | "LANGUAGE"
  | "ALTID"
  | "CALSCALE"
  | "GEO"
  | "LABEL"
  | "MEDIATYPE"
  | "PID"
  | "PREF"
  | "SORT-AS"
  | "TZ"
  | "TYPE"
  | "VALUE"
  | "CHARSET";

export const parameterNames: Record<keyof NamedParameters, ParameterName> = {
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
  charset: "CHARSET",
};

export const ignoreParameters: string[] = ["group"];
