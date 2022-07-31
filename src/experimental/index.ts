/**
 * Adds additional properties and parameters from experimental drafts.
 * As they are not part of the official IANA spec, they will be prefixed with `X-`
 * in the generated vCard.
 * Supported additions are:
 *   - some social properties { @link https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html }
 *   - service type parameter for `IMPP` properties { @link https://datatracker.ietf.org/doc/html/draft-daboo-vcard-service-type }
 *   - `X-ABLabel` property used by GMail and iOs for URL labelling { @link https://alessandrorossini.org/the-sad-story-of-the-vcard-format-and-its-lack-of-interoperability/ }
 *
 * @example Functional / Object based
 * ```ts
 * import generateVCard, { Kind } from "generate-vcard";
 *
 * const vCard = generateVCard({
 *   kind: Kind.Individual,
 *   fullName: "Jane Doe",
 *   socialProfile: [
 *     { value: "https://instagram.com/", parameters: { type: "instagram" } },
 *     { value: "https://twitter.com/", parameters: { type: "twitter" } },
 *   ]
 * });
 * ```
 * @module generate-vcard/experimental
 */
export * from "./model/parameters";
export * from "./model/properties";
export * from "./model/propertyParameters";
export * from "./model/propertyValues";
