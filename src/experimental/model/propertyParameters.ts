import { PropertyParameters, TypeParameter, PIdParameter, PrefParameter, AnyParameter } from "../../model/parameters";

/**
 * Valid Parameters for socialProfile properties
 *
 * @category Parameters
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export interface SocialProfilePropertyParameters
  extends PropertyParameters,
    TypeParameter<
      | "discord"
      | "douyin"
      | "facebook"
      | "flickr"
      | "github"
      | "imo"
      | "instagram"
      | "kuaishou"
      | "likee"
      | "line"
      | "linkedin"
      | "messenger"
      | "picsart"
      | "pinterest"
      | "qq"
      | "quora"
      | "qzone"
      | "reddit"
      | "skype"
      | "snapchat"
      | "stackexchange"
      | "teams"
      | "telegram"
      | "tieba"
      | "tiktok"
      | "tumblr"
      | "twitch"
      | "twitter"
      | "viber"
      | "wechat"
      | "weibo"
      | "whatsapp"
      | "xing"
      | "youtube"
    >,
    PIdParameter,
    PrefParameter,
    AnyParameter {}

/**
 * Valid Parameters for OpenID properties
 *
 * @category Parameters
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export interface OpenIdPropertyParameters extends PropertyParameters, PIdParameter, PrefParameter, AnyParameter {}

/**
 * Valid Parameters for Album properties
 *
 * @category Parameters
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export interface AlbumPropertyParameters extends PropertyParameters, PIdParameter, PrefParameter, AnyParameter {}

/**
 * Valid Parameters for Depiction properties
 *
 * @category Parameters
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export interface DepictionPropertyParameters extends PropertyParameters, PIdParameter, PrefParameter, AnyParameter {}

/**
 * Valid Parameters for SocialCode properties
 *
 * @category Parameters
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export interface SocialCodePropertyParameters extends PropertyParameters, PIdParameter, PrefParameter, AnyParameter {}

/**
 * Valid Parameters for ABLabel properties
 * This is used by iOs to add labels to URL properties (very unclear support)
 *
 * @category Parameters
 * @see https://alessandrorossini.org/the-sad-story-of-the-vcard-format-and-its-lack-of-interoperability/
 * @experimental
 */
export interface ABLabelPropertyParameters extends PropertyParameters, PIdParameter, PrefParameter, AnyParameter {}
