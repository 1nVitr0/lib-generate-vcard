import { ValueType } from "./parameters";
import { PropertyName } from "./propertyNames";

/**
 * @internal
 * @category Internally Used
 */
export const defaultPropertyTypes: Record<PropertyName, ValueType | null> = {
  ADR: "text",
  ANNIVERSARY: "date-and-or-time",
  BEGIN: null,
  BDAY: "date-and-or-time",
  CALADRURI: "uri",
  CALURI: "uri",
  CATEGORIES: "text",
  CLIENTPIDMAP: null,
  EMAIL: "text",
  END: null,
  FBURL: "uri",
  FN: "text",
  GENDER: "text",
  GEO: "uri",
  IMPP: "uri",
  KEY: "uri",
  KIND: "text",
  LANG: "language-tag",
  LOGO: "uri",
  MEMBER: "uri",
  N: "text",
  NICKNAME: "text",
  NOTE: "text",
  ORG: "text",
  PHOTO: "uri",
  PRODID: "text",
  RELATED: "uri",
  REV: "timestamp",
  ROLE: "text",
  SOUND: "uri",
  SOURCE: "uri",
  TEL: "uri",
  TZ: "text",
  TITLE: "text",
  UID: "uri",
  URL: "uri",
  VERSION: "text",
  XML: "text",
};
