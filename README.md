# Generate vCard

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm-version](https://img.shields.io/npm/v/generate-vcard?logo=npm)](https://www.npmjs.com/package/generate-vcard)
[![coverage](https://img.shields.io/codecov/c/github/1nVitr0/lib-generate-vcard?logo=codecov&token=D1VD9GHM8B)](https://codecov.io/gh/1nVitr0/lib-generate-vcard)

A simple library for vCard generation compatible with [RFC 6350](https://tools.ietf.org/html/rfc6350) and [RFC 6474](https://tools.ietf.org/html/rfc6474).

## Documentation

For more documentation see [https://1nvitr0.github.io/lib-generate-vcard/](https://1nvitr0.github.io/lib-generate-vcard/modules.html).

## Installation

```bash
npm install --save generate-vcard
```

## Usage

```javascript
import generateVCard, { Kind } from "generate-vcard";

const vCard = generateVCard({
  kind: Kind.Individual,
  fullName: "Jane Doe",
});
```

> ```text
> BEGIN:VCARD
> VERSION:4.0
> KIND:individual
> FN:Jane Doe
> END:VCARD
> ```

Alternative usages:

```javascript
import { VCard, Kind } from "generate-vcard";

const vCard = new VCard(Kind.Individual);
vCard.setFullName("Jane Doe"),

vCard.toString();
```

```javascript
import generateVCard, { Kind, PropertyName } from "generate-vcard";

const vCard = generateVCard([
  { property: PropertyName.kind, value: Kind.Individual },
  { property: PropertyName.fullName, value: "Jane Doe" },
]);
```
