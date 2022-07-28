import { Text, Uri } from "./datatypes";
import { AltIdParameter, PropertyParameters } from "./parameters";
import { Kind } from "./propertyDictionaries";
import { ContactUriPropertyValue } from "./propertyValues";
import { ContactUriPropertyParameters } from "./propertyParameters";
import {
  ExpertisePropertyValue,
  HobbyPropertyValue,
  OrgDirectoryPropertyValue,
  InterestPropertyValue,
} from "./propertyValues";
import {
  ExpertisePropertyParameters,
  HobbyPropertyParameters,
  InterestPropertyParameters,
  OrgDirectoryPropertyParameters,
} from "./propertyParameters";
import {
  AddressPropertyParameters,
  AnniversaryPropertyParameters,
  BirthdayPropertyParameters,
  BirthPlacePropertyParameters,
  CalendarAddressUriPropertyParameters,
  CalendarUriPropertyParameters,
  CategoriesPropertyParameters,
  ClientPIdMapPropertyParameters,
  DeathDatePropertyParameters,
  DeathPlacePropertyParameters,
  EmailPropertyParameters,
  FbUrlPropertyParameters,
  FullNamePropertyParameters,
  GenderPropertyParameters,
  GeoLocationPropertyParameters,
  ImppPropertyParameters,
  KeyPropertyParameters,
  KindPropertyParameters,
  LanguagePropertyParameters,
  LogoPropertyParameters,
  MemberPropertyParameters,
  NamePropertyParameters,
  NickNamePropertyParameters,
  NotePropertyParameters,
  OrganizationPropertyParameters,
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
  UIdPropertyParameters,
  UrlPropertyParameters,
  VersionPropertyParameters,
  XmlPropertyParameters,
} from "./propertyParameters";
import {
  AddressPropertyValue,
  AnniversaryPropertyValue,
  BeginPropertyValue,
  BirthdayPropertyValue,
  BirthPlacePropertyValue,
  CalendarAddressUriPropertyValue,
  CalendarUriPropertyValue,
  CategoriesPropertyValue,
  ClientPidMapPropertyValue,
  DeathDatePropertyValue,
  DeathPlacePropertyValue,
  EmailPropertyValue,
  EndPropertyValue,
  FbUrlPropertyValue,
  FullNamePropertyValue,
  GenderPropertyValue,
  GeoLocationPropertyValue,
  ImppPropertyValue,
  KeyPropertyValue,
  KindPropertyValue,
  LanguagePropertyValue,
  LogoPropertyValue,
  MemberPropertyValue,
  NamePropertyValue,
  NickNamePropertyValue,
  NotePropertyValue,
  OrganizationPropertyValue,
  PhotoPropertyValue,
  ProductIdPropertyValue,
  PropertyValue,
  RecordedPropertyValue,
  RelatedPropertyValue,
  RevisionPropertyValue,
  RolePropertyValue,
  SoundPropertyValue,
  SourcePropertyValue,
  TelPropertyValue,
  TimezonePropertyValue,
  TitlePropertyValue,
  UidPropertyValue,
  UrlPropertyValue,
  VersionPropertyValue,
  XmlPropertyValue,
} from "./propertyValues";

/**
 * @internal
 * @category Internally Used
 */
export interface PropertyDescriptor {
  property: Text;
  value: Text;
  parameters: Text[];
  group: Text | undefined;
}

/**
 * A single property in string or `{ value; parameters; }` form.
 *
 * @category Properties
 * @example
 * ```ts
 * "2020-01-01"
 * { value: "2020-01-01", parameters: { type: "date" } }
 * ```
 */
export type Property<
  Value extends PropertyValue | RecordedPropertyValue = PropertyValue | RecordedPropertyValue,
  Params extends PropertyParameters = PropertyParameters
> = Value | { value: Value; group?: string; parameters?: Params };
/**
 * Multiple properties in form of an array of properties or an object in the form
 * `{ commonParameters?: {@link Params}; values: {@link Property}[]; }`.
 *
 * @category Properties
 * @example
 * ```ts
 * ["2020-01-01", { value: "2020-01-01", parameters: { type: "date" } }]
 * { commonParameters: { type: "date-and-or-time" }, values: ["2020-01-01", "11:30"] }
 * ```
 */
export type MultiProperty<
  Value extends PropertyValue | RecordedPropertyValue = PropertyValue | RecordedPropertyValue,
  Params extends PropertyParameters = PropertyParameters
> =
  | { value: Value; group?: string; parameters?: Params }[]
  | { commonParameters?: Params; group?: string; values: Property<Value, Params>[] }
  | (Value extends RecordedPropertyValue ? Value[] : never);
/**
 * Single property or Multiple properties in form of an array of properties or an object in the form
 * `{ commonParameters?: {@link Params}; values: {@link Property}[]; }`.
 *
 * @category Properties
 * @example
 * ```ts
 * "2020-01-01"
 * { value: "2020-01-01", parameters: { type: "date" } }
 * ["2020-01-01", { value: "2020-01-01", parameters: { type: "date" } }]
 * { commonParameters: { type: "date-and-or-time" }, values: ["2020-01-01", "11:30"] }
 * ```
 */
export type MultiOrSingleProperty<
  Value extends PropertyValue | RecordedPropertyValue = PropertyValue | RecordedPropertyValue,
  Params extends PropertyParameters = PropertyParameters
> = MultiProperty<Value, Params> | Property<Value, Params>;
/**
 * Single or multiple properties as defined in {@link MultiOrSingleProperty}.
 * Additionally, the altId paramater must be specified.
 *
 * @category Properties
 * @example
 * ```ts
 * "2020-01-01"
 * { value: "2020-01-01", parameters: { type: "date" } }
 * [
 *   { value: "hello", parameters: { altId: "0", language: "en" } },
 *   { value: "hola",parameters: { altId: "1", language: "es" } }
 * ]
 * ```
 */
export type AltProperty<
  Value extends PropertyValue | RecordedPropertyValue = PropertyValue | RecordedPropertyValue,
  Params extends AltIdParameter = AltIdParameter
> = MultiOrSingleProperty<Value, Params>;

/**
 * Dictionary notation for clientPidMap properties
 *
 * @category Properties
 *
 *
 * @privateRemarks
 * This is not included in {@link file://./propertyDictionaries.ts} because it's not a property value type
 * Instead, it's an shorthand way to list multiple properties in form of a key-value pair
 */
export type ClientPidMapDictionary = { [pid: Text]: Property<Uri, ClientPIdMapPropertyParameters> };

/**
 * Property value for begin properties
 *
 * @category Properties
 */
export type BeginProperty = Property<BeginPropertyValue, {}>;
/**
 * Property value for end properties
 *
 * @category Properties
 */
export type EndProperty = Property<EndPropertyValue, {}>;
/**
 * Property value for source properties
 *
 * @category Properties
 */
export type SourceProperty = AltProperty<SourcePropertyValue, SourcePropertyParameters>;
/**
 * Property value for kind properties
 *
 * @category Properties
 */
export type KindProperty<K extends Kind = Kind> = MultiOrSingleProperty<KindPropertyValue<K>, KindPropertyParameters>;
/**
 * Property value for xml properties
 *
 * @category Properties
 */
export type XmlProperty = MultiOrSingleProperty<XmlPropertyValue, XmlPropertyParameters>;
/**
 * Property value for fullName properties
 *
 * @category Properties
 */
export type FullNameProperty = MultiOrSingleProperty<FullNamePropertyValue, FullNamePropertyParameters>;
/**
 * Property value for name properties
 *
 * @category Properties
 */
export type NameProperty = AltProperty<NamePropertyValue, NamePropertyParameters>;
/**
 * Property value for nickName properties
 *
 * @category Properties
 */
export type NickNameProperty = MultiOrSingleProperty<NickNamePropertyValue, NickNamePropertyParameters>;
/**
 * Property value for photo properties
 *
 * @category Properties
 */
export type PhotoProperty = MultiOrSingleProperty<PhotoPropertyValue, PhotoPropertyParameters>;
/**
 * Property value for birthday properties
 *
 * @category Properties
 */
export type BirthdayProperty = AltProperty<BirthdayPropertyValue, BirthdayPropertyParameters>;
/**
 * Property value for anniversary properties
 *
 * @category Properties
 */
export type AnniversaryProperty = AltProperty<AnniversaryPropertyValue, AnniversaryPropertyParameters>;
/**
 * Property value for gender properties
 *
 * @category Properties
 */
export type GenderProperty = Property<GenderPropertyValue, GenderPropertyParameters>;
/**
 * Property value for address properties
 *
 * @category Properties
 */
export type AddressProperty = MultiOrSingleProperty<AddressPropertyValue, AddressPropertyParameters>;
/**
 * Property value for tel properties
 *
 * @category Properties
 */
export type TelProperty = MultiOrSingleProperty<TelPropertyValue, TelPropertyParameters>;
/**
 * Property value for email properties
 *
 * @category Properties
 */
export type EmailProperty = MultiOrSingleProperty<EmailPropertyValue, EmailPropertyParameters>;
/**
 * Property value for impp properties
 *
 * @category Properties
 */
export type ImppProperty = MultiOrSingleProperty<ImppPropertyValue, ImppPropertyParameters>;
/**
 * Property value for language properties
 *
 * @category Properties
 */
export type LanguageProperty = MultiOrSingleProperty<LanguagePropertyValue, LanguagePropertyParameters>;
/**
 * Property value for timezone properties
 *
 * @category Properties
 */
export type TimezoneProperty = MultiOrSingleProperty<TimezonePropertyValue, TimezonePropertyParameters>;
/**
 * Property value for geoLocation properties
 *
 * @category Properties
 */
export type GeoLocationProperty = MultiOrSingleProperty<GeoLocationPropertyValue, GeoLocationPropertyParameters>;
/**
 * Property value for title properties
 *
 * @category Properties
 */
export type TitleProperty = MultiOrSingleProperty<TitlePropertyValue, TitlePropertyParameters>;
/**
 * Property value for role properties
 *
 * @category Properties
 */
export type RoleProperty = MultiOrSingleProperty<RolePropertyValue, RolePropertyParameters>;
/**
 * Property value for logo properties
 *
 * @category Properties
 */
export type LogoProperty = MultiOrSingleProperty<LogoPropertyValue, LogoPropertyParameters>;
/**
 * Property value for organization properties
 *
 * @category Properties
 */
export type OrganizationProperty = MultiOrSingleProperty<OrganizationPropertyValue, OrganizationPropertyParameters>;
/**
 * Property value for related properties
 *
 * @category Properties
 */
export type RelatedProperty = MultiOrSingleProperty<RelatedPropertyValue, RelatedPropertyParameters>;
/**
 * Property value for categories properties
 *
 * @category Properties
 */
export type CategoriesProperty = MultiOrSingleProperty<CategoriesPropertyValue, CategoriesPropertyParameters>;
/**
 * Property value for note properties
 *
 * @category Properties
 */
export type NoteProperty = MultiOrSingleProperty<NotePropertyValue, NotePropertyParameters>;
/**
 * Property value for productId properties
 *
 * @category Properties
 */
export type ProductIdProperty = Property<ProductIdPropertyValue, ProductIdPropertyParameters>;
/**
 * Property value for revision properties
 *
 * @category Properties
 */
export type RevisionProperty = Property<RevisionPropertyValue, RevisionPropertyParameters>;
/**
 * Property value for sound properties
 *
 * @category Properties
 */
export type SoundProperty = MultiOrSingleProperty<SoundPropertyValue, SoundPropertyParameters>;
/**
 * Property value for uid properties
 *
 * @category Properties
 */
export type UidProperty = Property<UidPropertyValue, UIdPropertyParameters>;
/**
 * Property value for clientPidMap properties
 *
 * @category Properties
 */
export type ClientPidMapProperty = MultiOrSingleProperty<ClientPidMapPropertyValue, ClientPIdMapPropertyParameters>;
/**
 * Property value for url properties
 *
 * @category Properties
 */
export type UrlProperty = MultiOrSingleProperty<UrlPropertyValue, UrlPropertyParameters>;
/**
 * Property value for version properties
 *
 * @category Properties
 */
export type VersionProperty = Property<VersionPropertyValue, VersionPropertyParameters>;
/**
 * Property value for key properties
 *
 * @category Properties
 */
export type KeyProperty = MultiOrSingleProperty<KeyPropertyValue, KeyPropertyParameters>;
/**
 * Property value for fbUrl properties
 *
 * @category Properties
 */
export type FbUrlProperty = MultiOrSingleProperty<FbUrlPropertyValue, FbUrlPropertyParameters>;
/**
 * Property value for calendarAddressUri properties
 *
 * @category Properties
 */
export type CalendarAddressUriProperty = MultiOrSingleProperty<
  CalendarAddressUriPropertyValue,
  CalendarAddressUriPropertyParameters
>;
/**
 * Property value for calendarUri properties
 *
 * @category Properties
 */
export type CalendarUriProperty = MultiOrSingleProperty<CalendarUriPropertyValue, CalendarUriPropertyParameters>;
/**
 * Property value for member properties
 *
 * @category Properties
 */
export type MemberProperty = MultiOrSingleProperty<MemberPropertyValue, MemberPropertyParameters>;
/**
 * Property value for birth place properties
 *
 * @category Properties
 */
export type BirthPlaceProperty = Property<BirthPlacePropertyValue, BirthPlacePropertyParameters>;
/**
 * Property value for death place properties
 *
 * @category Properties
 */
export type DeathPlaceProperty = Property<DeathPlacePropertyValue, DeathPlacePropertyParameters>;
/**
 * Property value for death date properties
 *
 * @category Properties
 */
export type DeathDateProperty = Property<DeathDatePropertyValue, DeathDatePropertyParameters>;
/**
 * Property value for expertise properties
 *
 * @category Properties
 */
export type ExpertiseProperty = MultiOrSingleProperty<ExpertisePropertyValue, ExpertisePropertyParameters>;
/**
 * Property value for hobby properties
 *
 * @category Properties
 */
export type HobbyProperty = MultiOrSingleProperty<HobbyPropertyValue, HobbyPropertyParameters>;
/**
 * Property value for interest properties
 *
 * @category Properties
 */
export type InterestProperty = MultiOrSingleProperty<InterestPropertyValue, InterestPropertyParameters>;
/**
 * Property value for org directory properties
 *
 * @category Properties
 */
export type OrgDirectoryProperty = MultiOrSingleProperty<OrgDirectoryPropertyValue, OrgDirectoryPropertyParameters>;
/**
 * Property value for contact uri properties
 *
 * @category Properties
 */
export type ContactUriProperty = MultiOrSingleProperty<ContactUriPropertyValue, ContactUriPropertyParameters>;
