import { generateProperty } from "../../generate/property";
import { Gender } from "../../model/propertyDictionaries";
import { ClientPidMapDictionary, ClientPidMapProperty } from "../../model/properties";

test("generates simple property", () => {
  expect(generateProperty("fullName", "test")).toStrictEqual({
    property: "FN",
    value: "test",
    group: undefined,
    parameters: [],
  });
});

test("honours value type", () => {
  expect(generateProperty("uid", { value: "test", group: undefined, parameters: { value: "text" } })).toStrictEqual({
    property: "UID",
    value: "test",
    group: undefined,
    parameters: ["VALUE=text"],
  });
});

test("honours text type", () => {
  expect(generateProperty("uid", { value: "test", group: undefined, parameters: { value: "text" } })).toStrictEqual({
    property: "UID",
    value: "test",
    group: undefined,
    parameters: ["VALUE=text"],
  });
});

test("honours integer type", () => {
  expect(generateProperty("uid", { value: 1, group: undefined, parameters: { value: "integer" } })).toStrictEqual({
    property: "UID",
    value: "1",
    group: undefined,
    parameters: ["VALUE=integer"],
  });
});

test("honours float type", () => {
  expect(generateProperty("uid", { value: 1.1, group: undefined, parameters: { value: "float" } })).toStrictEqual({
    property: "UID",
    value: "1.1",
    group: undefined,
    parameters: ["VALUE=float"],
  });
});

test("honours utc-offset type", () => {
  expect(
    generateProperty("uid", { value: "+01:30", group: undefined, parameters: { value: "utc-offset" } })
  ).toStrictEqual({
    property: "UID",
    value: "+0130",
    group: undefined,
    parameters: ["VALUE=utc-offset"],
  });
});

test("honours language-tag type", () => {
  expect(
    generateProperty("uid", { value: "en", group: undefined, parameters: { value: "language-tag" } })
  ).toStrictEqual({
    property: "UID",
    value: "en",
    group: undefined,
    parameters: ["VALUE=language-tag"],
  });
});

test("honours boolean type", () => {
  expect(generateProperty("uid", { value: true, group: undefined, parameters: { value: "boolean" } })).toStrictEqual({
    property: "UID",
    value: "true",
    group: undefined,
    parameters: ["VALUE=boolean"],
  });
});

test("honours date-time type", () => {
  expect(
    generateProperty("uid", { value: "2020-01-01 01:02:03", group: undefined, parameters: { value: "date-time" } })
  ).toStrictEqual({
    property: "UID",
    value: "20200101T010203",
    group: undefined,
    parameters: ["VALUE=date-time"],
  });
});

test("honours date type", () => {
  expect(
    generateProperty("uid", { value: "2020-01-01", group: undefined, parameters: { value: "date" } })
  ).toStrictEqual({
    property: "UID",
    value: "20200101",
    group: undefined,
    parameters: ["VALUE=date"],
  });
});

test("honours time type", () => {
  expect(generateProperty("uid", { value: "01:02:03", group: undefined, parameters: { value: "time" } })).toStrictEqual(
    {
      property: "UID",
      value: "010203",
      group: undefined,
      parameters: ["VALUE=time"],
    }
  );
});

test("honours date-and-or-time type", () => {
  expect(
    generateProperty("uid", {
      value: "2020-01-01 01:02:03",
      group: undefined,
      parameters: { value: "date-and-or-time" },
    })
  ).toStrictEqual({
    property: "UID",
    value: "20200101T010203",
    group: undefined,
    parameters: ["VALUE=date-and-or-time"],
  });
});

test("honours timestamp type", () => {
  expect(
    generateProperty("uid", {
      value: "2020-01-01 01:02:03+01:30",
      group: undefined,
      parameters: { value: "timestamp" },
    })
  ).toStrictEqual({
    property: "UID",
    value: "20200101T010203+0130",
    group: undefined,
    parameters: ["VALUE=timestamp"],
  });
});

test("honours uri type", () => {
  expect(
    generateProperty("fullName", { value: "http://example.com", group: undefined, parameters: { value: "uri" } })
  ).toStrictEqual({
    property: "FN",
    value: "http://example.com",
    group: undefined,
    parameters: ["VALUE=uri"],
  });
});

test("generates list", () => {
  expect(generateProperty("fullName", ["test", "test2"])).toStrictEqual({
    property: "FN",
    value: "test,test2",
    group: undefined,
    parameters: [],
  });
});

test("converts to boolean", () => {
  expect(
    generateProperty("uid", { value: "truthy", group: undefined, parameters: { value: "boolean" } })
  ).toStrictEqual({
    property: "UID",
    value: "true",
    group: undefined,
    parameters: ["VALUE=boolean"],
  });
  expect(generateProperty("uid", { value: "", group: undefined, parameters: { value: "boolean" } })).toStrictEqual({
    property: "UID",
    value: "false",
    group: undefined,
    parameters: ["VALUE=boolean"],
  });

  expect(
    generateProperty("uid", { value: ["truthy", ""], group: undefined, parameters: { value: "boolean" } })
  ).toStrictEqual({
    property: "UID",
    value: "true,false",
    group: undefined,
    parameters: ["VALUE=boolean"],
  });
});

test("ignores default type", () => {
  expect(generateProperty("uid", { value: "test", group: undefined, parameters: { value: "uri" } })).toStrictEqual({
    property: "UID",
    value: "test",
    group: undefined,
    parameters: [],
  });
});

test("declares non-default type", () => {
  expect(generateProperty("uid", "test")).toStrictEqual({
    property: "UID",
    value: "test",
    group: undefined,
    parameters: ["VALUE=text"],
  });
});

test("uses utf-8 on lists", () => {
  expect(generateProperty("fullName", ["test", "😄"])).toStrictEqual({
    property: "FN",
    value: "test,😄",
    group: undefined,
    parameters: ["CHARSET=UTF-8"],
  });
});

test("generates name from string", () => {
  expect(generateProperty("name", "Becker, Aram, Bero, Dr., Jr.")).toStrictEqual({
    property: "N",
    value: "Becker;Aram;Bero;Dr.;Jr.",
    group: undefined,
    parameters: [],
  });
});

test("generates name from empty string", () => {
  expect(generateProperty("name", "")).toStrictEqual({
    property: "N",
    value: ";;;;",
    group: undefined,
    parameters: [],
  });
});

test("generates gender from object", () => {
  expect(generateProperty("gender", { sex: Gender.None, genderIdentity: "test" })).toStrictEqual({
    property: "GENDER",
    value: "N;test",
    group: undefined,
    parameters: [],
  });
});

test("generates name from empty object", () => {
  expect(generateProperty("name", {})).toStrictEqual({
    property: "N",
    value: ";;;;",
    group: undefined,
    parameters: [],
  });
});

test("generates address from empty object", () => {
  expect(generateProperty("address", {})).toStrictEqual({
    property: "ADR",
    value: ";;;;;;",
    group: undefined,
    parameters: [],
  });
});

test("generates gender from array", () => {
  expect(generateProperty("gender", [Gender.None, "test"])).toStrictEqual({
    property: "GENDER",
    value: "N;test",
    group: undefined,
    parameters: [],
  });
});

test("generates timezone from utc offset", () => {
  expect(generateProperty("timezone", "+02:30")).toStrictEqual({
    property: "TZ",
    value: "+0230",
    group: undefined,
    parameters: ["VALUE=utc-offset"],
  });
});
