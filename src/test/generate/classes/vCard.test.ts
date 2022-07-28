import { vCardDescriptorFixtures } from "../../fixtures/generateVCard";
import VCard from "../../../model/classes/VCard";
import { Kind } from "../../../model/propertyDictionaries";

for (const entry of vCardDescriptorFixtures) {
  const { name, fixture, expected } = entry;

  if (!(fixture instanceof Array)) {
    test(`${name} with VCard Class`, () => {
      const vCard = VCard.fromVCardObject(fixture);
      const output = vCard.stringify();
      expect(output.split("\r\n").sort()).toEqual([...expected].sort());
    });
  }
}

test("Setters with parameters", () => {
  const vCard = new VCard(Kind.Individual);
  vCard.setFullName("Jane Doe", { language: "en-ud" });

  expect(vCard.stringify().split("\r\n").sort()).toEqual(
    ["BEGIN:VCARD", "VERSION:4.0", "FN;LANGUAGE=en-ud:Jane Doe", "KIND:individual", "END:VCARD"].sort()
  );
});

test("Setters with object and parameters", () => {
  const vCard = new VCard(Kind.Individual);
  vCard.setFullName({ value: "Jane Doe", parameters: { type: "work" } }, { language: "en-ud" });

  expect(vCard.stringify().split("\r\n").sort()).toEqual(
    ["BEGIN:VCARD", "VERSION:4.0", "FN;TYPE=work;LANGUAGE=en-ud:Jane Doe", "KIND:individual", "END:VCARD"].sort()
  );
});

test("Setters with multiple parameters", () => {
  const vCard = new VCard(Kind.Individual);
  vCard.setFullName([{ value: "Jane Doe" }, { value: "John Doe" }], { language: "en-ud" });

  expect(vCard.stringify().split("\r\n").sort()).toEqual(
    [
      "BEGIN:VCARD",
      "VERSION:4.0",
      "FN;LANGUAGE=en-ud:Jane Doe",
      "FN;LANGUAGE=en-ud:John Doe",
      "KIND:individual",
      "END:VCARD",
    ].sort()
  );
});

test("Setters with default parameters", () => {
  const vCard = new VCard(Kind.Individual);
  vCard.setFullName({ commonParameters: { type: "work" }, values: ["Jane Doe", "John Doe"] }, { language: "en-ud" });

  expect(vCard.stringify().split("\r\n").sort()).toEqual(
    [
      "BEGIN:VCARD",
      "VERSION:4.0",
      "FN;TYPE=work;LANGUAGE=en-ud:Jane Doe",
      "FN;TYPE=work;LANGUAGE=en-ud:John Doe",
      "KIND:individual",
      "END:VCARD",
    ].sort()
  );
});

test("ClientPidMap Dictionary with parameters throws error", () => {
  const vCard = new VCard(Kind.Individual);
  // @ts-expect-error
  expect(() => vCard.setClientPidMap({ "0": "http://example.com" }, { language: "en-ud" })).toThrowError();
});
