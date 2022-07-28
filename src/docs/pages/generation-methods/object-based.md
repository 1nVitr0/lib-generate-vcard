[//]: # (Functional / Object based approach)

The simplest method is using the default exported `generateVCard` function:

```ts
import generateVCard, { Kind } from "generate-vcard";

const vCard = generateVCard({
  kind: Kind.Individual,
  fullName: "Jane Doe",
});
```

When using parameters, these can be specified by using an object in the form of `{ value; parameters; }`:

```ts
const vCard = generateVCard({
  kind: Kind.Individual,
  fullName: { value: "Jane Doe", parameters: { language: "en-us" }},
});
```

This offers good typing support as the allowed properties are strictly typed, however the declaration still allows for some flexibility.
As such properties with a cardinality of `*` (0 or more) or `1*` (1 or more), can be supplied as an `Array` of objects in the form shown above,
or by using a `{ values; commonParameters?; }` notation.

```ts
const vCard = generateVCard({
  kind: Kind.Individual,
  fullName: [
    { value: "Jane Doe", parameters: { language: "en-us" }},
    { value: "Max Mustermann", parameters: { language: "de-de" }},
  ],
  nickName: { commonParameters: { value: "text" }, values: ["Nick", "Name"] }
});
```

For a more flexible approach, see [Functional / Array based approach](./array-based.html)
