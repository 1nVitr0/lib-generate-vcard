import { LanguageTag, IanaToken, XName, ValueType } from "./datatypes";

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

export interface TypeParameter<Value extends string = never> {
  type?: "work" | "home" | Value | ("work" | "home" | Value)[];
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
