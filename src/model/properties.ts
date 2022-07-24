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

export type PropertyValue = Text | number | boolean | Date | (Text | number | boolean | Date)[];
export type RecordedPropertyValue = Record<string, PropertyValue>;

export type Property<
  Value extends PropertyValue | RecordedPropertyValue = PropertyValue | RecordedPropertyValue,
  Params extends {} = {}
> = Value | { value: Value; parameters?: Params };
export type MultiProperty<
  Value extends PropertyValue | RecordedPropertyValue = PropertyValue | RecordedPropertyValue,
  Params extends {} = {}
> =
  | { value: Value; parameters?: Params }[]
  | { commonParameters?: Params; values: Property<Value, Params>[] }
  | (Value extends RecordedPropertyValue ? Value[] : never);
export type MultiOrSingleProperty<
  Value extends PropertyValue | RecordedPropertyValue = PropertyValue | RecordedPropertyValue,
  Params extends {} = {}
> = MultiProperty<Value, Params> | Value;
export type AltProperty<
  Value extends PropertyValue | RecordedPropertyValue = PropertyValue | RecordedPropertyValue,
  Params extends AltIdParameter = AltIdParameter
> = { value: Value; parameters: Params }[] | { value: Value; parameters: Params } | Value;

export type BeginProperty = Property<"VCARD", {}>;
export type EndProperty = Property<"VCARD", {}>;
export type SourceProperty = AltProperty<Uri, SourcePropertyParameters>;
export type KindProperty<K extends Kind = Kind> = MultiOrSingleProperty<
  Kind | XName | IanaToken,
  KindPropertyParameters
>;
export type XmlProperty = MultiOrSingleProperty<Text, XmlPropertyParameters>;
export type FullNameProperty = MultiOrSingleProperty<Text, FullNamePropertyParameters>;
export type NameProperty = AltProperty<Text | (RecordedPropertyValue & NamePropertyValue), FullNamePropertyParameters>;
export type NickNameProperty = MultiOrSingleProperty<Text | Text[], NickNamePropertyParameters>;
export type PhotoProperty = MultiOrSingleProperty<Uri, PhotoPropertyParameters>;
export type BirthdayProperty = AltProperty<DateAndOrTime, BirthdayPropertyParameters>;
export type AnniversaryProperty = AltProperty<DateAndOrTime, AnniversaryPropertyParameters>;
export type GenderProperty = Property<
  Gender | [Gender, Text] | (RecordedPropertyValue & GenderPropertyValue),
  GenderPropertyParameters
>;
export type AddressProperty = MultiOrSingleProperty<
  RecordedPropertyValue & AddressPropertyValue,
  AddressPropertyParameters
>;
export type TelProperty = MultiOrSingleProperty<Uri | Text, TelPropertyParameters>;
export type EmailProperty = MultiOrSingleProperty<Text, EmailPropertyParameters>;
export type ImppProperty = MultiOrSingleProperty<Uri, IMPPPropertyParameters>;
export type LanguageProperty = MultiOrSingleProperty<LanguageTag, LanguagePropertyParameters>;
export type TimezoneProperty = MultiOrSingleProperty<TimezoneString | Uri | Text, TimezonePropertyParameters>;
export type GeoLocationProperty = MultiOrSingleProperty<Uri, GeoLocationPropertyParameters>;
export type TitleProperty = MultiOrSingleProperty<Text, TitlePropertyParameters>;
export type RoleProperty = MultiOrSingleProperty<Text, RolePropertyParameters>;
export type LogoProperty = MultiOrSingleProperty<Uri, LogoPropertyParameters>;
export type OrganizationProperty = MultiOrSingleProperty<Text | Text[], OrganizationPropertyParameters>;
export type RelatedProperty = MultiOrSingleProperty<Uri | Text, RelatedPropertyParameters>;
export type CategoriesProperty = MultiOrSingleProperty<Text | Text[], CategoriesPropertyParameters>;
export type NoteProperty = MultiOrSingleProperty<Text, NotePropertyParameters>;
export type ProductIdProperty = Property<Text, ProductIdPropertyParameters>;
export type RevisionProperty = Property<TimeStamp, RevisionPropertyParameters>;
export type SoundProperty = MultiOrSingleProperty<Uri, SoundPropertyParameters>;
export type UidProperty = Property<Uri | Text, UIdPropertyParameters>;
export type ClientPidMapProperty =
  | MultiOrSingleProperty<[Text, Text] | { pid: Text; uri: Text }, ClientPIdMapParameters>
  | Record<Text, Property<Text, ClientPIdMapParameters>>;
export type UrlProperty = MultiOrSingleProperty<Uri, UrlPropertyParameters>;
export type VersionProperty = Property<"4.0", VersionPropertyParameters>;
export type KeyProperty = MultiOrSingleProperty<Uri | Text, KeyPropertyParameters>;
export type FbUrlProperty = MultiOrSingleProperty<Uri, FbUrlPropertyParameters>;
export type CalendarAddressUriProperty = MultiOrSingleProperty<Uri, CalendarAddressUriPropertyParameters>;
export type CalendarUriProperty = MultiOrSingleProperty<Uri, CalendarUriPropertyParameters>;
export type MemberProperty = MultiOrSingleProperty<Uri, MemberPropertyParameters>;
