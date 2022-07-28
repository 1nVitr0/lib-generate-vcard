import { DateAndOrTime, LanguageTag, Text, TimeStamp, TimezoneString, Uri, XName } from "./datatypes";
import { AddressPropertyDict, Gender, GenderPropertyDict, Kind, NamePropertyDict } from "./propertyDictionaries";

/**
 * @internal
 * @category Internally Used
 */
export type PropertyValue = Text | number | boolean | Date | (Text | number | boolean | Date)[];
/**
 * @internal
 * @category Internally Used
 */
export type RecordedPropertyValue = Record<string, PropertyValue>;

/**
 * Property value for begin properties
 *
 * @category Properties
 */
export type BeginPropertyValue = "VCARD";
/**
 * Property value for end properties
 *
 * @category Properties
 */
export type EndPropertyValue = "VCARD";
/**
 * Property value for source properties
 *
 * @category Properties
 */
export type SourcePropertyValue = Uri;
/**
 * Property value for kind properties
 *
 * @category Properties
 */
export type KindPropertyValue<K extends Kind = Kind> = K | XName;
/**
 * Property value for xml properties
 *
 * @category Properties
 */
export type XmlPropertyValue = Text;
/**
 * Property value for fullName properties
 *
 * @category Properties
 */
export type FullNamePropertyValue = Text;
/**
 * Property value for name properties
 *
 * @category Properties
 */
export type NamePropertyValue = Text | (RecordedPropertyValue & NamePropertyDict);
/**
 * Property value for nickName properties
 *
 * @category Properties
 */
export type NickNamePropertyValue = Text | Text[];
/**
 * Property value for photo properties
 *
 * @category Properties
 */
export type PhotoPropertyValue = Uri;
/**
 * Property value for birthday properties
 *
 * @category Properties
 */
export type BirthdayPropertyValue = DateAndOrTime;
/**
 * Property value for anniversary properties
 *
 * @category Properties
 */
export type AnniversaryPropertyValue = DateAndOrTime;
/**
 * Property value for gender properties
 *
 * @category Properties
 */
export type GenderPropertyValue = Gender | [Gender, Text] | (RecordedPropertyValue & GenderPropertyDict);
/**
 * Property value for address properties
 *
 * @category Properties
 */
export type AddressPropertyValue = RecordedPropertyValue & AddressPropertyDict;
/**
 * Property value for tel properties
 *
 * @category Properties
 */
export type TelPropertyValue = Uri | Text;
/**
 * Property value for email properties
 *
 * @category Properties
 */
export type EmailPropertyValue = Text;
/**
 * Property value for impp properties
 *
 * @category Properties
 */
export type ImppPropertyValue = Uri;
/**
 * Property value for language properties
 *
 * @category Properties
 */
export type LanguagePropertyValue = LanguageTag;
/**
 * Property value for timezone properties
 *
 * @category Properties
 */
export type TimezonePropertyValue = TimezoneString | Uri | Text;
/**
 * Property value for geoLocation properties
 *
 * @category Properties
 */
export type GeoLocationPropertyValue = Uri;
/**
 * Property value for title properties
 *
 * @category Properties
 */
export type TitlePropertyValue = Text;
/**
 * Property value for role properties
 *
 * @category Properties
 */
export type RolePropertyValue = Text;
/**
 * Property value for logo properties
 *
 * @category Properties
 */
export type LogoPropertyValue = Uri;
/**
 * Property value for organization properties
 *
 * @category Properties
 */
export type OrganizationPropertyValue = Text | Text[];
/**
 * Property value for related properties
 *
 * @category Properties
 */
export type RelatedPropertyValue = Uri | Text;
/**
 * Property value for categories properties
 *
 * @category Properties
 */
export type CategoriesPropertyValue = Text | Text[];
/**
 * Property value for note properties
 *
 * @category Properties
 */
export type NotePropertyValue = Text;
/**
 * Property value for productId properties
 *
 * @category Properties
 */
export type ProductIdPropertyValue = Text;
/**
 * Property value for revision properties
 *
 * @category Properties
 */
export type RevisionPropertyValue = TimeStamp;
/**
 * Property value for sound properties
 *
 * @category Properties
 */
export type SoundPropertyValue = Uri;
/**
 * Property value for uid properties
 *
 * @category Properties
 */
export type UidPropertyValue = Uri | Text;
/**
 * Property value for clientPidMap properties
 *
 * @category Properties
 */
export type ClientPidMapPropertyValue = [Text, Uri] | { pid: Text; uri: Uri };
/**
 * Property value for url properties
 *
 * @category Properties
 */
export type UrlPropertyValue = Uri;
/**
 * Property value for version properties
 *
 * @category Properties
 */
export type VersionPropertyValue = "4.0";
/**
 * Property value for key properties
 *
 * @category Properties
 */
export type KeyPropertyValue = Uri | Text;
/**
 * Property value for fbUrl properties
 *
 * @category Properties
 */
export type FbUrlPropertyValue = Uri;
/**
 * Property value for calendarAddressUri properties
 *
 * @category Properties
 */
export type CalendarAddressUriPropertyValue = Uri;
/**
 * Property value for calendarUri properties
 *
 * @category Properties
 */
export type CalendarUriPropertyValue = Uri;
/**
 * Property value for member properties
 *
 * @category Properties
 */
export type MemberPropertyValue = Uri;
/**
 * Property value for birth place properties
 *
 * @category Properties
 */
export type BirthPlacePropertyValue = Text | Uri;
/**
 * Property value for death place properties
 *
 * @category Properties
 */
export type DeathPlacePropertyValue = Text | Uri;
/**
 * Property value for death date properties
 *
 * @category Properties
 */
export type DeathDatePropertyValue = DateAndOrTime | Text;
/**
 * Property value for expertiese properties
 *
 * @category Properties
 */
export type ExpertisePropertyValue = Text;
/**
 * Property value for hobby properties
 *
 * @category Properties
 */
export type HobbyPropertyValue = Text;
/**
 * Property value for interest properties
 *
 * @category Properties
 */
export type InterestPropertyValue = Text;
/**
 * Property value for org directory properties
 *
 * @category Properties
 */
export type OrgDirectoryPropertyValue = Text;
/**
 * Property value for contact uri properties
 *
 * @category Properties
 */
export type ContactUriPropertyValue = Uri;
