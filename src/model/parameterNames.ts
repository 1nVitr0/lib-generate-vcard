import { NamedParameters } from "./parameters";

/**
 * Valid vCard parameter names.
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-10.3.2
 */
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

/**
 * @internal
 */
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

/**
 * @internal
 */
export const ignoreParameters: string[] = ["group"];
