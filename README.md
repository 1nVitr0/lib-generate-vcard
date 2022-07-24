# Generate vCard

A simple library for [vCard](https://tools.ietf.org/html/rfc6350) generation.

## Documentation

For more documentation see [https://1nvitr0.github.io/lib-generate-vcard/](https://1nvitr0.github.io/lib-generate-vcard/).

## Installation

```bash
npm install --save generate-vcard
```

## Usage

```javascript
import generateVCard, { Kind } from "generate-vcard";

const vCard = generateVCard({
  kind: Kind.Individual,
  fullName: "Aram Becker",
});
```

> ```vcs
> BEGIN:VCARD
> VERSION:4.0
> KIND:individual
> FN:Aram Becker
> END:VCARD
> ```
