import { generateParameters, mergeParameters } from "../../generate/parameters";

test("contains all listed parameters", () => {
  expect(
    generateParameters({
      altId: "0",
      language: "de-de",
      pref: "1",
      type: "work",
      calScale: "GREGORIAN",
      value: "text",
    })
  ).toStrictEqual(["ALTID=0", "LANGUAGE=de-de", "PREF=1", "TYPE=work", "CALSCALE=GREGORIAN", "VALUE=text"]);
});

test("ignores group parameter", () => {
  expect(generateParameters({ group: "group" })).toStrictEqual([]);
});

test("merges new parameters", () => {
  expect(mergeParameters({ altId: "0" }, "test")).toStrictEqual({ value: "test", parameters: { altId: "0" } });
  expect(mergeParameters({ altId: "0" }, { value: "test" })).toStrictEqual({
    value: "test",
    parameters: { altId: "0" },
  });
});

test("merges with existing parameters", () => {
  expect(mergeParameters({ altId: "0" }, { value: "test", parameters: { language: "de-de" } })).toStrictEqual({
    value: "test",
    parameters: { altId: "0", language: "de-de" },
  });
});

test("overwrites common parameters", () => {
  expect(
    mergeParameters({ altId: "0", language: "de-de" }, { value: "test", parameters: { language: "en-us" } })
  ).toStrictEqual({
    value: "test",
    parameters: { altId: "0", language: "en-us" },
  });
});

test("works with no empzy parameters", () => {
  expect(
    mergeParameters(undefined, {
      value: "test",
      parameters: { language: "en-us" },
    })
  ).toStrictEqual({
    value: "test",
    parameters: { language: "en-us" },
  });
});

test("works with value list", () => {
  expect(generateParameters({ language: ["de-de", "en-us"] })).toStrictEqual(["LANGUAGE=de-de,en-us"]);
});

test("works with custom parameters", () => {
  expect(generateParameters({ "X-TEST": "test" })).toStrictEqual(["X-TEST=test"]);
});
