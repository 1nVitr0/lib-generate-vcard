import { generateContentLine } from "../../generate/contentLine";

test("generate content line for single Property", () => {
  expect(generateContentLine("FN", "test")).toStrictEqual("FN:test");
});

test("generate content line for multiple Property", () => {
  expect(generateContentLine("FN", [{ value: "test" }, { value: "test2" }])).toStrictEqual("FN:test\r\nFN:test2");
});

test("uses common parameters", () => {
  expect(
    generateContentLine("FN", {
      commonParameters: { altId: "1" },
      values: ["test", "test2"],
    })
  ).toStrictEqual("FN;ALTID=1:test\r\nFN;ALTID=1:test2");
});
