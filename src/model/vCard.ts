import {
  ABLabelProperty,
  AlbumProperty,
  DepictionProperty,
  OpenIdProperty,
  SocialCodeProperty,
  SocialProfileProperty,
} from "../experimental/model/properties";
import { XName } from "./datatypes";
import { PropertyParameters } from "./parameters";
import {
  AddressProperty,
  AnniversaryProperty,
  BeginProperty,
  BirthdayProperty,
  BirthPlaceProperty,
  CalendarAddressUriProperty,
  CalendarUriProperty,
  CategoriesProperty,
  ClientPidMapDictionary,
  ClientPidMapProperty,
  ContactUriProperty,
  DeathDateProperty,
  DeathPlaceProperty,
  EmailProperty,
  EndProperty,
  ExpertiseProperty,
  FbUrlProperty,
  FullNameProperty,
  GenderProperty,
  GeoLocationProperty,
  HobbyProperty,
  ImppProperty,
  InterestProperty,
  KeyProperty,
  KindProperty,
  LanguageProperty,
  LogoProperty,
  MemberProperty,
  NameProperty,
  NickNameProperty,
  NoteProperty,
  OrganizationProperty,
  OrgDirectoryProperty,
  PhotoProperty,
  ProductIdProperty,
  RelatedProperty,
  RevisionProperty,
  RoleProperty,
  SoundProperty,
  SourceProperty,
  TelProperty,
  TimezoneProperty,
  TitleProperty,
  UidProperty,
  UrlProperty,
  VersionProperty,
  XmlProperty,
} from "./properties";
import { Kind } from "./propertyDictionaries";
import { PropertyName } from "./propertyNames";
import {
  SocialProfilePropertyValue,
  OpenIdPropertyValue,
  AlbumPropertyValue,
  DepictionPropertyValue,
  SocialCodePropertyValue,
  ABLabelPropertyValue,
} from "../experimental/model/propertyValues";
import {
  SocialProfilePropertyParameters,
  OpenIdPropertyParameters,
  AlbumPropertyParameters,
  DepictionPropertyParameters,
  SocialCodePropertyParameters,
  ABLabelPropertyParameters,
} from "../experimental/model/propertyParameters";
import {
  AddressPropertyParameters,
  AnniversaryPropertyParameters,
  BirthdayPropertyParameters,
  BirthPlacePropertyParameters,
  CalendarAddressUriPropertyParameters,
  CalendarUriPropertyParameters,
  CategoriesPropertyParameters,
  ClientPIdMapPropertyParameters,
  ContactUriPropertyParameters,
  DeathDatePropertyParameters,
  EmailPropertyParameters,
  ExpertisePropertyParameters,
  FbUrlPropertyParameters,
  FullNamePropertyParameters,
  GenderPropertyParameters,
  GeoLocationPropertyParameters,
  HobbyPropertyParameters,
  ImppPropertyParameters,
  InterestPropertyParameters,
  KeyPropertyParameters,
  KindPropertyParameters,
  LanguagePropertyParameters,
  LogoPropertyParameters,
  NamePropertyParameters,
  NickNamePropertyParameters,
  NotePropertyParameters,
  OrganizationPropertyParameters,
  OrgDirectoryPropertyParameters,
  PhotoPropertyParameters,
  ProductIdPropertyParameters,
  RelatedPropertyParameters,
  RevisionPropertyParameters,
  RolePropertyParameters,
  SoundPropertyParameters,
  SourcePropertyParameters,
  TelPropertyParameters,
  TimezonePropertyParameters,
  TitlePropertyParameters,
  UrlPropertyParameters,
  VersionPropertyParameters,
  XmlPropertyParameters,
} from "./propertyParameters";
import {
  AddressPropertyValue,
  AnniversaryPropertyValue,
  BirthdayPropertyValue,
  BirthPlacePropertyValue,
  CalendarAddressUriPropertyValue,
  CalendarUriPropertyValue,
  CategoriesPropertyValue,
  ClientPidMapPropertyValue,
  ContactUriPropertyValue,
  DeathDatePropertyValue,
  DeathPlacePropertyValue,
  EmailPropertyValue,
  ExpertisePropertyValue,
  FbUrlPropertyValue,
  FullNamePropertyValue,
  GenderPropertyValue,
  GeoLocationPropertyValue,
  HobbyPropertyValue,
  ImppPropertyValue,
  InterestPropertyValue,
  KeyPropertyValue,
  KindPropertyValue,
  LanguagePropertyValue,
  LogoPropertyValue,
  NamePropertyValue,
  NickNamePropertyValue,
  NotePropertyValue,
  OrganizationPropertyValue,
  OrgDirectoryPropertyValue,
  PhotoPropertyValue,
  ProductIdPropertyValue,
  PropertyValue,
  RecordedPropertyValue,
  RelatedPropertyValue,
  RevisionPropertyValue,
  RolePropertyValue,
  SoundPropertyValue,
  TelPropertyValue,
  TimezonePropertyValue,
  TitlePropertyValue,
  UrlPropertyValue,
  VersionPropertyValue,
  XmlPropertyValue,
} from "./propertyValues";

/**
 * The definition of a vCard in form of a dictionary of properties.
 *
 * @category Generate
 * @example
 * ```ts
 * const vCard = {
 *   kind: Kind.Individual,
 *   fullName: "Jane Doe",
 *   name: {
 *     familyName: "Doe",
 *     givenName: "John",
 *   },
 *   email: "john@doe.com"
 *   phone: [
 *     { value: "123456789", parameters: { type: "home" } },
 *     { value: "987654321", parameters: { type: "work" } },
 *   ]
 * };
 * ```
 */
export interface VCardDefinition {
  // General Properties
  begin?: BeginProperty;
  end?: EndProperty;
  source?: SourceProperty;
  kind: KindProperty;
  xml?: XmlProperty;
  // Identification Properties
  fullName: FullNameProperty;
  name?: NameProperty;
  nickName?: NickNameProperty;
  photo?: PhotoProperty;
  birthday?: BirthdayProperty;
  anniversary?: AnniversaryProperty;
  gender?: GenderProperty;
  // Delivery Addressing Properties
  address?: AddressProperty;
  // Communications Properties
  tel?: TelProperty;
  email?: EmailProperty;
  impp?: ImppProperty;
  language?: LanguageProperty;
  // Geographical Properties
  timezone?: TimezoneProperty;
  geoLocation?: GeoLocationProperty;
  // Organizational Properties
  title?: TitleProperty;
  role?: RoleProperty;
  logo?: LogoProperty;
  organization?: OrganizationProperty;
  related?: RelatedProperty;
  // Explanatory Properties
  categories?: CategoriesProperty;
  note?: NoteProperty;
  productId?: ProductIdProperty;
  revision?: RevisionProperty;
  sound?: SoundProperty;
  uid?: UidProperty;
  clientPidMap?: ClientPidMapProperty | ClientPidMapDictionary;
  url?: UrlProperty;
  version?: VersionProperty;
  // Security Properties
  key?: KeyProperty;
  fbUrl?: FbUrlProperty;
  calendarAddressUri?: CalendarAddressUriProperty;
  calendarUri?: CalendarUriProperty;
  // vCard Format Extensions: Place of Birth, Place and Date of Death RFC 6474
  birthPlace?: BirthPlaceProperty;
  deathPlace?: DeathPlaceProperty;
  deathDate?: DeathDateProperty;
  // Extensions defined by OMA and CAB in RFC 6715
  expertise?: ExpertiseProperty;
  hobby?: HobbyProperty;
  interest?: InterestProperty;
  orgDirectory?: OrgDirectoryProperty;
  // Extensions defined by RDAP in RFC 8605
  contactUri?: ContactUriProperty;
  // Experimental Properties
  /** @experimental */
  socialProfile?: SocialProfileProperty;
  /** @experimental */
  openId?: OpenIdProperty;
  /** @experimental */
  album?: AlbumProperty;
  /** @experimental */
  depiction?: DepictionProperty;
  /** @experimental */
  socialCode?: SocialCodeProperty;
  /** @experimental */
  abLabel?: ABLabelProperty;
}

/**
 * {@inheritDoc VCardDefinition}
 * @category Generate
 */
export interface VCardGroupDefinition extends VCardDefinition {
  kind: KindProperty<Kind.Group>;
  // Organizational Properties
  member?: MemberProperty;
}

export type VCardProperty = Exclude<VCardDefinition[keyof VCardDefinition], undefined> | MemberProperty;

/**
 * @internal
 * @category Internally Used
 */
export type VCardListProperty<
  Name extends PropertyName | XName = PropertyName | XName,
  Value extends PropertyValue | RecordedPropertyValue = PropertyValue | RecordedPropertyValue,
  Parameters extends PropertyParameters = PropertyParameters
> = { property: Name; value: Value; parameters?: Parameters };

/**
 * vCard definition in form of an array of vCard properties
 *
 * @category Generate
 * @example
 * ```ts
 * generateVCard([
 *   { property: PropertyName.kind, value: Kind.Individual },
 *   { property: PropertyName.fullName, value: "Jane Doe" },
 *   { property: PropertyName.name, value: { familyName: "Doe", name: "John" } },
 *   { property: PropertyName.email, value: "john@doe.com" },
 *   { property: PropertyName.tel, value: "123456789", parameters: { type: "home" } },
 *   { property: PropertyName.tel, value: "987654321", parameters: { type: "work" } },
 * ]);
 * ```
 */
export type VCardList = (
  | VCardListProperty<PropertyName.begin, "VCARD", {}>
  | VCardListProperty<PropertyName.end, "VCARD", {}>
  | VCardListProperty<PropertyName.source, SoundPropertyValue, SourcePropertyParameters>
  | VCardListProperty<PropertyName.kind, KindPropertyValue, KindPropertyParameters>
  | VCardListProperty<PropertyName.xml, XmlPropertyValue, XmlPropertyParameters>
  | VCardListProperty<PropertyName.fullName, FullNamePropertyValue, FullNamePropertyParameters>
  | VCardListProperty<PropertyName.name, NamePropertyValue, NamePropertyParameters>
  | VCardListProperty<PropertyName.nickName, NickNamePropertyValue, NickNamePropertyParameters>
  | VCardListProperty<PropertyName.photo, PhotoPropertyValue, PhotoPropertyParameters>
  | VCardListProperty<PropertyName.birthday, BirthdayPropertyValue, BirthdayPropertyParameters>
  | VCardListProperty<PropertyName.anniversary, AnniversaryPropertyValue, AnniversaryPropertyParameters>
  | VCardListProperty<PropertyName.gender, GenderPropertyValue, GenderPropertyParameters>
  | VCardListProperty<PropertyName.address, AddressPropertyValue, AddressPropertyParameters>
  | VCardListProperty<PropertyName.tel, TelPropertyValue, TelPropertyParameters>
  | VCardListProperty<PropertyName.email, EmailPropertyValue, EmailPropertyParameters>
  | VCardListProperty<PropertyName.impp, ImppPropertyValue, ImppPropertyParameters>
  | VCardListProperty<PropertyName.language, LanguagePropertyValue, LanguagePropertyParameters>
  | VCardListProperty<PropertyName.timezone, TimezonePropertyValue, TimezonePropertyParameters>
  | VCardListProperty<PropertyName.geoLocation, GeoLocationPropertyValue, GeoLocationPropertyParameters>
  | VCardListProperty<PropertyName.title, TitlePropertyValue, TitlePropertyParameters>
  | VCardListProperty<PropertyName.role, RolePropertyValue, RolePropertyParameters>
  | VCardListProperty<PropertyName.logo, LogoPropertyValue, LogoPropertyParameters>
  | VCardListProperty<PropertyName.organization, OrganizationPropertyValue, OrganizationPropertyParameters>
  | VCardListProperty<PropertyName.related, RelatedPropertyValue, RelatedPropertyParameters>
  | VCardListProperty<PropertyName.categories, CategoriesPropertyValue, CategoriesPropertyParameters>
  | VCardListProperty<PropertyName.note, NotePropertyValue, NotePropertyParameters>
  | VCardListProperty<PropertyName.productId, ProductIdPropertyValue, ProductIdPropertyParameters>
  | VCardListProperty<PropertyName.revision, RevisionPropertyValue, RevisionPropertyParameters>
  | VCardListProperty<PropertyName.sound, SoundPropertyValue, SoundPropertyParameters>
  | VCardListProperty<PropertyName.clientPidMap, ClientPidMapPropertyValue, ClientPIdMapPropertyParameters>
  | { property: PropertyName.clientPidMap; value: ClientPidMapDictionary; parameters?: ClientPIdMapPropertyParameters }
  | VCardListProperty<PropertyName.url, UrlPropertyValue, UrlPropertyParameters>
  | VCardListProperty<PropertyName.version, VersionPropertyValue, VersionPropertyParameters>
  | VCardListProperty<PropertyName.key, KeyPropertyValue, KeyPropertyParameters>
  | VCardListProperty<PropertyName.fbUrl, FbUrlPropertyValue, FbUrlPropertyParameters>
  | VCardListProperty<PropertyName.calendarUri, CalendarAddressUriPropertyValue, CalendarAddressUriPropertyParameters>
  | VCardListProperty<PropertyName.calendarUri, CalendarUriPropertyValue, CalendarUriPropertyParameters>
  | VCardListProperty<PropertyName.birthPlace, BirthPlacePropertyValue, BirthPlacePropertyParameters>
  | VCardListProperty<PropertyName.deathPlace, DeathPlacePropertyValue, DeathDatePropertyParameters>
  | VCardListProperty<PropertyName.deathDate, DeathDatePropertyValue, DeathDatePropertyParameters>
  | VCardListProperty<PropertyName.expertise, ExpertisePropertyValue, ExpertisePropertyParameters>
  | VCardListProperty<PropertyName.hobby, HobbyPropertyValue, HobbyPropertyParameters>
  | VCardListProperty<PropertyName.interest, InterestPropertyValue, InterestPropertyParameters>
  | VCardListProperty<PropertyName.orgDirectory, OrgDirectoryPropertyValue, OrgDirectoryPropertyParameters>
  | VCardListProperty<PropertyName.contactUri, ContactUriPropertyValue, ContactUriPropertyParameters>
  | VCardListProperty<XName, PropertyValue, PropertyParameters>
  | VCardListProperty<PropertyName.socialProfile, SocialProfilePropertyValue, SocialProfilePropertyParameters>
  | VCardListProperty<PropertyName.openId, OpenIdPropertyValue, OpenIdPropertyParameters>
  | VCardListProperty<PropertyName.album, AlbumPropertyValue, AlbumPropertyParameters>
  | VCardListProperty<PropertyName.depiction, DepictionPropertyValue, DepictionPropertyParameters>
  | VCardListProperty<PropertyName.socialCode, SocialCodePropertyValue, SocialCodePropertyParameters>
  | VCardListProperty<PropertyName.abLabel, ABLabelPropertyValue, ABLabelPropertyParameters>
)[];
