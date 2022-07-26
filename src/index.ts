/**
 * A simple library for vCard generation compatible with [RFC 6350](https://tools.ietf.org/html/rfc6350),
 * [RFC 6474](https://tools.ietf.org/html/rfc6474). [RFC 6715](https://tools.ietf.org/html/rfc6715)
 * and [RFC 8605](https://tools.ietf.org/html/rfc8605).
 *
 * @example Functional / Object based { @link generateVCard }
 * ```ts
 * import generateVCard, { Kind } from "generate-vcard";
 *
 * const vCard = generateVCard({
 *   kind: Kind.Individual,
 *   fullName: "Jane Doe",
 * });
 * ```
 *
 * @example Functional / Array based { @link generateVCard }
 * ```ts
 * import generateVCard, { Kind, PropertyName } from "generate-vcard";
 *
 * const vCard = generateVCard([
 *   { property: PropertyName.kind, value: Kind.Individual },
 *   { property: PropertyName.fullName, value: "Jane Doe" },
 * ]);
 * ```
 *
 * @example Class based { @link VCard }
 * ```ts
 * import { VCard } from "generate-vcard";
 *
 * const vCard = new VCard(Kind.Individual);
 * vCard.setFullName("Jane Doe");
 *
 * vCard.toString();
 * ```
 *
 * @module generate-vcard
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
