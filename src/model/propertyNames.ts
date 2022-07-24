import { VCard, VCardGroup } from "./vCard";

export type PropertyName =
  | "ADR"
  | "ANNIVERSARY"
  | "BEGIN"
  | "BDAY"
  | "CALADRURI"
  | "CALURI"
  | "CATEGORIES"
  | "CLIENTPIDMAP"
  | "EMAIL"
  | "END"
  | "FBURL"
  | "FN"
  | "GENDER"
  | "GEO"
  | "IMPP"
  | "KEY"
  | "KIND"
  | "LANG"
  | "LOGO"
  | "MEMBER"
  | "N"
  | "NICKNAME"
  | "NOTE"
  | "ORG"
  | "PHOTO"
  | "PRODID"
  | "RELATED"
  | "REV"
  | "ROLE"
  | "SOUND"
  | "SOURCE"
  | "TEL"
  | "TZ"
  | "TITLE"
  | "UID"
  | "URL"
  | "VERSION"
  | "XML";

export const propertyNames: Record<keyof VCard | keyof VCardGroup, PropertyName> = {
  address: "ADR",
  anniversary: "ANNIVERSARY",
  begin: "BEGIN",
  birthday: "BDAY",
  calendarAddressUri: "CALADRURI",
  calendarUri: "CALURI",
  categories: "CATEGORIES",
  clientPidMap: "CLIENTPIDMAP",
  email: "EMAIL",
  end: "END",
  fbUrl: "FBURL",
  fullName: "FN",
  gender: "GENDER",
  geoLocation: "GEO",
  impp: "IMPP",
  key: "KEY",
  kind: "KIND",
  language: "LANG",
  logo: "LOGO",
  member: "MEMBER",
  name: "N",
  nickName: "NICKNAME",
  note: "NOTE",
  organization: "ORG",
  photo: "PHOTO",
  productId: "PRODID",
  related: "RELATED",
  revision: "REV",
  role: "ROLE",
  sound: "SOUND",
  source: "SOURCE",
  tel: "TEL",
  timezone: "TZ",
  title: "TITLE",
  uid: "UID",
  url: "URL",
  version: "VERSION",
  xml: "XML",
};
