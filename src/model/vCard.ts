import {
  AddressProperty,
  AnniversaryProperty,
  BeginProperty,
  BirthdayProperty,
  CalendarAddressUriProperty,
  CalendarUriProperty,
  CategoriesProperty,
  ClientPidMapDictionary,
  ClientPidMapProperty,
  EmailProperty,
  EndProperty,
  FbUrlProperty,
  FullNameProperty,
  GenderProperty,
  GeoLocationProperty,
  ImppProperty,
  KeyProperty,
  KindProperty,
  LanguageProperty,
  LogoProperty,
  MemberProperty,
  NameProperty,
  NickNameProperty,
  NoteProperty,
  OrganizationProperty,
  PhotoProperty,
  ProductIdProperty,
  Property,
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
import { PropertyName } from "./propertyNames";
import { Kind } from "./propertyValues";
import { IanaToken, XName } from "./datatypes";
import { MultiProperty } from "./properties";
import { ClientPIdMapParameters } from "./propertyParameters";

/**
 * The definition of a vCard in form of a dictionary of properties.
 *
 * @category Generate
 * @example
 * ```ts
 * const vCard = {
 *   kind: Kind.Individual,
 *   fullName: "John Doe",
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
 */
export type VCardListProperty<
  Name extends PropertyName | XName | IanaToken = PropertyName | XName | IanaToken,
  Prop extends Property | MultiProperty = Property | MultiProperty
> = Prop extends Property<infer Value, infer Params>
  ? { property: Name; value: Value; parameters?: Params }
  : Prop extends MultiProperty<infer Value, infer Params>
  ? { property: Name; value: Value; parameters?: Params }
  : never;

/**
 * vCard definition in form of an array of vCard properties
 *
 * @category Generate
 * @example
 * ```ts
 * generateVCard([
 *   { property: "KIND", value: Kind.Individual },
 *   { property: "FN", value: "John Doe" },
 *   { property: "N", value: { familyName: "Doe", name: "John" } },
 *   { property: "EMAIL", value: "john@doe.com" },
 *   { property: "TEL", value: "123456789", parameters: { type: "home" } },
 *   { property: "TEL", value: "987654321", parameters: { type: "work" } },
 * ]);
 * ```
 */
export type VCardList = (
  | VCardListProperty<"BEGIN", BeginProperty>
  | VCardListProperty<"END", EndProperty>
  | VCardListProperty<"SOURCE", SourceProperty>
  | VCardListProperty<"KIND", KindProperty>
  | VCardListProperty<"XML", XmlProperty>
  | VCardListProperty<"FN", FullNameProperty>
  | VCardListProperty<"N", NameProperty>
  | VCardListProperty<"NICKNAME", NickNameProperty>
  | VCardListProperty<"PHOTO", PhotoProperty>
  | VCardListProperty<"BDAY", BirthdayProperty>
  | VCardListProperty<"ANNIVERSARY", AnniversaryProperty>
  | VCardListProperty<"GENDER", GenderProperty>
  | VCardListProperty<"ADR", AddressProperty>
  | VCardListProperty<"TEL", TelProperty>
  | VCardListProperty<"EMAIL", EmailProperty>
  | VCardListProperty<"IMPP", ImppProperty>
  | VCardListProperty<"LANG", LanguageProperty>
  | VCardListProperty<"TZ", TimezoneProperty>
  | VCardListProperty<"GEO", GeoLocationProperty>
  | VCardListProperty<"TITLE", TitleProperty>
  | VCardListProperty<"ROLE", RoleProperty>
  | VCardListProperty<"LOGO", LogoProperty>
  | VCardListProperty<"ORG", OrganizationProperty>
  | VCardListProperty<"RELATED", RelatedProperty>
  | VCardListProperty<"CATEGORIES", CategoriesProperty>
  | VCardListProperty<"NOTE", NoteProperty>
  | VCardListProperty<"PRODID", ProductIdProperty>
  | VCardListProperty<"REV", RevisionProperty>
  | VCardListProperty<"SOUND", SoundProperty>
  | VCardListProperty<"CLIENTPIDMAP", ClientPidMapProperty>
  | { property: "CLIENTPIDMAP"; value: ClientPidMapDictionary; parameters?: ClientPIdMapParameters }
  | VCardListProperty<"URL", UrlProperty>
  | VCardListProperty<"VERSION", VersionProperty>
  | VCardListProperty<"KEY", KeyProperty>
  | VCardListProperty<"FBURL", FbUrlProperty>
  | VCardListProperty<"CALADRURI", CalendarAddressUriProperty>
  | VCardListProperty<"CALURI", CalendarUriProperty>
)[];
