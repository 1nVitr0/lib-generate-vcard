import { generateVCard } from "../../generate/vCard";
import { vCardDescriptorFixtures } from "../fixtures/generateVCard";

for (const entry of vCardDescriptorFixtures) {
  const { name, fixture, expected } = entry;

  test(name, () => {
    const output = generateVCard(fixture);
    expect(output).toEqual(expected.join("\r\n"));
  });
}
