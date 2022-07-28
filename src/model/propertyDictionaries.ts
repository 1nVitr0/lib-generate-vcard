import { Text } from "./datatypes";

/**
 * Values for the kind property
 *
 * @category Properties
 */
export enum Kind {
  Individual = "individual",
  Group = "group",
  Organisation = "org",
  Location = "location",
}

/**
 * Values for the gender property
 *
 * @category Properties
 */
export enum Gender {
  Female = "F",
  Male = "M",
  None = "N",
  Other = "O",
  Unknown = "U",
}

/**
 * Dictionary representation of the name property value
 *
 * @category Properties
 */
export interface NamePropertyDict {
  familyName?: Text | Text[];
  givenName?: Text | Text[];
  additionalNames?: Text | Text[];
  honorificPrefix?: Text | Text[];
  honorificSuffix?: Text | Text[];
}

/**
 * Dictionary representation of the address property value
 *
 * @category Properties
 */
export interface AddressPropertyDict {
  poBox?: Text | Text[];
  extended?: Text | Text[];
  street?: Text | Text[];
  locality?: Text | Text[];
  region?: Text | Text[];
  postalCode?: Text | Text[];
  country?: Text | Text[];
}

/**
 * Dictionary representation of the gender property value
 *
 * @category Properties
 */
export interface GenderPropertyDict {
  sex: Gender;
  genderIdentity?: Text;
}
