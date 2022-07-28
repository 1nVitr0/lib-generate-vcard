import { XName } from "./datatypes";
import { LevelParameter, IndexParameter } from "./parameters";
import {
  AltIdParameter,
  AnyParameter,
  CalscaleParameter,
  GeoParameter,
  LabelParameter,
  LanguageParameter,
  MediaTypeParameter,
  PIdParameter,
  PrefParameter,
  RelationType,
  SortAsParameter,
  TelType,
  TimezoneParameter,
  TypeParameter,
  ValueParameter,
} from "./parameters";

interface GroupParameter {
  group?: string;
}
interface BasePropertyParameters extends PIdParameter, PrefParameter, AltIdParameter, AnyParameter, GroupParameter {}
interface BaseTypedPropertyParameters extends BasePropertyParameters, TypeParameter<XName> {}
interface BaseLangPropertyParameters extends BaseTypedPropertyParameters, LanguageParameter {}

/**
 * Valid Parameters for source properties
 *
 * @category Parameters
 */
export interface SourcePropertyParameters extends ValueParameter<"uri">, BasePropertyParameters, MediaTypeParameter {}

/**
 * Valid Parameters for kind properties
 *
 * @category Parameters
 */
export interface KindPropertyParameters extends ValueParameter<"text">, AnyParameter, GroupParameter {}

/**
 * Valid Parameters for xml properties
 *
 * @category Parameters
 */
export interface XmlPropertyParameters extends ValueParameter<"text">, AltIdParameter, GroupParameter {}

/**
 * Valid Parameters for fullName properties
 *
 * @category Parameters
 */
export interface FullNamePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

/**
 * Valid Parameters for name properties
 *
 * @category Parameters
 */
export interface NamePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

/**
 * Valid Parameters for nickName properties
 *
 * @category Parameters
 */
export interface NickNamePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

/**
 * Valid Parameters for photo properties
 *
 * @category Parameters
 */
export interface PhotoPropertyParameters extends ValueParameter<"uri">, BaseTypedPropertyParameters {}

/**
 * Valid Parameters for birthday properties
 *
 * @category Parameters
 */
export interface BirthPlacePropertyParameters extends ValueParameter<"text">, LanguageParameter {}

/**
 * Valid Parameters for birthday properties
 *
 * @category Parameters
 */
export interface DeathPlacePropertyParameters extends ValueParameter<"text">, LanguageParameter {}

/**
 * Valid Parameters for birthday properties
 *
 * @category Parameters
 */
export interface DeathDatePropertyParameters extends ValueParameter<"text">, LanguageParameter, CalscaleParameter {}

/**
 * Valid Parameters for key properties
 *
 * @category Parameters
 */
export interface KeyPropertyParameters
  extends ValueParameter<"text" | "uri">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

/**
 * Valid Parameters for anniversary properties
 *
 * @category Parameters
 */
export interface AnniversaryPropertyParameters
  extends ValueParameter<"text" | "date-and-or-time">,
    AltIdParameter,
    CalscaleParameter,
    AnyParameter,
    GroupParameter {}

/**
 * Valid Parameters for birthday properties
 *
 * @category Parameters
 */
export interface BirthdayPropertyParameters extends AnniversaryPropertyParameters {}

/**
 * Valid Parameters for gender properties
 *
 * @category Parameters
 */
export interface GenderPropertyParameters extends ValueParameter<"text">, AnyParameter, GroupParameter {}

/**
 * Valid Parameters for address properties
 *
 * @category Parameters
 */
export interface AddressPropertyParameters
  extends ValueParameter<"text">,
    LabelParameter,
    GeoParameter,
    TimezoneParameter,
    BaseLangPropertyParameters {}

/**
 * Valid Parameters for tel properties
 *
 * @category Parameters
 */
export interface TelPropertyParameters
  extends ValueParameter<"text" | "uri">,
    MediaTypeParameter,
    TypeParameter<TelType | XName>,
    BasePropertyParameters {}

/**
 * Valid Parameters for email properties
 *
 * @category Parameters
 */
export interface EmailPropertyParameters extends ValueParameter<"text">, BaseTypedPropertyParameters {}

/**
 * Valid Parameters for iMPP properties
 *
 * @category Parameters
 */
export interface ImppPropertyParameters
  extends ValueParameter<"uri">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

/**
 * Valid Parameters for language properties
 *
 * @category Parameters
 */
export interface LanguagePropertyParameters extends ValueParameter<"language-tag">, BaseTypedPropertyParameters {}

/**
 * Valid Parameters for timezone properties
 *
 * @category Parameters
 */
export interface TimezonePropertyParameters
  extends ValueParameter<"text" | "uri" | "utc-offset">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

/**
 * Valid Parameters for geoLocation properties
 *
 * @category Parameters
 */
export interface GeoLocationPropertyParameters
  extends ValueParameter<"uri">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

/**
 * Valid Parameters for title properties
 *
 * @category Parameters
 */
export interface TitlePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

/**
 * Valid Parameters for role properties
 *
 * @category Parameters
 */
export interface RolePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

/**
 * Valid Parameters for logo properties
 *
 * @category Parameters
 */
export interface LogoPropertyParameters extends ValueParameter<"uri">, MediaTypeParameter, BaseLangPropertyParameters {}

/**
 * Valid Parameters for organization properties
 *
 * @category Parameters
 */
export interface OrganizationPropertyParameters
  extends ValueParameter<"text">,
    SortAsParameter,
    BaseLangPropertyParameters {}

/**
 * Valid Parameters for member properties
 *
 * @category Parameters
 */
export interface MemberPropertyParameters extends ValueParameter<"uri">, MediaTypeParameter, BasePropertyParameters {}

/**
 * Valid Parameters for related properties
 *
 * @category Parameters
 */
export interface RelatedPropertyParameters
  extends ValueParameter<"uri" | "text">,
    MediaTypeParameter,
    LanguageParameter,
    BasePropertyParameters,
    TypeParameter<RelationType> {}

/**
 * Valid Parameters for categories properties
 *
 * @category Parameters
 */
export interface CategoriesPropertyParameters extends ValueParameter<"text">, BaseTypedPropertyParameters {}

/**
 * Valid Parameters for note properties
 *
 * @category Parameters
 */
export interface NotePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

/**
 * Valid Parameters for productId properties
 *
 * @category Parameters
 */
export interface ProductIdPropertyParameters extends ValueParameter<"text">, AnyParameter, GroupParameter {}

/**
 * Valid Parameters for revision properties
 *
 * @category Parameters
 */
export interface RevisionPropertyParameters extends ValueParameter<"timestamp">, AnyParameter, GroupParameter {}

/**
 * Valid Parameters for sound properties
 *
 * @category Parameters
 */
export interface SoundPropertyParameters extends ValueParameter<"uri">, BaseLangPropertyParameters {}

/**
 * Valid Parameters for uId properties
 *
 * @category Parameters
 */
export interface UIdPropertyParameters extends ValueParameter<"text" | "uri">, AnyParameter, GroupParameter {}

/**
 * Valid Parameters for client PID map properties
 *
 * @category Parameters
 */
export interface ClientPIdMapPropertyParameters extends AnyParameter, GroupParameter {}

/**
 * Valid Parameters for url properties
 *
 * @category Parameters
 */
export interface UrlPropertyParameters extends ValueParameter<"uri">, MediaTypeParameter, BaseTypedPropertyParameters {}

/**
 * Valid Parameters for version properties
 *
 * @category Parameters
 */
export interface VersionPropertyParameters extends ValueParameter<"text">, AnyParameter, GroupParameter {}

/**
 * Valid Parameters for fbUrl properties
 *
 * @category Parameters
 */
export interface FbUrlPropertyParameters
  extends ValueParameter<"uri">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

/**
 * Valid Parameters for calendarAddressUri properties
 *
 * @category Parameters
 */
export interface CalendarAddressUriPropertyParameters extends FbUrlPropertyParameters {}

/**
 * Valid Parameters for calendarUri properties
 *
 * @category Parameters
 */
export interface CalendarUriPropertyParameters extends FbUrlPropertyParameters {}

/**
 * Valid Parameters for expertise properties
 *
 * @category Parameters
 */
export interface ExpertisePropertyParameters
  extends LevelParameter<"beginner" | "average" | "expert">,
    IndexParameter {}

/**
 * Valid Parameters for hobby properties
 *
 * @category Parameters
 */
export interface HobbyPropertyParameters extends LevelParameter, IndexParameter {}

/**
 * Valid Parameters for interest properties
 *
 * @category Parameters
 */
export interface InterestPropertyParameters extends LevelParameter, IndexParameter {}

/**
 * Valid Parameters for org directory properties
 *
 * @category Parameters
 */
export interface OrgDirectoryPropertyParameters extends PrefParameter, IndexParameter {}
