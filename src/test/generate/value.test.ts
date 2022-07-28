import {
  generateBooleanValue,
  generateDateAndOrTimeValue,
  generateDateOnlyValue,
  generateDateTimeValue,
  generateTimeValue,
  generateTimeStampValue,
  generateUtcOffsetValue,
  generateFloatValue,
  generateIntegerValue,
  generateKindValue,
  generateLanguageTagValue,
  generateValueValue,
  generateTypeValue,
  generateTextValue,
  generateUriValue,
} from "../../generate/value";
import { Kind } from "../../model/propertyDictionaries";
import { tz } from "../helpers";

test("generate bolean", () => {
  expect(generateBooleanValue(true)).toBe("true");
  expect(generateBooleanValue(false)).toBe("false");
  expect(generateBooleanValue([true, false], ";")).toBe("true;false");
});

test("generate date and or time from Date", () => {
  expect(generateDateAndOrTimeValue(new Date("2022-07-01T02:03:04"))).toBe(`20220701T020304${tz()}`);
  expect(generateDateAndOrTimeValue(new Date("2022-07-01T02:03:00"))).toBe(`20220701T0203${tz()}`);
  expect(generateDateAndOrTimeValue(new Date("2022-07-01T02:00:00"))).toBe(`20220701T02${tz()}`);
  expect(generateDateAndOrTimeValue(new Date("2022-07-01T00:00:00"))).toBe("20220701");
  expect(generateDateAndOrTimeValue([new Date("2022-07-01T02:03:04"), new Date("2022-07-01T00:00:00")], ";")).toBe(
    `20220701T020304${tz()};20220701`
  );
});

test("generate date and or time from string", () => {
  expect(generateDateAndOrTimeValue("2022-07-01 02:03:04+02:30")).toBe("20220701T020304+0230");
  expect(generateDateAndOrTimeValue("2022-07-01 02:03:04-02")).toBe("20220701T020304-02");
  expect(generateDateAndOrTimeValue("2022-07-01 02:03:04")).toBe("20220701T020304");
  expect(generateDateAndOrTimeValue("2022-07-01 02:03")).toBe("20220701T0203");
  expect(generateDateAndOrTimeValue("2022-07-01 02:*")).toBe("20220701T02");
  expect(generateDateAndOrTimeValue("*-*-01 02:03:04")).toBe("---01T020304");
  expect(generateDateAndOrTimeValue("2022-07-01")).toBe("20220701");
  expect(generateDateAndOrTimeValue("02:*:04")).toBe("T02-04");
  expect(generateDateAndOrTimeValue("2022-07-*")).toBe("202207");
  expect(generateDateAndOrTimeValue("2022-*-*")).toBe("2022");
  expect(generateDateAndOrTimeValue("02:03")).toBe("T0203");
  expect(generateDateAndOrTimeValue("02:*")).toBe("T02");
  expect(generateDateAndOrTimeValue(["2022-07-01 02:03:04+02:30", "02:*"], ";")).toBe("20220701T020304+0230;T02");
});

test("generate date only from Date", () => {
  expect(generateDateOnlyValue(new Date("2022-07-01T02:03:04"))).toBe("20220701");
  expect(generateDateOnlyValue([new Date("2022-07-01T02:03:04"), new Date("2022-07-01T02:03:04")], ";")).toBe(
    "20220701;20220701"
  );
});

test("generate date only from string", () => {
  expect(generateDateOnlyValue("2022-07-01")).toBe("20220701");
  expect(generateDateOnlyValue("*-*-01")).toBe("---01");
  expect(generateDateOnlyValue("*-07-01")).toBe("--0701");
  expect(generateDateOnlyValue("2022-*-01")).toBe("2022-01");
  expect(generateDateOnlyValue(["2022-07-01", "2022-*-01"], ";")).toBe("20220701;2022-01");
});

test("generate datetime from Date", () => {
  expect(generateDateTimeValue(new Date("2022-07-01T02:03:04"))).toBe(`20220701T020304${tz()}`);
  expect(generateDateTimeValue(new Date("2022-07-01T02:03:00"))).toBe(`20220701T0203${tz()}`);
  expect(generateDateTimeValue(new Date("2022-07-01T02:00:00"))).toBe(`20220701T02${tz()}`);
  expect(generateDateTimeValue([new Date("2022-07-01T02:03:04"), new Date("2022-07-01T02:03:04")], ";")).toBe(
    `20220701T020304${tz()};20220701T020304${tz()}`
  );
});

test("generate datetime from string", () => {
  expect(generateDateTimeValue("2022-07-01 02:03:04+02:30")).toBe("20220701T020304+0230");
  expect(generateDateTimeValue("2022-07-01 02:03:04")).toBe("20220701T020304");
  expect(generateDateTimeValue("2022-07-01 02:03")).toBe("20220701T0203");
  expect(generateDateTimeValue("2022-07-01 02:*")).toBe("20220701T02");
  expect(generateDateTimeValue("*-*-01 02:03:04")).toBe("---01T020304");
});

test("generate time from date", () => {
  expect(generateTimeValue(new Date("2022-07-01T02:03:04"))).toBe(`020304${tz()}`);
  expect(generateTimeValue(new Date("2022-07-01T02:03:00"))).toBe(`0203${tz()}`);
  expect(generateTimeValue(new Date("2022-07-01T02:00:00"))).toBe(`02${tz()}`);
  expect(generateTimeValue([new Date("2022-07-01T02:03:04"), new Date("2022-07-01T02:03:04")], ";")).toBe(
    `020304${tz()};020304${tz()}`
  );
});

test("generate time from string", () => {
  expect(generateTimeValue("02:03:04+02:30")).toBe("020304+0230");
  expect(generateTimeValue("02:03:04Z")).toBe("020304Z");
  expect(generateTimeValue("02:03:04")).toBe("020304");
  expect(generateTimeValue("02:03")).toBe("0203");
  expect(generateTimeValue("02:*")).toBe("02");
  expect(generateTimeValue("*:03:04")).toBe("-0304");
  expect(generateTimeValue("*:*:04")).toBe("--04");
  expect(generateTimeValue(["02:03:04", "02:03:04"], ";")).toBe("020304;020304");
});

test("generate timestamp from number", () => {
  expect(generateTimeStampValue(new Date("2022-07-01T02:03:04").getTime())).toBe(`20220701T020304${tz()}`);
  expect(
    generateTimeStampValue([new Date("2022-07-01T02:03:04").getTime(), new Date("2022-07-01T02:03:04").getTime()], ";")
  ).toBe(`20220701T020304${tz()};20220701T020304${tz()}`);
});

test("generate timestamp from string", () => {
  expect(generateTimeStampValue("2022-07-01 02:03:04+02:30")).toBe("20220701T020304+0230");
  expect(generateTimeStampValue(["2022-07-01 02:03:04+02:30", "2022-07-01 02:03:04-02:30"], ";")).toBe(
    "20220701T020304+0230;20220701T020304-0230"
  );
});

test("generate utc offset from string", () => {
  expect(generateUtcOffsetValue("+02:30")).toBe("+0230");
  expect(generateUtcOffsetValue("-02:30")).toBe("-0230");
  expect(generateUtcOffsetValue("+02")).toBe("+02");
  expect(generateUtcOffsetValue("-02")).toBe("-02");
  expect(generateUtcOffsetValue(["+02:30", "+02:30"], ";")).toBe("+0230;+0230");
});

test("generate float", () => {
  expect(generateFloatValue(1.2)).toBe("1.2");
  expect(generateFloatValue([1.2, 1.2], ";")).toBe("1.2;1.2");
});

test("generate integer", () => {
  expect(generateIntegerValue(5)).toBe("5");
  expect(generateIntegerValue(1.2)).toBe("1");
  expect(generateIntegerValue([5, 1.2], ";")).toBe("5;1");
});

test("generate kind", () => {
  expect(generateKindValue(Kind.Group)).toBe(Kind.Group);
  expect(generateKindValue([Kind.Group, Kind.Group], ";")).toBe(Kind.Group + ";" + Kind.Group);
});

test("generate language tag", () => {
  expect(generateLanguageTagValue("en-US")).toBe("en-US");
  expect(generateLanguageTagValue(["en-US", "en-US"], ";")).toBe("en-US;en-US");
});

test("generate value", () => {
  expect(generateValueValue("date-and-or-time")).toBe("date-and-or-time");
  expect(generateValueValue(["date-and-or-time", "text"], ";")).toBe("date-and-or-time;text");
});

test("generate type value", () => {
  expect(generateTypeValue("test")).toBe("test");
  expect(generateTypeValue(["test", "test"], ";")).toBe("test;test");
});

test("generate uri", () => {
  expect(generateUriValue("http://example.com")).toBe("http://example.com");
  expect(generateUriValue(["http://example.com", "http://example.com"], ";")).toBe(
    "http://example.com;http://example.com"
  );
});

test("generate text", () => {
  expect(generateTextValue("test")).toBe("test");
  expect(generateTextValue(["test", "test"], ";")).toBe("test;test");
});

test("escapes text", () => {
  expect(generateTextValue(",;\\")).toBe("\\,\\;\\\\");
});
