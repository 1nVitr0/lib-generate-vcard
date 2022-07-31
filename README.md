# Generate vCard

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm-version](https://img.shields.io/npm/v/generate-vcard?logo=npm)](https://www.npmjs.com/package/generate-vcard)
[![coverage](https://img.shields.io/codecov/c/github/1nVitr0/lib-generate-vcard?logo=codecov&token=D1VD9GHM8B)](https://codecov.io/gh/1nVitr0/lib-generate-vcard)

A simple library for vCard generation compatible with [RFC 6350](https://tools.ietf.org/html/rfc6350) and additions defined in [RFC 6474](https://tools.ietf.org/html/rfc6474), [RFC 6715](https://tools.ietf.org/html/rfc6715) and [RFC 8605](https://tools.ietf.org/html/rfc8605).

The library also supports some experimental drafts for additional properties and parameters.
As they are not part of the official IANA spec, they will be prefixed with `X-` in the generated vCard.
The supported additions are some social properties as defined in [draft-george-vcarddav-vcard-extension-02](https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html),
the service type parameter for `IMPP` properties as defined in [draft-daboo-vcard-service-type](https://datatracker.ietf.org/doc/html/draft-daboo-vcard-service-type)
as well as the `X-ABLabel` property used by GMail and iOs for URL labelling, as described [here](https://alessandrorossini.org/the-sad-story-of-the-vcard-format-and-its-lack-of-interoperability/).

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
  name: { honorificPrefix: "Dr.", familyName: "Doe", givenName: "Jane"  },
  socialProfile: [
    { value: "https://instagram.com/", parameters: { type: "instagram" } },
    { value: "https://twitter.com/", parameters: { type: "twitter" } },
  ]
});
```

> ```text
> BEGIN:VCARD
> VERSION:4.0
> KIND:individual
> FN:Jane Doe
> N:Doe;Jane;;Dr.;
> X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/
> X-SOCIALPROFILE;TYPE=twitter:https://twitter.com/
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
