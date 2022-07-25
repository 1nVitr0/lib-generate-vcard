/**
 * X-name data type.
 * X-names are experimental data types and should not be used in production.
 *
 * @category DataType
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-3.3
 */
export type XName = `x-${string}` | `X-${string}`;

/**
 * IANA token data type.
 *
 * @experimental
 */
export type IanaToken = never;

/**
 * A string representation of a date.
 * `*` can be used to indicate an undisclosed date part.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "2020-01-01"
 * "2020-*-01"
 * "*-01-01"
 * ```
 */
export type DateString = Exclude<`${number | "*"}-${number | "*"}-${number | "*"}`, "*-*-*">;

/**
 * A string representation of a time. The seconds part is optional.
 * `*` can be used to indicate an undisclosed time part.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "01:02:03"
 * "01:*:03"
 * "01:*"
 * ```
 */
export type LocalTimeString = Exclude<
  `${number | "*"}:${number | "*"}:${number | "*"}` | `${number | "*"}:${number | "*"}`,
  "*:*:*" | "*:*"
>;

/**
 * A string representation of a timezone. The minutes part is optional.
 * Can either be the UTC declarator `Z` or a timezone offset.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "Z"
 * "-05:00"
 * "+05"
 * ```
 */
export type TimezoneString = "Z" | `${"+" | "-"}${number}${`:${number}` | ""}`;

/**
 * A string representation of a utc offset. The minutes part is optional.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "-05:00"
 * "+05"
 * ```
 */
export type UtcOffset = Exclude<TimezoneString, "Z">;

/**
 * A full string representation of a time. Can be combined with a timezone.
 * `*` can be used to indicate an undisclosed time part.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "01:02:03"
 * "01:*:03+02"
 * "01:*-01:30"
 * ```
 */
export type TimeString = LocalTimeString | `${LocalTimeString}${TimezoneString}`;

/**
 * A string representation of a date, time or a date-time.
 * `*` can be used to indicate an undisclosed date-time part.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "2020-01-01"
 * "2020-01-01T01:02:03"
 * "*-01-01T01:*Z"
 * "2020-01-*T01:02:03+02:30"
 * ```
 */
export type DateAndOrTimeString = DateString | TimeString | `${DateString} ${TimeString}`;

/**
 * A full string representation of a date-time.
 * `*` can be used to indicate an undisclosed date-time part.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "2020-01-01T01:02:03"
 * "2020-01-01T01:*:03Z"
 * "2020-01-01T01:*-01:30"
 * ```
 */
export type DateTimeString = `${`*-${number | "*"}-${number}` | `${number | "*"}-${number}-${number}`} ${
  | `${number}:${number | "*"}`
  | `${number}:${number}:${number | "*"}`
  | `${number}:*:*`}${"" | TimezoneString}`;

/**
 * A date in string representation or as a Date object.
 * `*` can be used to indicate an undisclosed date part.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "2020-01-01"
 * "*-01-01"
 * new Date("2020-01-01")
 * ```
 */
export type DateOnly = DateString | Date;

/**
 * A time in string representation or as a Date object.
 * `*` can be used to indicate an undisclosed time part.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "01:02:03"
 * "01:*:03"
 * "01:*"
 * new Date("1970-01-01 01:02:03")
 * ```
 */
export type TimeOnly = TimeString | Date;

/**
 * A date, time or date-time in string representation, unix timestamp or as a Date object.
 * `*` can be used to indicate an undisclosed date-time part.
 * When a date or unix timestamp is used, the result will be a date-time.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "2020-01-01"
 * "01:*:03"
 * "*-01-01T01:*Z"
 * new Date("2020-01-01T01:02:03")
 * 1658736768
 * ```
 */
export type DateAndOrTime = number | DateAndOrTimeString | Date;

/**
 * A full date-time in string representation, unix timestamp or as a Date object.
 * `*` can be used to indicate an undisclosed date-time part.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "2020-01-01T01:02:03"
 * "*-01-01T01:*Z"
 * new Date("2020-01-01T01:02:03")
 * 1658736768
 * ```
 */
export type DateTime = number | DateTimeString | Date;

/**
 * A full date-time in string representation, unix timestamp or as a Date object.
 * All parts must be disclosed. Timezone is optional.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "2020-01-01T01:30:00Z"
 * new Date("2020-01-01T01:02:03")
 * 1658736768
 * ```
 */
export type TimeStamp =
  | number
  | Date
  | `${number}-${number}-${number} ${number}:${number}:${number}${"" | TimezoneString}`;

/**
 * A language Tag as defined in RFC 5646.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc5646#section-2.1
 * @example
 * ```ts
 * "en-us"
 * "de"
 * "zh-cmn-Hans-CN"
 * ``
 */
export type LanguageTag = string;

/**
 * A text value
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-4
 * @example
 * ```ts
 * "Hello World"
 * ```
 */
export type Text = string;

/**
 * A Uri without any restrictions on the scheme.
 *
 * @category DataType
 * @see https://datatracker.ietf.org/doc/html/rfc3986#section-3
 * @example
 * ```ts
 * "http://example.com"
 * "ldap://ldap.example.com/cn=babs%20jensen"
 */
export type Uri = `${string}:${string}`;
