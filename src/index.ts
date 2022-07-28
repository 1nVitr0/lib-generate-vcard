/**
 * A simple library for vCard generation compatible with [RFC 6350](https://tools.ietf.org/html/rfc6350).
 *
 * @example Functional / Object based
 * ```ts
 * import generateVCard, { Kind } from "generate-vcard";
 *
 * const vCard = generateVCard({
 *   kind: Kind.Individual,
 *   fullName: "Jane Doe",
 * });
 * ```
 *
 * @example Functional / Array based
 * ```ts
 * import generateVCard, { Kind, PropertyName } from "generate-vcard";
 *
 * const vCard = generateVCard([
 *   { property: PropertyName.kind, value: Kind.Individual },
 *   { property: PropertyName.fullName, value: "Jane Doe" },
 * ]);
 * ```
 *
 * @example Class based
 * ```ts
 * import { VCard } from "generate-vcard";
 *
 * const vCard = new VCard(Kind.Individual);
 * vCard.setFullName("Jane Doe");
 *
 * vCard.toString();
 * ```
 *
 * @packageDocumentation
 */
import VCard from "./model/classes/VCard";
import { generateVCard } from "./generate/vCard";

export * from "./model/datatypes";
export * from "./model/properties";
export * from "./model/propertyDictionaries";
export * from "./model/propertyNames";
export * from "./model/propertyParameters";
export * from "./model/propertyValues";
export * from "./model/parameters";
export * from "./model/parameterNames";
export * from "./model/vCard";

export * from "./helpers/property";

export { VCard };
export default generateVCard;
