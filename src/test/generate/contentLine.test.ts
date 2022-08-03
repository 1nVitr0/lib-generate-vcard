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

test("folds ascii lines", () => {
  expect(
    generateContentLine("N", {
      value: {
        givenName: "Jane",
        familyName: "Doe",
        additionalNames: "Emily",
        honorificPrefix: "Professor",
        honorificSuffix: "the Third",
      },
      parameters: {
        language: "en",
        type: "work",
        sortAs: "Jane Emily Doe",
      },
    })
  ).toStrictEqual("N;LANGUAGE=en;TYPE=work;SORT-AS=Jane Emily Doe:Doe;Jane;Emily;Professor;the\r\n  Third");
});

test("folds utf8 lines", () => {
  expect(
    generateContentLine("N", {
      value: {
        givenName: "Jâné",
        familyName: "Dôè",
        additionalNames: "Émìly",
        honorificPrefix: "Professeure",
        honorificSuffix: "le troisième",
      },
      parameters: {
        language: "fr",
        type: ["work", "home"],
        sortAs: "Jâné Émìly Dôè",
      },
    })
  ).toStrictEqual("N;LANGUAGE=fr;TYPE=work,home;SORT-AS=Jâné Émìly Dôè:Dôè;Jâné;Ém\r\n ìly;Professeure;le troisième");
});
