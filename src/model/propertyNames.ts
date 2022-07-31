/**
 * Valid vCard property names.
 *
 * @category Properties
 * @see https://datatracker.ietf.org/doc/html/rfc6350#section-10.3.1
 */
export enum PropertyName {
  // vCard 4.0 as specified in RFC 6350
  address = "ADR",
  anniversary = "ANNIVERSARY",
  begin = "BEGIN",
  birthday = "BDAY",
  calendarAddressUri = "CALADRURI",
  calendarUri = "CALURI",
  categories = "CATEGORIES",
  clientPidMap = "CLIENTPIDMAP",
  email = "EMAIL",
  end = "END",
  fbUrl = "FBURL",
  fullName = "FN",
  gender = "GENDER",
  geoLocation = "GEO",
  impp = "IMPP",
  key = "KEY",
  kind = "KIND",
  language = "LANG",
  logo = "LOGO",
  member = "MEMBER",
  name = "N",
  nickName = "NICKNAME",
  note = "NOTE",
  organization = "ORG",
  photo = "PHOTO",
  productId = "PRODID",
  related = "RELATED",
  revision = "REV",
  role = "ROLE",
  sound = "SOUND",
  source = "SOURCE",
  tel = "TEL",
  timezone = "TZ",
  title = "TITLE",
  uid = "UID",
  url = "URL",
  version = "VERSION",
  xml = "XML",
  // vCard Format Extensions: Place of Birth, Place and Date of Death as specified in RFC 6474
  birthPlace = "BIRTHPLACE",
  deathPlace = "DEATHPLACE",
  deathDate = "DEATHDATE",
  // Extensions defined by OMA and CAB in RFC 6715
  expertise = "EXPERTISE",
  hobby = "HOBBY",
  interest = "INTEREST",
  orgDirectory = "ORG-DIRECTORY",
  // Extensions by RDAP in RFC 8605
  contactUri = "CONTACT-URI",
  // Experimental extensions
  socialProfile = "X-SOCIALPROFILE",
  openId = "X-OPENID",
  album = "X-ALBUM",
  depiction = "X-DEPICTION",
  socialCode = "X-SOCIALCODE",
  abLabel = "X-ABLabel",
}
