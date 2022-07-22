import {
  DateTimeString,
  IanaToken,
  LanguageTag,
  Text,
  TimezoneString,
  Uri,
  XName,
  DateAndOrTime,
  TimeStamp,
} from "./datatypes";
import { Gender, Kind } from "./enums";
import { AltIdParameter } from "./parameters";
import { AddressPropertyValue, GenderPropertyValue, NamePropertyValue } from "./properties";
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

export type PropertyValue = Text | number | Date | (Text | number | Date)[];
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

export interface VCard {
  // General Properties
  begin?: Property<"VCARD", {}>;
  end?: Property<"VCARD", {}>;
  source?: AltProperty<Uri, SourcePropertyParameters>;
  kind: MultiOrSingleProperty<Kind | XName | IanaToken, KindPropertyParameters>;
  xml?: MultiOrSingleProperty<Text, XmlPropertyParameters>;
  // Identification Properties
  fullName: MultiOrSingleProperty<Text, FullNamePropertyParameters>;
  name?: AltProperty<Text | (RecordedPropertyValue & NamePropertyValue), FullNamePropertyParameters>;
  nickName?: MultiOrSingleProperty<Text | Text[], NickNamePropertyParameters>;
  photo?: MultiOrSingleProperty<Uri, PhotoPropertyParameters>;
  birthday?: AltProperty<DateAndOrTime, BirthdayPropertyParameters>;
  anniversary?: AltProperty<DateAndOrTime, AnniversaryPropertyParameters>;
  gender?: Property<Gender | [Gender, Text] | (RecordedPropertyValue & GenderPropertyValue), GenderPropertyParameters>;
  // Delivery Addressing Properties
  address?: MultiOrSingleProperty<RecordedPropertyValue & AddressPropertyValue, AddressPropertyParameters>;
  // Communications Properties
  tel?: MultiOrSingleProperty<Uri | Text, TelPropertyParameters>;
  email?: MultiOrSingleProperty<Text, EmailPropertyParameters>;
  impp?: MultiOrSingleProperty<Uri, IMPPPropertyParameters>;
  language?: MultiOrSingleProperty<LanguageTag, LanguagePropertyParameters>;
  // Geographical Properties
  timezone?: MultiOrSingleProperty<TimezoneString | Uri | Text, TimezonePropertyParameters>;
  geoLocation?: MultiOrSingleProperty<Uri, GeoLocationPropertyParameters>;
  // Organizational Properties
  title?: MultiOrSingleProperty<Text, TitlePropertyParameters>;
  role?: MultiOrSingleProperty<Text, RolePropertyParameters>;
  logo?: MultiOrSingleProperty<Uri, LogoPropertyParameters>;
  organization?: MultiOrSingleProperty<Text | Text[], OrganizationPropertyParameters>;
  related?: MultiOrSingleProperty<Uri | Text, RelatedPropertyParameters>;
  // Explanatory Properties
  categories?: MultiOrSingleProperty<Text | Text[], CategoriesPropertyParameters>;
  note?: MultiOrSingleProperty<Text, NotePropertyParameters>;
  productId?: Property<Text, ProductIdPropertyParameters>;
  revision?: Property<TimeStamp, RevisionPropertyParameters>;
  sound?: MultiOrSingleProperty<Uri, SoundPropertyParameters>;
  uid?: Property<Uri | Text, UIdPropertyParameters>;
  clientPidMap?:
    | MultiOrSingleProperty<[Text, Text] | { pid: Text; uri: Text }, ClientPIdMapParameters>
    | Record<Text, Property<Text, ClientPIdMapParameters>>;
  url?: MultiOrSingleProperty<Uri, UrlPropertyParameters>;
  version?: Property<"4.0", VersionPropertyParameters>;
  // Security Properties
  key?: MultiOrSingleProperty<Uri | Text, KeyPropertyParameters>;
  fbUrl?: MultiOrSingleProperty<Uri, FbUrlPropertyParameters>;
  calendarAddressUri?: MultiOrSingleProperty<Uri, CalendarAddressUriPropertyParameters>;
  calendarUri?: MultiOrSingleProperty<Uri, CalendarUriPropertyParameters>;
}

export interface VCardGroup extends VCard {
  kind: MultiOrSingleProperty<Kind.Group, KindPropertyParameters>;
  // Organizational Properties
  member?: MultiOrSingleProperty<Uri, MemberPropertyParameters>;
}
