import { IanaToken, LanguageTag, Text, TimezoneString, Uri, XName, DateAndOrTime, TimeStamp } from "./datatypes";
import { AltIdParameter } from "./parameters";
import { AddressPropertyValue, GenderPropertyValue, NamePropertyValue, Kind, Gender } from "./propertyValues";
import {
  AddressPropertyParameters,
  AnniversaryPropertyParameters,
  BirthdayPropertyParameters,
  CalendarAddressUriPropertyParameters,
  CalendarUriPropertyParameters,
  CategoriesPropertyParameters,
  ClientPIdMapParameters,
  EmailPropertyParameters,
  FbUrlPropertyParameters,
  FullNamePropertyParameters,
  GenderPropertyParameters,
  GeoLocationPropertyParameters,
  IMPPPropertyParameters,
  KeyPropertyParameters,
  KindPropertyParameters,
  LanguagePropertyParameters,
  LogoPropertyParameters,
  MemberPropertyParameters,
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

/**
 * @internal
 */
export type PropertyValue = Text | number | boolean | Date | (Text | number | boolean | Date)[];
/**
 * @internal
 */
export type RecordedPropertyValue = Record<string, PropertyValue>;

/**
 * @internal
 */
export interface PropertyDescriptor {
  property: Text;
  value: Text;
  parameters: Text[];
  group?: Text;
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
  Params extends {} = {}
> = Value | { value: Value; parameters?: Params };
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
  Params extends {} = {}
> =
  | { value: Value; parameters?: Params }[]
  | { commonParameters?: Params; values: Property<Value, Params>[] }
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
  Params extends {} = {}
> = MultiProperty<Value, Params> | Value;
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
> = { value: Value; parameters: Params }[] | { value: Value; parameters: Params } | Value;

/**
 * Property value for begin properties
 *
 * @category Properties
 */
export type BeginProperty = Property<"VCARD", {}>;
/**
 * Property value for end properties
 *
 * @category Properties
 */
export type EndProperty = Property<"VCARD", {}>;
/**
 * Property value for source properties
 *
 * @category Properties
 */
export type SourceProperty = AltProperty<Uri, SourcePropertyParameters>;
/**
 * Property value for kind properties
 *
 * @category Properties
 */
export type KindProperty<K extends Kind = Kind> = MultiOrSingleProperty<
  Kind | XName | IanaToken,
  KindPropertyParameters
>;
/**
 * Property value for xml properties
 *
 * @category Properties
 */
export type XmlProperty = MultiOrSingleProperty<Text, XmlPropertyParameters>;
/**
 * Property value for fullName properties
 *
 * @category Properties
 */
export type FullNameProperty = MultiOrSingleProperty<Text, FullNamePropertyParameters>;
/**
 * Property value for name properties
 *
 * @category Properties
 */
export type NameProperty = AltProperty<Text | (RecordedPropertyValue & NamePropertyValue), FullNamePropertyParameters>;
/**
 * Property value for nickName properties
 *
 * @category Properties
 */
export type NickNameProperty = MultiOrSingleProperty<Text | Text[], NickNamePropertyParameters>;
/**
 * Property value for photo properties
 *
 * @category Properties
 */
export type PhotoProperty = MultiOrSingleProperty<Uri, PhotoPropertyParameters>;
/**
 * Property value for birthday properties
 *
 * @category Properties
 */
export type BirthdayProperty = AltProperty<DateAndOrTime, BirthdayPropertyParameters>;
/**
 * Property value for anniversary properties
 *
 * @category Properties
 */
export type AnniversaryProperty = AltProperty<DateAndOrTime, AnniversaryPropertyParameters>;
/**
 * Property value for gender properties
 *
 * @category Properties
 */
export type GenderProperty = Property<
  Gender | [Gender, Text] | (RecordedPropertyValue & GenderPropertyValue),
  GenderPropertyParameters
>;
/**
 * Property value for address properties
 *
 * @category Properties
 */
export type AddressProperty = MultiOrSingleProperty<
  RecordedPropertyValue & AddressPropertyValue,
  AddressPropertyParameters
>;
/**
 * Property value for tel properties
 *
 * @category Properties
 */
export type TelProperty = MultiOrSingleProperty<Uri | Text, TelPropertyParameters>;
/**
 * Property value for email properties
 *
 * @category Properties
 */
export type EmailProperty = MultiOrSingleProperty<Text, EmailPropertyParameters>;
/**
 * Property value for impp properties
 *
 * @category Properties
 */
export type ImppProperty = MultiOrSingleProperty<Uri, IMPPPropertyParameters>;
/**
 * Property value for language properties
 *
 * @category Properties
 */
export type LanguageProperty = MultiOrSingleProperty<LanguageTag, LanguagePropertyParameters>;
/**
 * Property value for timezone properties
 *
 * @category Properties
 */
export type TimezoneProperty = MultiOrSingleProperty<TimezoneString | Uri | Text, TimezonePropertyParameters>;
/**
 * Property value for geoLocation properties
 *
 * @category Properties
 */
export type GeoLocationProperty = MultiOrSingleProperty<Uri, GeoLocationPropertyParameters>;
/**
 * Property value for title properties
 *
 * @category Properties
 */
export type TitleProperty = MultiOrSingleProperty<Text, TitlePropertyParameters>;
/**
 * Property value for role properties
 *
 * @category Properties
 */
export type RoleProperty = MultiOrSingleProperty<Text, RolePropertyParameters>;
/**
 * Property value for logo properties
 *
 * @category Properties
 */
export type LogoProperty = MultiOrSingleProperty<Uri, LogoPropertyParameters>;
/**
 * Property value for organization properties
 *
 * @category Properties
 */
export type OrganizationProperty = MultiOrSingleProperty<Text | Text[], OrganizationPropertyParameters>;
/**
 * Property value for related properties
 *
 * @category Properties
 */
export type RelatedProperty = MultiOrSingleProperty<Uri | Text, RelatedPropertyParameters>;
/**
 * Property value for categories properties
 *
 * @category Properties
 */
export type CategoriesProperty = MultiOrSingleProperty<Text | Text[], CategoriesPropertyParameters>;
/**
 * Property value for note properties
 *
 * @category Properties
 */
export type NoteProperty = MultiOrSingleProperty<Text, NotePropertyParameters>;
/**
 * Property value for productId properties
 *
 * @category Properties
 */
export type ProductIdProperty = Property<Text, ProductIdPropertyParameters>;
/**
 * Property value for revision properties
 *
 * @category Properties
 */
export type RevisionProperty = Property<TimeStamp, RevisionPropertyParameters>;
/**
 * Property value for sound properties
 *
 * @category Properties
 */
export type SoundProperty = MultiOrSingleProperty<Uri, SoundPropertyParameters>;
/**
 * Property value for uid properties
 *
 * @category Properties
 */
export type UidProperty = Property<Uri | Text, UIdPropertyParameters>;
/**
 * Property value for clientPidMap properties
 *
 * @category Properties
 */
export type ClientPidMapProperty =
  | MultiOrSingleProperty<[Text, Text] | { pid: Text; uri: Text }, ClientPIdMapParameters>
  | Record<Text, Property<Text, ClientPIdMapParameters>>;
/**
 * Property value for url properties
 *
 * @category Properties
 */
export type UrlProperty = MultiOrSingleProperty<Uri, UrlPropertyParameters>;
/**
 * Property value for version properties
 *
 * @category Properties
 */
export type VersionProperty = Property<"4.0", VersionPropertyParameters>;
/**
 * Property value for key properties
 *
 * @category Properties
 */
export type KeyProperty = MultiOrSingleProperty<Uri | Text, KeyPropertyParameters>;
/**
 * Property value for fbUrl properties
 *
 * @category Properties
 */
export type FbUrlProperty = MultiOrSingleProperty<Uri, FbUrlPropertyParameters>;
/**
 * Property value for calendarAddressUri properties
 *
 * @category Properties
 */
export type CalendarAddressUriProperty = MultiOrSingleProperty<Uri, CalendarAddressUriPropertyParameters>;
/**
 * Property value for calendarUri properties
 *
 * @category Properties
 */
export type CalendarUriProperty = MultiOrSingleProperty<Uri, CalendarUriPropertyParameters>;
/**
 * Property value for member properties
 *
 * @category Properties
 */
export type MemberProperty = MultiOrSingleProperty<Uri, MemberPropertyParameters>;
