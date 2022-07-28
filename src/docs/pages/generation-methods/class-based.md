[//]: # (Class based approach)

To integrate with object-oriented styles, the `VCard` class is exposed:

```ts
import { VCard } from "generate-vcard";

const vCard = new VCard(Kind.Individual);
vCard.setFullName("Jane Doe");

vCard.toString();
```

When using parameters, these can be specified simply by passing them as another parameter to the `setter`:

```ts
vCard.setFullName("Jane Doe", { language: "de-de" });
```

To generate the string representation of the vCard, the `toString()` method is used:

```ts
vCard.toString();
```

This offers good typing support as the allowed properties are strictly typed, however the declaration still allows for some flexibility.
For large vCards it might be cumbersome to set the properties seperately. For this, either the [Functional / Object based approach](./object-based.html) or the static `fromVCardObject` method may be used:

```ts
const vCard = VCard.fromVCardObject({
  kind: Kind.Individual,
  fullName: "Jane Doe",
});
```
