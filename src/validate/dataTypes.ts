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

export function isText(value: any): value is Text {
  return typeof value === "string";
}

export function isXName(value: any): value is XName {
  return typeof value === "string" && (value.startsWith("x-") || value.startsWith("X-"));
}

export function isTimeOnly(value: any): value is TimeOnly {
  return typeof value === "string" && value.includes(":") && !value.includes("-");
}

export function isDateOnly(value: any): value is DateOnly {
  return typeof value === "string" && value.includes("-") && !value.includes(":");
}

export function isDateAndOrTime(value: any): value is DateAndOrTime {
  return (
    (typeof value === "string" && (value.includes("-") || value.includes(":"))) ||
    typeof value === "number" ||
    value instanceof Date
  );
}

export function isDateTime(value: any): value is DateTime {
  return (
    (typeof value === "string" && value.includes("-") && value.includes(":")) ||
    typeof value === "number" ||
    value instanceof Date
  );
}

export function isTimeStamp(value: any): value is TimeStamp {
  return (
    (typeof value === "string" && value.includes("-") && value.includes(":") && !value.includes("*")) ||
    typeof value === "number" ||
    value instanceof Date
  );
}

export function isUtcOffset(value: any): value is UtcOffset {
  return typeof value === "string" && /^[+\-]\d+(:\d+)?$/.test(value);
}

export function isLanguageTag(value: any): value is LanguageTag {
  return typeof value === "string" && /^[a-z]{2}(\-[a-zA-Z0-9]+)*$/.test(value);
}

export function isUri(value: any): value is Uri {
  return typeof value === "string" && value.includes(":") && /[:\/?#\[\]@!$&'()*+,;=\-\._\~a-zA-Z0-9%]/.test(value);
}

export function isKind(value: any): value is Kind {
  return typeof value === "string" && Object.values(Kind).includes(value as Kind);
}

export function isGender(value: any): value is Gender {
  return typeof value === "string" && Object.values(Gender).includes(value as Gender);
}

export function ianaIsUtf8(value: any): boolean {
  return typeof value === "string" && !/^[\x00-\xFF]*$/.test(value);
}
