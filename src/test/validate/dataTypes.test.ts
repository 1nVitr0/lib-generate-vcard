import { Gender, Kind } from "../../model/propertyDictionaries";
import {
  isUtf8,
  isDateAndOrTime,
  isDateOnly,
  isDateTime,
  isGender,
  isKind,
  isLanguageTag,
  isText,
  isTimeOnly,
  isTimeStamp,
  isUri,
  isUtcOffset,
  isXName,
} from "../../validate/dataTypes";

test("detects utf-8", () => {
  expect(isUtf8("😄")).toBeTruthy();
  expect(isUtf8("ascii")).toBeFalsy();
});

test("detects date and or time", () => {
  expect(isDateAndOrTime(new Date())).toBeTruthy();
  expect(isDateAndOrTime(100)).toBeTruthy();
  expect(isDateAndOrTime("2022-01-01")).toBeTruthy();
  expect(isDateAndOrTime("2022-*-01")).toBeTruthy();
  expect(isDateAndOrTime("*-*-01")).toBeTruthy();
  expect(isDateAndOrTime("2022-01-01 01:02:03+03:30")).toBeTruthy();
  expect(isDateAndOrTime("2022-01-01 01:02:03")).toBeTruthy();
  expect(isDateAndOrTime("*-01-01 01:*:03+03")).toBeTruthy();
  expect(isDateAndOrTime("01:02:03+03:30")).toBeTruthy();
  expect(isDateAndOrTime("*:*:03+03:30")).toBeTruthy();
  expect(isDateAndOrTime("*:*:03")).toBeTruthy();
  expect(isDateAndOrTime("03:*")).toBeTruthy();
  expect(isDateAndOrTime("NO DATETIME")).toBeFalsy();
});

test("detects date only", () => {
  expect(isDateOnly("2022-01-01")).toBeTruthy();
  expect(isDateOnly("*-*-01")).toBeTruthy();
  expect(isDateOnly("2022-01-01 01:02:03")).toBeFalsy();
  expect(isDateOnly("2022-01-01 01:02")).toBeFalsy();
  expect(isDateOnly("01:02:*")).toBeFalsy();
  expect(isDateOnly("NO TIME")).toBeFalsy();
});

test("detects date time", () => {
  expect(isDateTime(new Date())).toBeTruthy();
  expect(isDateTime(100)).toBeTruthy();
  expect(isDateTime("2022-01-01 01:02:03")).toBeTruthy();
  expect(isDateTime("2022-01-01 01:02")).toBeTruthy();
  expect(isDateTime("2022-01-01")).toBeFalsy();
  expect(isDateTime("01:02:*")).toBeFalsy();
  expect(isDateTime("NO DATETIME")).toBeFalsy();
});

test("detects time only", () => {
  expect(isTimeOnly("01:02:03")).toBeTruthy();
  expect(isTimeOnly("01:02")).toBeTruthy();
  expect(isTimeOnly("01:*")).toBeTruthy();
  expect(isTimeOnly("2022-01-01")).toBeFalsy();
  expect(isTimeOnly("*-*-01")).toBeFalsy();
  expect(isTimeOnly("NO TIME")).toBeFalsy();
});

test("detects time stamp", () => {
  expect(isTimeStamp(new Date())).toBeTruthy();
  expect(isTimeStamp(100)).toBeTruthy();
  expect(isTimeStamp("2022-01-01 01:02:03+03:30")).toBeTruthy();
  expect(isTimeStamp("2022-01-01 01:02:03")).toBeTruthy();
  expect(isTimeStamp("2022-01-01 01:02")).toBeTruthy();
  expect(isTimeStamp("01:02:*")).toBeFalsy();
  expect(isTimeStamp("2022-01-01")).toBeFalsy();
  expect(isTimeStamp("NO TIMESTAMP")).toBeFalsy();
});

test("detects utc offset", () => {
  expect(isUtcOffset("+03:30")).toBeTruthy();
  expect(isUtcOffset("+03")).toBeTruthy();
  expect(isUtcOffset("-03:30")).toBeTruthy();
  expect(isUtcOffset("-03")).toBeTruthy();
  expect(isUtcOffset("NO UTC OFFSET")).toBeFalsy();
  expect(isUtcOffset("Z")).toBeFalsy();
});

test("detects gender", () => {
  expect(isGender(Gender.Other)).toBeTruthy();
  expect(isGender("F")).toBeTruthy();
  expect(isGender("NO GENDER")).toBeFalsy();
});

test("detects kind", () => {
  expect(isKind(Kind.Group)).toBeTruthy();
  expect(isKind("group")).toBeTruthy();
  expect(isKind("NO KIND")).toBeFalsy();
});

test("detects uri", () => {
  expect(isUri("http://example.com")).toBeTruthy();
  expect(isUri("ldap://[2001:db8::7]/c=GB?objectClass?one")).toBeTruthy();
  expect(isUri("NO URI")).toBeFalsy();
});

test("detects language tag", () => {
  expect(isLanguageTag("en-US")).toBeTruthy();
  expect(isLanguageTag("en-US-x-lvariant2")).toBeTruthy();
  expect(isLanguageTag("en-$#+")).toBeFalsy();
});

test("detects text", () => {
  expect(isText("text")).toBeTruthy();
  expect(isText("text\nwith\nnewlines")).toBeTruthy();
  expect(isText("!&/%/(&😃")).toBeTruthy();
  expect(isText(new Date())).toBeFalsy();
  expect(isText(3)).toBeFalsy();
  expect(isText(true)).toBeFalsy();
});

test("detects xname", () => {
  expect(isXName("x-name")).toBeTruthy();
  expect(isXName("X-NAME-1")).toBeTruthy();
  expect(isXName("X-nAmE-1eX")).toBeTruthy();
  expect(isXName("NO-X-NAME")).toBeFalsy();
});
