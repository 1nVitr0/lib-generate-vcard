import { Gender, Kind } from "../../model/propertyValues";
import { VCard, VCardGroup, VCardList } from "../../model/vCard";

export const vCardDescriptorFixtures: { name: string; fixture: VCard | VCardGroup | VCardList; expected: string[] }[] =
  [
    {
      name: "Minimal vCard",
      fixture: {
        kind: Kind.Individual,
        fullName: "Aram Becker",
      },
      expected: ["BEGIN:VCARD", "VERSION:4.0", "KIND:individual", "FN:Aram Becker", "END:VCARD"],
    },
    {
      name: "Minimal List VCard",
      fixture: [
        { property: "KIND", value: Kind.Individual },
        { property: "FN", value: "Aram Becker" },
      ],
      expected: ["BEGIN:VCARD", "VERSION:4.0", "KIND:individual", "FN:Aram Becker", "END:VCARD"],
    },
    {
      name: "Duplicate address",
      fixture: {
        kind: Kind.Individual,
        fullName: "Aram Becker",
        name: {
          familyName: "Becker",
          givenName: "Aram",
          additionalNames: "Bero",
        },
        gender: Gender.Male,
        address: [
          {
            street: "Jungfernheideweg 49",
            postalCode: "13629",
            locality: "Berlin",
            country: "Germany",
          },
          {
            extended: "Lydia Riedel",
            street: "Saatwunkler Damm 353",
            postalCode: "13599",
            locality: "Berlin",
            country: "Germany",
          },
        ],
        birthday: "*-02-29",
      },
      expected: [
        "BEGIN:VCARD",
        "VERSION:4.0",
        "KIND:individual",
        "FN:Aram Becker",
        "N:Becker;Aram;Bero;;",
        "GENDER:M",
        "ADR:;;Jungfernheideweg 49;Berlin;;13629;Germany",
        "ADR:;Lydia Riedel;Saatwunkler Damm 353;Berlin;;13599;Germany",
        "BDAY:--0229",
        "END:VCARD",
      ],
    },
  ];
