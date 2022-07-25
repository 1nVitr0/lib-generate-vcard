import {
  DateAndOrTime,
  DateAndOrTimeString,
  DateOnly,
  DateTime,
  DateTimeString,
  LanguageTag,
  TimeOnly,
  TimeStamp,
  TimeString,
  Uri,
  UtcOffset,
} from "../model/datatypes";
import { ValueType } from "../model/parameters";
import { Kind } from "../model/propertyValues";
import { escapeValue } from "./escape";

interface PartialDate {
  year?: number;
  month?: number;
  day?: number;
  hasDate?: boolean;
  hour?: number;
  minute?: number;
  second?: number;
  hasTime?: boolean;
  tzUtc?: boolean;
  tzOperator?: "+" | "-";
  tzHour?: number;
  tzMinute?: number;
  hasTz?: boolean;
}

function parsePartialDateTime(dateTimeString: TimeString | DateAndOrTimeString | DateTimeString): PartialDate {
  const result: PartialDate = {};

  const parts = dateTimeString.split(" ");
  const datePart = parts.find((part) => part.indexOf("-") !== -1);
  const timePart = parts.find((part) => part.indexOf(":") !== -1);

  if (datePart) {
    result.hasDate = true;
    const [year, month, day] = datePart.split("-");
    if (year !== "*") result.year = parseInt(year, 10);
    if (month !== "*") result.month = parseInt(month, 10);
    if (day !== "*") result.day = parseInt(day, 10);
  }

  if (timePart) {
    result.hasTime = true;
    const [time, timezone] = timePart.split(/[+\-Z]/);

    const [hour, minute, second] = time.split(":");
    if (hour !== "*") result.hour = parseInt(hour, 10);
    if (minute !== "*") result.minute = parseInt(minute, 10);
    if (second && second !== "*") result.second = parseInt(second, 10);

    if (timezone == "") {
      result.hasTz = true;
      result.tzUtc = true;
    } else if (timezone) {
      result.hasTz = true;
      const [tzHour, tzMinute] = timezone.split(":");
      result.tzOperator = timePart.indexOf("+") !== -1 ? "+" : "-";
      result.tzHour = parseInt(tzHour, 10);
      if (tzMinute) result.tzMinute = parseInt(tzMinute, 10);
    }
  }

  return result;
}

function dateToPartialDateTime(date: Date | number): PartialDate {
  date = date instanceof Date ? date : new Date(date);
  const result: PartialDate = {};

  result.year = date.getFullYear();
  result.month = date.getMonth() + 1;
  result.day = date.getDate();
  result.hour = date.getHours();
  result.minute = date.getMinutes();
  result.second = date.getSeconds();
  result.tzOperator = date.getTimezoneOffset() < 0 ? "+" : "-";
  result.tzHour = Math.abs(date.getTimezoneOffset() / 60);
  result.tzMinute = Math.abs(date.getTimezoneOffset() % 60);

  result.hasDate = true;
  result.hasTime = result.hour !== 0 || result.minute !== 0 || result.second !== 0;
  result.hasTz = result.tzHour !== 0 || result.tzMinute !== 0;

  return result;
}

function toUtcOffsetString(partialDate: PartialDate | UtcOffset): string {
  if (typeof partialDate === "string") {
    const [_, tzOperator, tzHour, tzMinute] = partialDate.match(/([+-])(\d+):?(\d+)?/)!;
    return `${tzOperator}${parseInt(tzHour).toFixed(0).padStart(2, "0")}${
      tzMinute ? parseInt(tzMinute).toFixed(0).padStart(2, "0") : ""
    }`;
  } else {
    const { tzOperator, tzHour = 0, tzMinute = 0 } = partialDate;
    return `${tzOperator}${Math.abs(tzHour).toFixed(0).padStart(2, "0")}${
      tzMinute ? tzMinute.toFixed(0).padStart(2, "0") : ""
    }`;
  }
}

function toTimeString(partialDate: PartialDate, full = false, noTrunc = false): string {
  let result = "";
  const { hasTz } = partialDate;

  const { hour, minute, second } = partialDate;
  if (full) {
    result += `${hour!.toFixed(0).padStart(2, "0")}${minute!.toFixed(0).padStart(2, "0")}${second!
      .toFixed(0)
      .padStart(2, "0")}`;
  } else if (noTrunc) {
    result += `${hour?.toFixed(0).padStart(2, "0")}${minute ? minute.toFixed(0).padStart(2, "0") : ""}${
      second ? second.toFixed(0).padStart(2, "0") : ""
    }`;
  } else {
    result += `${hour ? hour.toFixed(0).padStart(2, "0") : "-"}${
      minute ? minute.toFixed(0).padStart(2, "0") : second ? "-" : ""
    }${second ? second.toFixed(0).padStart(2, "0") : ""}`;
  }

  if (hasTz) {
    const { tzUtc } = partialDate;
    result += tzUtc ? "Z" : toUtcOffsetString(partialDate);
  }

  return result;
}

function toDateString(partialDate: PartialDate, full = false, noTrunc = false): string {
  const { year, month, day } = partialDate;
  if (noTrunc || full) {
    return `${year ? year.toFixed(0).padStart(4, "0") : "--"}${month ? month.toFixed(0).padStart(2, "0") : "-"}${day
      ?.toFixed(0)
      .padStart(2, "0")}`;
  } else {
    return `${year ? year.toFixed(0).padStart(4, "0") : "--"}${
      month ? month.toFixed(0).padStart(2, "0") : day !== undefined ? "-" : ""
    }${day ? day.toFixed(0).padStart(2, "0") : ""}`;
  }
}

function toPartialDateAndOrTimeString(partialDate: PartialDate, full = false, noTrunc = false): string {
  let result = "";
  const { hasDate, hasTime } = partialDate;

  if (hasDate) {
    result += toDateString(partialDate, full, hasTime || noTrunc);
  }

  if (hasTime) {
    result += `T${toTimeString(partialDate, full, hasDate || noTrunc)}`;
  }

  return result;
}

/**
 * @internal
 */
export function generateTextValue(value: string | string[], separator: string = ","): string {
  return value instanceof Array ? value.map(escapeValue).join(separator) : escapeValue(value);
}

/**
 * @internal
 */
export function generateUriValue(value: Uri | Uri[], separator: string = ","): string {
  return generateTextValue(value, separator);
}

/**
 * @internal
 */
export function generateDateOnlyValue(value: DateOnly | DateOnly[], separator: string = ","): string {
  const dates = (value instanceof Array ? value : [value]).map((date) =>
    date instanceof Date || typeof date == "number"
      ? dateToPartialDateTime(date)
      : parsePartialDateTime(date as DateAndOrTimeString)
  );
  return dates.map((date) => toDateString(date, true)).join(separator);
}

/**
 * @internal
 */
export function generateTimeValue(value: TimeOnly | TimeOnly[], separator: string = ","): string {
  const times = (value instanceof Array ? value : [value]).map((time) =>
    time instanceof Date || typeof time == "number"
      ? dateToPartialDateTime(time)
      : parsePartialDateTime(time as DateAndOrTimeString)
  );
  return times.map((time) => toTimeString(time)).join(separator);
}

/**
 * @internal
 */
export function generateDateAndOrTimeValue(value: DateAndOrTime | DateAndOrTime[], separator: string = ","): string {
  const dates = (value instanceof Array ? value : [value]).map((date) =>
    date instanceof Date || typeof date == "number"
      ? dateToPartialDateTime(date)
      : parsePartialDateTime(date as DateAndOrTimeString)
  );
  return dates.map((date) => toPartialDateAndOrTimeString(date)).join(separator);
}

/**
 * @internal
 */
export function generateDateTimeValue(value: DateTime | DateTime[], separator: string = ","): string {
  const dates = (value instanceof Array ? value : [value]).map((date) =>
    date instanceof Date || typeof date == "number"
      ? dateToPartialDateTime(date)
      : parsePartialDateTime(date as DateAndOrTimeString)
  );
  return dates.map((date) => toPartialDateAndOrTimeString(date, false, true)).join(separator);
}

/**
 * @internal
 */
export function generateTimeStampValue(value: TimeStamp | TimeStamp[], separator: string = ","): string {
  const dates = (value instanceof Array ? value : [value]).map((date) =>
    typeof date == "number" ? dateToPartialDateTime(date) : parsePartialDateTime(date as DateAndOrTimeString)
  );
  return dates.map((date) => toPartialDateAndOrTimeString(date, true, true)).join(separator);
}

/**
 * @internal
 */
export function generateUtcOffsetValue(value: UtcOffset | UtcOffset[], separator: string = ","): string {
  return value instanceof Array ? value.map((z) => toUtcOffsetString(z)).join(separator) : toUtcOffsetString(value);
}

/**
 * @internal
 */
export function generateLanguageTagValue(value: LanguageTag | LanguageTag[], separator: string = ","): string {
  return generateTextValue(value, separator);
}

/**
 * @internal
 */
export function generateValueValue(value: ValueType | ValueType[], separator: string = ","): string {
  return generateTextValue(value, separator);
}

/**
 * @internal
 */
export function generateKindValue(value: Kind | Kind[], separator: string = ","): string {
  return value instanceof Array ? value.join(separator) : value;
}

/**
 * @internal
 */
export function generateTypeValue(value: string | string[], separator: string = ","): string {
  return value instanceof Array ? value.join(separator) : value;
}

/**
 * @internal
 */
export function generateBooleanValue(value: boolean | boolean[], separator: string = ","): string {
  return value instanceof Array ? value.join(separator) : value ? "true" : "false";
}

/**
 * @internal
 */
export function generateIntegerValue(value: number | number[], separator: string = ","): string {
  return value instanceof Array ? value.map((n) => n.toFixed(0)).join(separator) : value.toFixed(0);
}

/**
 * @internal
 */
export function generateFloatValue(value: number | number[], separator: string = ","): string {
  return value instanceof Array ? value.join(separator) : value.toString();
}
