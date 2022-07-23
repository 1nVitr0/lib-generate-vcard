import { IanaToken, XName } from "./datatypes";
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
interface BaseTypedPropertyParameters extends BasePropertyParameters, TypeParameter<IanaToken | XName> {}
interface BaseLangPropertyParameters extends BaseTypedPropertyParameters, LanguageParameter {}

export interface SourcePropertyParameters extends ValueParameter<"uri">, BasePropertyParameters, MediaTypeParameter {}

export interface KindPropertyParameters extends ValueParameter<"text">, AnyParameter, GroupParameter {}

export interface XmlPropertyParameters extends ValueParameter<"text">, AltIdParameter, GroupParameter {}

export interface FullNamePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

export interface NickNamePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

export interface PhotoPropertyParameters extends ValueParameter<"uri">, BaseTypedPropertyParameters {}

export interface KeyPropertyParameters
  extends ValueParameter<"text" | "uri">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

export interface AnniversaryPropertyParameters
  extends ValueParameter<"text" | "date-and-or-time">,
    AltIdParameter,
    CalscaleParameter,
    AnyParameter,
    GroupParameter {}

export interface BirthdayPropertyParameters extends AnniversaryPropertyParameters {}

export interface GenderPropertyParameters extends ValueParameter<"text">, AnyParameter, GroupParameter {}

export interface AddressPropertyParameters
  extends ValueParameter<"text">,
    LabelParameter,
    GeoParameter,
    TimezoneParameter,
    BaseLangPropertyParameters {}

export interface TelPropertyParameters
  extends ValueParameter<"text" | "uri">,
    MediaTypeParameter,
    TypeParameter<TelType | IanaToken | XName>,
    BasePropertyParameters {}

export interface EmailPropertyParameters extends ValueParameter<"text">, BaseTypedPropertyParameters {}

export interface IMPPPropertyParameters
  extends ValueParameter<"uri">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

export interface LanguagePropertyParameters extends ValueParameter<"language-tag">, BaseTypedPropertyParameters {}

export interface TimezonePropertyParameters
  extends ValueParameter<"text" | "uri" | "utc-offset">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

export interface GeoLocationPropertyParameters
  extends ValueParameter<"uri">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

export interface TitlePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

export interface RolePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

export interface LogoPropertyParameters extends ValueParameter<"uri">, MediaTypeParameter, BaseLangPropertyParameters {}

export interface OrganizationPropertyParameters
  extends ValueParameter<"text">,
    SortAsParameter,
    BaseLangPropertyParameters {}

export interface MemberPropertyParameters extends ValueParameter<"uri">, MediaTypeParameter, BasePropertyParameters {}

export interface RelatedPropertyParameters
  extends ValueParameter<"uri" | "text">,
    MediaTypeParameter,
    LanguageParameter,
    BasePropertyParameters,
    TypeParameter<RelationType> {}

export interface CategoriesPropertyParameters extends ValueParameter<"text">, BaseTypedPropertyParameters {}

export interface NotePropertyParameters extends ValueParameter<"text">, BaseLangPropertyParameters {}

export interface ProductIdPropertyParameters extends ValueParameter<"text">, AnyParameter, GroupParameter {}

export interface RevisionPropertyParameters extends ValueParameter<"timestamp">, AnyParameter, GroupParameter {}

export interface SoundPropertyParameters extends ValueParameter<"uri">, BaseLangPropertyParameters {}

export interface UIdPropertyParameters extends ValueParameter<"text" | "uri">, AnyParameter, GroupParameter {}

export interface ClientPIdMapParameters extends AnyParameter, GroupParameter {}

export interface UrlPropertyParameters extends ValueParameter<"uri">, MediaTypeParameter, BaseTypedPropertyParameters {}

export interface VersionPropertyParameters extends ValueParameter<"text">, AnyParameter, GroupParameter {}

export interface FbUrlPropertyParameters
  extends ValueParameter<"uri">,
    MediaTypeParameter,
    BaseTypedPropertyParameters {}

export interface CalendarAddressUriPropertyParameters extends FbUrlPropertyParameters {}

export interface CalendarUriPropertyParameters extends FbUrlPropertyParameters {}
