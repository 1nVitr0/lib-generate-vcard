import {
  Text,
  XName,
  DateOnly,
  DateAndOrTime,
  DateTime,
  TimeStamp,
  LanguageTag,
  Uri,
  TimeOnly,
  UtcOffset,
} from "../model/datatypes";
import { Gender, Kind } from "../model/propertyValues";

/**
 * @internal
 */
export function isText(value: any): value is Text {
  return typeof value === "string";
}

/**
 * @internal
 */
export function isXName(value: any): value is XName {
  return typeof value === "string" && (value.startsWith("x-") || value.startsWith("X-"));
}

/**
 * @internal
 */
export function isTimeOnly(value: any): value is TimeOnly {
  return typeof value === "string" && value.includes(":") && !value.includes("-");
}

/**
 * @internal
 */
export function isDateOnly(value: any): value is DateOnly {
  return typeof value === "string" && value.includes("-") && !value.includes(":");
}

/**
 * @internal
 */
export function isDateAndOrTime(value: any): value is DateAndOrTime {
  return (
    (typeof value === "string" && (value.includes("-") || value.includes(":"))) ||
    typeof value === "number" ||
    value instanceof Date
  );
}

/**
 * @internal
 */
export function isDateTime(value: any): value is DateTime {
  return (
    (typeof value === "string" && value.includes("-") && value.includes(":")) ||
    typeof value === "number" ||
    value instanceof Date
  );
}

/**
 * @internal
 */
export function isTimeStamp(value: any): value is TimeStamp {
  return (
    (typeof value === "string" && value.includes("-") && value.includes(":") && !value.includes("*")) ||
    typeof value === "number" ||
    value instanceof Date
  );
}

/**
 * @internal
 */
export function isUtcOffset(value: any): value is UtcOffset {
  return typeof value === "string" && /^[+\-]\d+(:\d+)?$/.test(value);
}

/**
 * @internal
 */
export function isLanguageTag(value: any): value is LanguageTag {
  return typeof value === "string" && /^[a-z]{2}(\-[a-zA-Z0-9]+)*$/.test(value);
}

/**
 * @internal
 */
export function isUri(value: any): value is Uri {
  return typeof value === "string" && value.includes(":") && /[:\/?#\[\]@!$&'()*+,;=\-\._\~a-zA-Z0-9%]/.test(value);
}

/**
 * @internal
 */
export function isKind(value: any): value is Kind {
  return typeof value === "string" && Object.values(Kind).includes(value as Kind);
}

/**
 * @internal
 */
export function isGender(value: any): value is Gender {
  return typeof value === "string" && Object.values(Gender).includes(value as Gender);
}

/**
 * @internal
 */
export function ianaIsUtf8(value: any): boolean {
  return typeof value === "string" && !/^[\x00-\xFF]*$/.test(value);
}
