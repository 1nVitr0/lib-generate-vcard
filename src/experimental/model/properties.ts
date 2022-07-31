import { MultiOrSingleProperty } from "../../model/properties";
import { Uri } from "../../model/datatypes";
import { ABLabelPropertyParameters } from "./propertyParameters";
import {
  SocialProfilePropertyParameters,
  OpenIdPropertyParameters,
  AlbumPropertyParameters,
  DepictionPropertyParameters,
  SocialCodePropertyParameters,
} from "./propertyParameters";

/**
 * A social profile property.
 *
 * @category Properties
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export type SocialProfileProperty = MultiOrSingleProperty<Uri, SocialProfilePropertyParameters>;

/**
 * An OpenID property.
 *
 * @category Properties
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export type OpenIdProperty = MultiOrSingleProperty<Uri, OpenIdPropertyParameters>;

/**
 * An Album property.
 *
 * @category Properties
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export type AlbumProperty = MultiOrSingleProperty<Uri, AlbumPropertyParameters>;

/**
 * A Depiction property.
 *
 * @category Properties
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export type DepictionProperty = MultiOrSingleProperty<Uri, DepictionPropertyParameters>;

/**
 * A SocialCode property.
 *
 * @category Properties
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export type SocialCodeProperty = MultiOrSingleProperty<Uri, SocialCodePropertyParameters>;

/**
 * An ABLabel property
 * This is used by iOs to add labels to URL properties (very unclear support)
 *
 * @remarks
 * Usage: Used together with a URL property, belonging to the same group.
 * The ABLabel property is used to add a label to the URL property.
 * Often in the form `_$!<HomePage>!$_`, `_$!<Home>!$_`, `_$!<Mobile>!$_`
 * or `Twitter`, `Facebook`
 *
 * @category Properties
 * @see https://alessandrorossini.org/the-sad-story-of-the-vcard-format-and-its-lack-of-interoperability/
 * @experimental
 *
 * @example
 * ```ts
 * const vCard = generateVCard({
 *   url: {
 *     value: "https://blog.com",
 *     group: "blogUrl",
 *   },
 *   abLabel: {
 *     value: "_$!<HomePage>!$_",
 *     group: "blogUrl",
 *   },
 * });
 * ```
 */
export type ABLabelProperty = MultiOrSingleProperty<string, ABLabelPropertyParameters>;
