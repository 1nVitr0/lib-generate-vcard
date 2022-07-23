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
