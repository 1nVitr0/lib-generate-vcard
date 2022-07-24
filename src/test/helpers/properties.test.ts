import { vCardProperty } from "../../helpers/property";

test("generates value and parameters", () => {
  expect(vCardProperty("test", { value: "text" })).toStrictEqual({
    value: "test",
    parameters: { value: "text" },
  });
});

test("generates value only", () => {
  expect(vCardProperty("test")).toStrictEqual({ value: "test" });
});
