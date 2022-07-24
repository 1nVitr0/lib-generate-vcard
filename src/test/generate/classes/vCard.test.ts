import { vCardDescriptorFixtures } from "../../fixtures/generateVCard";
import VCard from "../../../model/classes/VCard";

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
