/**
 * Valid vCard parameter names.
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-10.3.2
 */
export enum ParameterName {
  language = "LANGUAGE",
  altId = "ALTID",
  calScale = "CALSCALE",
  geo = "GEO",
  label = "LABEL",
  mediaType = "MEDIATYPE",
  pId = "PID",
  pref = "PREF",
  sortAs = "SORT-AS",
  tz = "TZ",
  type = "TYPE",
  value = "VALUE",
  charset = "CHARSET",
  level = "LEVEL",
  index = "INDEX",
  /** @experimantal */
  serviceType = "X-SERVICE-TYPE",
}

/**
 * @internal
 * @category Internally Used
 */
export const ignoreParameters: string[] = ["group"];
