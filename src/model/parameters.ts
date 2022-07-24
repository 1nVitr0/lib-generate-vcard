import { LanguageTag, IanaToken, XName } from "./datatypes";

export enum TelType {
  Text = "text",
  Voice = "voice",
  Fax = "fax",
  Cell = "cell",
  Video = "video",
  Pager = "pager",
  Textphone = "textphone",
}

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

export type TypeType<AdditionalTypes extends string = never> = "work" | "home" | AdditionalTypes;

export interface LanguageParameter {
  language?: LanguageTag;
}

export interface ValueParameter<Type extends ValueType = ValueType> {
  value?: Type;
}

export interface PrefParameter {
  pref?: number;
}

export interface AltIdParameter {
  altId?: number | string;
}

export interface PIdParameter {
  pId?: number | number[];
}

export interface TypeParameter<AdditionalTypes extends string = never> {
  type?: TypeType<AdditionalTypes> | TypeType<AdditionalTypes>[];
}

export interface MediaTypeParameter {
  mediaType?: `${string}/${string}`;
  mediaTypeAttributes?: Record<string, string>;
}

export interface CalscaleParameter {
  calScale?: "gregorian" | IanaToken | XName;
}

export interface SortAsParameter {
  sortAs?: string | number | (string | number)[];
}

export interface GeoParameter {
  geo?: string;
}

export interface TimezoneParameter {
  tz?: string;
}

export interface LabelParameter {
  label?: string;
}

export interface IanaCharsetParameter {
  charset?: "UTF-8";
}

export interface AnyParameter extends IanaCharsetParameter, Partial<Record<XName, string | string[]>> {}

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
