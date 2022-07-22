export type XName = `x-${string}` | `X-${string}`;

export type IanaToken = "IANA";

export type DateString = Exclude<`${number | "*"}-${number | "*"}-${number | "*"}`, "*-*-*">;

export type LocalTimeString = Exclude<
  `${number | "*"}:${number | "*"}:${number | "*"}` | `${number | "*"}:${number | "*"}`,
  "*:*:*" | "*:*"
>;

export type TimezoneString = "Z" | `${"+" | "-"}${number}:${number}` | `${"+" | "-"}${number}:${number}:${number}`;

export type UtcOffset = Exclude<TimezoneString, "Z">;

export type TimeString = LocalTimeString | `${LocalTimeString}${TimezoneString}`;

export type DateAndOrTimeString = DateString | TimeString | `${DateString} ${TimeString}`;

export type DateTimeString = `${`*-*-${number}` | `*-${number}-${number}` | `${number}-${number}-${number}`} ${
  | number
  | `${number}:${number}`
  | `${number}:${number}:${number}`}${"" | TimezoneString}`;

export type DateOnly = DateString | Date;

export type TimeOnly = TimeString | Date;

export type DateAndOrTime = number | DateAndOrTimeString | Date;

export type DateTime = number | DateTimeString | Date;

export type TimeStamp = number | DateTimeString;

export type LanguageTag = string;

export type Text = string;

export type Uri = `${string}:${string}`;

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

export enum TelType {
  Text = "text",
  Voice = "voice",
  Fax = "fax",
  Cell = "cell",
  Video = "video",
  Pager = "pager",
  Textphone = "textphone",
}

export enum Relation {
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
