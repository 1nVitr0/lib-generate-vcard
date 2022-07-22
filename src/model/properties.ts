import { Gender, Text } from "./datatypes";
import { VCard, VCardGroup } from "./vCard";

export interface PropertyDescriptor {
  property: Text;
  value: Text;
  parameters: Text[];
  group?: Text;
}

export interface NamePropertyValue {
  familyName?: Text | Text[];
  givenName?: Text | Text[];
  additionalNames?: Text | Text[];
  honorificPrefix?: Text | Text[];
  honorificSuffix?: Text | Text[];
}

export interface AddressPropertyValue {
  poBox?: Text | Text[];
  extended?: Text | Text[];
  street?: Text | Text[];
  locality?: Text | Text[];
  region?: Text | Text[];
  postalCode?: Text | Text[];
  country?: Text | Text[];
}

export interface GenderPropertyValue {
  sex: Gender;
  genderIdentity?: Text;
}

export const propertyNames: Record<keyof VCard | keyof VCardGroup, Text> = {
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
  language: "LANGUAGE",
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
