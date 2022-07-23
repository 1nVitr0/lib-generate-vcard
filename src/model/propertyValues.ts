import { Text } from "./datatypes";

export enum Kind {
  Individual = "individual",
  Group = "group",
  Organisation = "org",
  Location = "location",
}

export enum Gender {
  Female = "F",
  Male = "M",
  None = "N",
  Other = "O",
  Unknown = "U",
}

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
