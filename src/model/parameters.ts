import { LanguageTag, IanaToken, XName } from "./datatypes";

/**
 * Additional type parameter values for the TEL property
 *
 * @category Parameters
 */
export enum TelType {
  Text = "text",
  Voice = "voice",
  Fax = "fax",
  Cell = "cell",
  Video = "video",
  Pager = "pager",
  Textphone = "textphone",
}

/**
 * Possible values for the REL parameter
 *
 * @category Parameters
 */
export enum RelationType {
  Contact = "contact",
  Acquaintance = "acquaintance",
  Friend = "friend",
  Met = "met",
  CoWorker = "co-worker",
  Colleague = "colleague",
  CoResident = "co-resident",
  Neighbor = "neighbor",
  Child = "child",
  Parent = "parent",
  Sibling = "sibling",
  Spouse = "spouse",
  Kin = "kin",
  Muse = "muse",
  Crush = "crush",
  Date = "date",
  Sweetheart = "sweetheart",
  Me = "me",
  Agent = "agent",
  Emergency = "emergency",
}

/**
 * Valid values for the VALUE parameter
 *
 * @category Parameters
 */
export type ValueType =
  | "text"
  | "uri"
  | "date"
  | "time"
  | "date-time"
  | "date-and-or-time"
  | "timestamp"
  | "boolean"
  | "integer"
  | "float"
  | "utc-offset"
  | "language-tag"
  | XName
  | IanaToken;

/**
 * Basic values for the TYPE parameter
 *
 * @category Parameters
 */
export type TypeType<AdditionalTypes extends string = never> = "work" | "home" | AdditionalTypes;

/**
 * Language Parameter
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.1
 */
export interface LanguageParameter {
  language?: LanguageTag;
}

/**
 * Value Parameter
 * Can be used to force a value type for a property.
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.2
 */
export interface ValueParameter<Type extends ValueType = ValueType> {
  value?: Type;
}

/**
 * Pref Parameter
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.3
 */
export interface PrefParameter {
  pref?: number;
}

/**
 * Alt ID Parameter
 * Is used to differentiate between multiple values of a property with cardinality 1 or *1.
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.4
 */
export interface AltIdParameter {
  altId?: number | string;
}

/**
 * P ID Parameter
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.5
 */
export interface PIdParameter {
  pId?: number | number[];
}

/**
 * Type Parameter
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.6
 */
export interface TypeParameter<AdditionalTypes extends string = never> {
  type?: TypeType<AdditionalTypes> | TypeType<AdditionalTypes>[];
}

/**
 * Media Type Parameter
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.7
 */
export interface MediaTypeParameter {
  mediaType?: `${string}/${string}`;
  mediaTypeAttributes?: Record<string, string>;
}

/**
 * Cal Scale Parameter
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.8
 */
export interface CalscaleParameter {
  calScale?: "gregorian" | IanaToken | XName;
}

/**
 * Sort-As Parameter
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.9
 */
export interface SortAsParameter {
  sortAs?: string | number | (string | number)[];
}

/**
 * Geo Parameter
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.10
 */
export interface GeoParameter {
  geo?: string;
}

/**
 * Time Zone Parameter
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-5.11
 */
export interface TimezoneParameter {
  tz?: string;
}

/**
 * Label Parameter to indicate a delivery address label in address properties
 *
 * @category Parameters
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-6.3.1
 */
export interface LabelParameter {
  label?: string;
}

/**
 * Charset Parameter to indicate a charset other than extended ascii in text properties
 *
 * @category Parameters
 */
export interface IanaCharsetParameter {
  charset?: "UTF-8";
}

/**
 * Additional Parameters such as X-names or registered IANA tokens
 *
 * @category Parameters
 */
export interface AnyParameter extends IanaCharsetParameter, Partial<Record<XName, string | string[]>> {}

/**
 * Any named parameter from RFC 6350
 *
 * @category Parameters
 */
export interface NamedParameters
  extends LanguageParameter,
    ValueParameter,
    PrefParameter,
    AltIdParameter,
    PIdParameter,
    TypeParameter,
    Omit<MediaTypeParameter, "mediaTypeAttributes">,
    CalscaleParameter,
    SortAsParameter,
    GeoParameter,
    TimezoneParameter,
    LabelParameter,
    IanaCharsetParameter {}
