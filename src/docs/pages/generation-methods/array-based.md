[//]: # (Functional / Array based approach)

Alternatively, the `generateVCard` function, also accepts an `Array` of property objects.

```ts
import generateVCard, { Kind, PropertyName } from "generate-vcard";

const vCard = generateVCard([
  { property: PropertyName.kind, value: Kind.Individual },
  { property: PropertyName.fullName, value: "Jane Doe" },
  { property: PropertyName.fullName, value: "Max Mustermann", parameters: { language: "de-de" } },
]);
```

As you can see parameters are simply added by providing the `parameters` property.
This offers more flexibilty, but doesn't allow for checking property cardinality.
Also, using `commonParameters` for adding parameters to multiple property values is not supported.

For stricter type checking or `commonParameters`, see [Functional / Object based approach](./object-based.html).
