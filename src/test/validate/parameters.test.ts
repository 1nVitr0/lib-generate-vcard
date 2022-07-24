import {
  isAltIdParameter,
  isCalscaleParameter,
  isGeoParameter,
  isIanaCharsetParameter,
  isLabelParameter,
  isLanguageParameter,
  isMediaTypeParameter,
  isPIdParameter,
  isPrefParameter,
  isSortAsParameter,
  isTimezoneParameter,
  isTypeParameter,
  isValueParameter,
} from "../../validate/parameters";

test("detects alt id", () => {
  expect(isAltIdParameter({ altId: "test" })).toBeTruthy();
  expect(isAltIdParameter({ altId: "test", other: "test" })).toBeTruthy();
  expect(isAltIdParameter({ other: "test" })).toBeFalsy();
});

test("detects calscale", () => {
  expect(isCalscaleParameter({ calScale: "test" })).toBeTruthy();
  expect(isCalscaleParameter({ calScale: "test", other: "test" })).toBeTruthy();
  expect(isCalscaleParameter({ other: "test" })).toBeFalsy();
});

test("detects geo", () => {
  expect(isGeoParameter({ geo: "test" })).toBeTruthy();
  expect(isGeoParameter({ geo: "test", other: "test" })).toBeTruthy();
  expect(isGeoParameter({ other: "test" })).toBeFalsy();
});

test("detects iana charset", () => {
  expect(isIanaCharsetParameter({ charset: "test" })).toBeTruthy();
  expect(isIanaCharsetParameter({ charset: "test", other: "test" })).toBeTruthy();
  expect(isIanaCharsetParameter({ other: "test" })).toBeFalsy();
});

test("detects label", () => {
  expect(isLabelParameter({ label: "test" })).toBeTruthy();
  expect(isLabelParameter({ label: "test", other: "test" })).toBeTruthy();
  expect(isLabelParameter({ other: "test" })).toBeFalsy();
});

test("detects language", () => {
  expect(isLanguageParameter({ language: "test" })).toBeTruthy();
  expect(isLanguageParameter({ language: "test", other: "test" })).toBeTruthy();
  expect(isLanguageParameter({ other: "test" })).toBeFalsy();
});

test("detects media type", () => {
  expect(isMediaTypeParameter({ mediaType: "test" })).toBeTruthy();
  expect(isMediaTypeParameter({ mediaType: "test", other: "test" })).toBeTruthy();
  expect(isMediaTypeParameter({ other: "test" })).toBeFalsy();
});

test("detects p id", () => {
  expect(isPIdParameter({ pId: "test" })).toBeTruthy();
  expect(isPIdParameter({ pId: "test", other: "test" })).toBeTruthy();
  expect(isPIdParameter({ other: "test" })).toBeFalsy();
});

test("detects pref", () => {
  expect(isPrefParameter({ pref: "test" })).toBeTruthy();
  expect(isPrefParameter({ pref: "test", other: "test" })).toBeTruthy();
  expect(isPrefParameter({ other: "test" })).toBeFalsy();
});

test("detects sort as", () => {
  expect(isSortAsParameter({ sortAs: "test" })).toBeTruthy();
  expect(isSortAsParameter({ sortAs: "test", other: "test" })).toBeTruthy();
  expect(isSortAsParameter({ other: "test" })).toBeFalsy();
});

test("detects timezone", () => {
  expect(isTimezoneParameter({ tz: "test" })).toBeTruthy();
  expect(isTimezoneParameter({ tz: "test", other: "test" })).toBeTruthy();
  expect(isTimezoneParameter({ other: "test" })).toBeFalsy();
});

test("detects type", () => {
  expect(isTypeParameter({ type: "test" })).toBeTruthy();
  expect(isTypeParameter({ type: "test", other: "test" })).toBeTruthy();
  expect(isTypeParameter({ other: "test" })).toBeFalsy();
});

test("detects value", () => {
  expect(isValueParameter({ value: "test" })).toBeTruthy();
  expect(isValueParameter({ value: "test", other: "test" })).toBeTruthy();
  expect(isValueParameter({ other: "test" })).toBeFalsy();
});
