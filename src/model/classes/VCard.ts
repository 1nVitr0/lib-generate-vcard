import { generateVCard } from "../../generate/vCard";
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
} from "../properties";
import { Kind } from "../propertyDictionaries";
import { VCardDefinition, VCardGroupDefinition } from "../vCard";
import {
  SourcePropertyParameters,
  KeyPropertyParameters,
  FbUrlPropertyParameters,
  CalendarAddressUriPropertyParameters,
  CalendarUriPropertyParameters,
  MemberPropertyParameters,
  UrlPropertyParameters,
  UIdPropertyParameters,
  SoundPropertyParameters,
  RevisionPropertyParameters,
  ProductIdPropertyParameters,
  NotePropertyParameters,
  CategoriesPropertyParameters,
  RelatedPropertyParameters,
  OrganizationPropertyParameters,
  LogoPropertyParameters,
  RolePropertyParameters,
  TitlePropertyParameters,
  GeoLocationPropertyParameters,
  TimezonePropertyParameters,
  LanguagePropertyParameters,
  ImppPropertyParameters,
  EmailPropertyParameters,
  TelPropertyParameters,
  AddressPropertyParameters,
  GenderPropertyParameters,
  AnniversaryPropertyParameters,
  BirthdayPropertyParameters,
  PhotoPropertyParameters,
  NickNamePropertyParameters,
  FullNamePropertyParameters,
  XmlPropertyParameters,
  NamePropertyParameters,
  KindPropertyParameters,
} from "../propertyParameters";
import {
  isMultiProperty,
  isMultiPropertyObject,
  isPropertyObject,
  isClientPidMapDict,
} from "../../validate/properties";
import { MultiProperty, Property } from "../properties";
import { PropertyParameters } from "../parameters";
import { ClientPIdMapPropertyParameters } from "../propertyParameters";

/**
 * Class representation of a vCard.
 *
 * @category Generate
 * @example
 * ```ts
 * const vCard = new VCard(Kind.Individual);
 * vCard.setFullName("Jane Doe");
 *
 * vCard.toString();
 * ```
 */
export default class VCard implements VCardDefinition, Omit<VCardGroupDefinition, "kind"> {
  private _kind: KindProperty;
  private _fullName: FullNameProperty;
  private _begin?: BeginProperty;
  private _end?: EndProperty;
  private _source?: SourceProperty;
  private _xml?: XmlProperty;
  private _name?: NameProperty;
  private _nickName?: NickNameProperty;
  private _photo?: PhotoProperty;
  private _birthday?: BirthdayProperty;
  private _anniversary?: AnniversaryProperty;
  private _gender?: GenderProperty;
  private _address?: AddressProperty;
  private _tel?: TelProperty;
  private _email?: EmailProperty;
  private _impp?: ImppProperty;
  private _language?: LanguageProperty;
  private _timezone?: TimezoneProperty;
  private _geoLocation?: GeoLocationProperty;
  private _title?: TitleProperty;
  private _role?: RoleProperty;
  private _logo?: LogoProperty;
  private _organization?: OrganizationProperty;
  private _related?: RelatedProperty;
  private _categories?: CategoriesProperty;
  private _note?: NoteProperty;
  private _productId?: ProductIdProperty;
  private _revision?: RevisionProperty;
  private _sound?: SoundProperty;
  private _uid?: UidProperty;
  private _clientPidMap?: ClientPidMapProperty | ClientPidMapDictionary;
  private _url?: UrlProperty;
  private _version?: VersionProperty;
  private _key?: KeyProperty;
  private _fbUrl?: FbUrlProperty;
  private _calendarAddressUri?: CalendarAddressUriProperty;
  private _calendarUri?: CalendarUriProperty;
  private _member?: MemberProperty;

  /**
   * Generate a vCard instance from a vCard definition object.
   *
   * @param vCardObject a vCard Definition in form of an object.
   * @returns a new VCard instance.
   */
  public static fromVCardObject(vCardObject: VCardDefinition | VCardGroupDefinition): VCard {
    const vCard = new VCard(vCardObject.kind, vCardObject.fullName);

    if (vCardObject.begin) vCard.setBegin(vCardObject.begin);
    if (vCardObject.end) vCard.setEnd(vCardObject.end);
    if (vCardObject.source) vCard.setSource(vCardObject.source);
    if (vCardObject.kind) vCard.setKind(vCardObject.kind);
    if (vCardObject.xml) vCard.setXml(vCardObject.xml);
    if (vCardObject.fullName) vCard.setFullName(vCardObject.fullName);
    if (vCardObject.name) vCard.setName(vCardObject.name);
    if (vCardObject.nickName) vCard.setNickName(vCardObject.nickName);
    if (vCardObject.photo) vCard.setPhoto(vCardObject.photo);
    if (vCardObject.birthday) vCard.setBirthday(vCardObject.birthday);
    if (vCardObject.anniversary) vCard.setAnniversary(vCardObject.anniversary);
    if (vCardObject.gender) vCard.setGender(vCardObject.gender);
    if (vCardObject.address) vCard.setAddress(vCardObject.address);
    if (vCardObject.tel) vCard.setTel(vCardObject.tel);
    if (vCardObject.email) vCard.setEmail(vCardObject.email);
    if (vCardObject.impp) vCard.setImpp(vCardObject.impp);
    if (vCardObject.language) vCard.setLanguage(vCardObject.language);
    if (vCardObject.timezone) vCard.setTimezone(vCardObject.timezone);
    if (vCardObject.geoLocation) vCard.setGeoLocation(vCardObject.geoLocation);
    if (vCardObject.title) vCard.setTitle(vCardObject.title);
    if (vCardObject.role) vCard.setRole(vCardObject.role);
    if (vCardObject.logo) vCard.setLogo(vCardObject.logo);
    if (vCardObject.organization) vCard.setOrganization(vCardObject.organization);
    if (vCardObject.related) vCard.setRelated(vCardObject.related);
    if (vCardObject.categories) vCard.setCategories(vCardObject.categories);
    if (vCardObject.note) vCard.setNote(vCardObject.note);
    if (vCardObject.productId) vCard.setProductId(vCardObject.productId);
    if (vCardObject.revision) vCard.setRevision(vCardObject.revision);
    if (vCardObject.sound) vCard.setSound(vCardObject.sound);
    if (vCardObject.uid) vCard.setUid(vCardObject.uid);
    if (vCardObject.clientPidMap) vCard.setClientPidMap(vCardObject.clientPidMap);
    if (vCardObject.url) vCard.setUrl(vCardObject.url);
    if (vCardObject.version) vCard.setVersion(vCardObject.version);
    if (vCardObject.key) vCard.setKey(vCardObject.key);
    if (vCardObject.fbUrl) vCard.setFbUrl(vCardObject.fbUrl);
    if (vCardObject.calendarAddressUri) vCard.setCalendarAddressUri(vCardObject.calendarAddressUri);
    if (vCardObject.calendarUri) vCard.setCalendarUri(vCardObject.calendarUri);
    if ("member" in vCardObject && vCardObject.member) vCard.setMember(vCardObject.member);

    return vCard;
  }

  private static asProperty<Prop extends Property | MultiProperty, Params extends PropertyParameters>(
    value: Prop,
    parameters?: Params
  ): Prop {
    // We can safely cas as unknown here, because this is only used internally
    if (parameters == undefined) {
      return value as Prop;
    } else if (isMultiProperty(value)) {
      if (isMultiPropertyObject(value)) {
        return {
          commonParameters: value.commonParameters ? { ...value.commonParameters, ...parameters } : parameters,
          values: value.values,
        } as unknown as Prop;
      } else {
        return { commonParameters: parameters, values: value } as unknown as Prop;
      }
    } else if (isPropertyObject(value)) {
      return {
        value: value.value,
        parameters: value.parameters ? { ...value.parameters, ...parameters } : parameters,
      } as unknown as Prop;
    } else {
      return { value, parameters } as unknown as Prop;
    }
  }

  /**
   * Create a new vCard instance.
   *
   * @param kind the kind of the vCard.
   * @param fullName the full name of the vCard contact.
   *
   * @example
   * ```ts
   * const vCard = new VCard(Kind.Individual);
   * vCard.setFullName("Jane Doe");
   * ```
   */
  public constructor(kind: KindProperty = Kind.Individual, fullName: FullNameProperty = "") {
    this._kind = kind;
    this._fullName = fullName;
  }

  public get begin() {
    return this._begin;
  }
  public get end() {
    return this._end;
  }
  public get source() {
    return this._source;
  }
  public get kind() {
    return this._kind;
  }
  public get xml() {
    return this._xml;
  }
  public get fullName() {
    return this._fullName;
  }
  public get name() {
    return this._name;
  }
  public get nickName() {
    return this._nickName;
  }
  public get photo() {
    return this._photo;
  }
  public get birthday() {
    return this._birthday;
  }
  public get anniversary() {
    return this._anniversary;
  }
  public get gender() {
    return this._gender;
  }
  public get address() {
    return this._address;
  }
  public get tel() {
    return this._tel;
  }
  public get email() {
    return this._email;
  }
  public get impp() {
    return this._impp;
  }
  public get language() {
    return this._language;
  }
  public get timezone() {
    return this._timezone;
  }
  public get geoLocation() {
    return this._geoLocation;
  }
  public get title() {
    return this._title;
  }
  public get role() {
    return this._role;
  }
  public get logo() {
    return this._logo;
  }
  public get organization() {
    return this._organization;
  }
  public get related() {
    return this._related;
  }
  public get categories() {
    return this._categories;
  }
  public get note() {
    return this._note;
  }
  public get productId() {
    return this._productId;
  }
  public get revision() {
    return this._revision;
  }
  public get sound() {
    return this._sound;
  }
  public get uid() {
    return this._uid;
  }
  public get clientPidMap() {
    return this._clientPidMap;
  }
  public get url() {
    return this._url;
  }
  public get version() {
    return this._version;
  }
  public get key() {
    return this._key;
  }
  public get fbUrl() {
    return this._fbUrl;
  }
  public get calendarAddressUri() {
    return this._calendarAddressUri;
  }
  public get calendarUri() {
    return this._calendarUri;
  }
  public get member() {
    return this._member;
  }

  /**
   * Override the value of the begin property.
   *
   * @param begin the begin property value of the vCard.
   * @deprecated using this method has no effect, it is only here for completeness.
   */
  public setBegin(begin: BeginProperty) {
    this._begin = begin;
  }
  /**
   * Override the value of the end property.
   *
   * @param end the end property value of the vCard.
   * @deprecated using this method has no effect, it is only here for completeness.
   */
  public setEnd(end: EndProperty) {
    this._end = end;
  }
  /**
   * Set the value of the source property.
   *
   * @param source the source property value of the vCard.
   */
  public setSource(source: SourceProperty, parameters?: SourcePropertyParameters) {
    this._source = VCard.asProperty(source, parameters);
  }
  /**
   * Set the value of the kind property.
   *
   * @param kind the kind property value of the vCard.
   */
  /**
   * Set the value of the kind property.
   *
   * @param kind the kind property value of the vCard.
   */
  public setKind(kind: KindProperty, parameters?: KindPropertyParameters) {
    this._kind = VCard.asProperty(kind, parameters);
  }
  /**
   * Set the value of the xml property.
   *
   * @param xml the xml property value of the vCard.
   */
  public setXml(xml: XmlProperty, parameters?: XmlPropertyParameters) {
    this._xml = VCard.asProperty(xml, parameters);
  }
  /**
   * Set the value of the fullName property.
   *
   * @param fullName the fullName property value of the vCard.
   */
  public setFullName(fullName: FullNameProperty, parameters?: FullNamePropertyParameters) {
    this._fullName = VCard.asProperty(fullName, parameters);
  }
  /**
   * Set the value of the name property.
   *
   * @param name the name property value of the vCard.
   */
  public setName(name: NameProperty, parameters?: NamePropertyParameters) {
    this._name = VCard.asProperty(name, parameters);
  }
  /**
   * Set the value of the nickName property.
   *
   * @param nickName the nickName property value of the vCard.
   */
  public setNickName(nickName: NickNameProperty, parameters?: NickNamePropertyParameters) {
    this._nickName = VCard.asProperty(nickName, parameters);
  }
  /**
   * Set the value of the photo property.
   *
   * @param photo the photo property value of the vCard.
   */
  public setPhoto(photo: PhotoProperty, parameters?: PhotoPropertyParameters) {
    this._photo = VCard.asProperty(photo, parameters);
  }
  /**
   * Set the value of the birthday property.
   *
   * @param birthday the birthday property value of the vCard.
   */
  public setBirthday(birthday: BirthdayProperty, parameters?: BirthdayPropertyParameters) {
    this._birthday = VCard.asProperty(birthday, parameters);
  }
  /**
   * Set the value of the anniversary property.
   *
   * @param anniversary the anniversary property value of the vCard.
   */
  public setAnniversary(anniversary: AnniversaryProperty, parameters?: AnniversaryPropertyParameters) {
    this._anniversary = VCard.asProperty(anniversary, parameters);
  }
  /**
   * Set the value of the gender property.
   *
   * @param gender the gender property value of the vCard.
   */
  public setGender(gender: GenderProperty, parameters?: GenderPropertyParameters) {
    this._gender = VCard.asProperty(gender, parameters);
  }
  /**
   * Set the value of the address property.
   *
   * @param address the address property value of the vCard.
   */
  public setAddress(address: AddressProperty, parameters?: AddressPropertyParameters) {
    this._address = VCard.asProperty(address, parameters);
  }
  /**
   * Set the value of the tel property.
   *
   * @param tel the tel property value of the vCard.
   */
  public setTel(tel: TelProperty, parameters?: TelPropertyParameters) {
    this._tel = VCard.asProperty(tel, parameters);
  }
  /**
   * Set the value of the email property.
   *
   * @param email the email property value of the vCard.
   */
  public setEmail(email: EmailProperty, parameters?: EmailPropertyParameters) {
    this._email = VCard.asProperty(email, parameters);
  }
  /**
   * Set the value of the impp property.
   *
   * @param impp the impp property value of the vCard.
   */
  public setImpp(impp: ImppProperty, parameters?: ImppPropertyParameters) {
    this._impp = VCard.asProperty(impp, parameters);
  }
  /**
   * Set the value of the language property.
   *
   * @param language the language property value of the vCard.
   */
  public setLanguage(language: LanguageProperty, parameters?: LanguagePropertyParameters) {
    this._language = VCard.asProperty(language, parameters);
  }
  /**
   * Set the value of the timezone property.
   *
   * @param timezone the timezone property value of the vCard.
   */
  public setTimezone(timezone: TimezoneProperty, parameters?: TimezonePropertyParameters) {
    this._timezone = VCard.asProperty(timezone, parameters);
  }
  /**
   * Set the value of the geoLocation property.
   *
   * @param geoLocation the geoLocation property value of the vCard.
   */
  public setGeoLocation(geoLocation: GeoLocationProperty, parameters?: GeoLocationPropertyParameters) {
    this._geoLocation = VCard.asProperty(geoLocation, parameters);
  }
  /**
   * Set the value of the title property.
   *
   * @param title the title property value of the vCard.
   */
  public setTitle(title: TitleProperty, parameters?: TitlePropertyParameters) {
    this._title = VCard.asProperty(title, parameters);
  }
  /**
   * Set the value of the role property.
   *
   * @param role the role property value of the vCard.
   */
  public setRole(role: RoleProperty, parameters?: RolePropertyParameters) {
    this._role = VCard.asProperty(role, parameters);
  }
  /**
   * Set the value of the logo property.
   *
   * @param logo the logo property value of the vCard.
   */
  public setLogo(logo: LogoProperty, parameters?: LogoPropertyParameters) {
    this._logo = VCard.asProperty(logo, parameters);
  }
  /**
   * Set the value of the organization property.
   *
   * @param organization the organization property value of the vCard.
   */
  public setOrganization(organization: OrganizationProperty, parameters?: OrganizationPropertyParameters) {
    this._organization = VCard.asProperty(organization, parameters);
  }
  /**
   * Set the value of the related property.
   *
   * @param related the related property value of the vCard.
   */
  public setRelated(related: RelatedProperty, parameters?: RelatedPropertyParameters) {
    this._related = VCard.asProperty(related, parameters);
  }
  /**
   * Set the value of the categories property.
   *
   * @param categories the categories property value of the vCard.
   */
  public setCategories(categories: CategoriesProperty, parameters?: CategoriesPropertyParameters) {
    this._categories = VCard.asProperty(categories, parameters);
  }
  /**
   * Set the value of the note property.
   *
   * @param note the note property value of the vCard.
   */
  public setNote(note: NoteProperty, parameters?: NotePropertyParameters) {
    this._note = VCard.asProperty(note, parameters);
  }
  /**
   * Set the value of the productId property.
   *
   * @param productId the productId property value of the vCard.
   */
  public setProductId(productId: ProductIdProperty, parameters?: ProductIdPropertyParameters) {
    this._productId = VCard.asProperty(productId, parameters);
  }
  /**
   * Set the value of the revision property.
   *
   * @param revision the revision property value of the vCard.
   */
  public setRevision(revision: RevisionProperty, parameters?: RevisionPropertyParameters) {
    this._revision = VCard.asProperty(revision, parameters);
  }
  /**
   * Set the value of the sound property.
   *
   * @param sound the sound property value of the vCard.
   */
  public setSound(sound: SoundProperty, parameters?: SoundPropertyParameters) {
    this._sound = VCard.asProperty(sound, parameters);
  }
  /**
   * Set the value of the uid property.
   *
   * @param uid the uid property value of the vCard.
   */
  public setUid(uid: UidProperty, parameters?: UIdPropertyParameters) {
    this._uid = VCard.asProperty(uid, parameters);
  }
  /* istanbul ignore next */
  /**
   * Set the value of the clientPidMap property.
   *
   * @param clientPidMap the clientPidMap property value of the vCard.
   */
  public setClientPidMap(clientPidMap: ClientPidMapProperty, parameters?: ClientPIdMapPropertyParameters): void;
  public setClientPidMap(clientPidMap: ClientPidMapProperty | ClientPidMapDictionary): void;
  public setClientPidMap(
    clientPidMap: ClientPidMapProperty | ClientPidMapDictionary,
    parameters?: ClientPIdMapPropertyParameters
  ) {
    if (isClientPidMapDict(clientPidMap)) {
      if (parameters) throw new Error("Cannot set parameters for a ClientPidMapDictionary");
      else this._clientPidMap = clientPidMap;
    } else {
      this._clientPidMap = VCard.asProperty(clientPidMap, parameters);
    }
  }
  /**
   * Set the value of the url property.
   *
   * @param url the url property value of the vCard.
   */
  public setUrl(url: UrlProperty, parameters?: UrlPropertyParameters) {
    this._url = VCard.asProperty(url, parameters);
  }
  /**
   * Set the value of the version property.
   *
   * @param version the version property value of the vCard.
   */
  public setVersion(version: VersionProperty) {
    this._version = version;
  }
  /**
   * Set the value of the key property.
   *
   * @param key the key property value of the vCard.
   */
  public setKey(key: KeyProperty, parameters?: KeyPropertyParameters) {
    this._key = VCard.asProperty(key, parameters);
  }
  /**
   * Set the value of the fbUrl property.
   *
   * @param fbUrl the fbUrl property value of the vCard.
   */
  public setFbUrl(fbUrl: FbUrlProperty, parameters?: FbUrlPropertyParameters) {
    this._fbUrl = VCard.asProperty(fbUrl, parameters);
  }
  /**
   * Set the value of the calendarAddressUri property.
   *
   * @param calendarAddressUri the calendarAddressUri property value of the vCard.
   */
  public setCalendarAddressUri(
    calendarAddressUri: CalendarAddressUriProperty,
    parameters?: CalendarAddressUriPropertyParameters
  ) {
    this._calendarAddressUri = VCard.asProperty(calendarAddressUri, parameters);
  }
  /**
   * Set the value of the calendarUri property.
   *
   * @param calendarUri the calendarUri property value of the vCard.
   */
  public setCalendarUri(calendarUri: CalendarUriProperty, parameters?: CalendarUriPropertyParameters) {
    this._calendarUri = VCard.asProperty(calendarUri, parameters);
  }
  /**
   * Set the value of the member property.
   *
   * @param member the member property value of the vCard.
   */
  public setMember(member: MemberProperty, parameters?: MemberPropertyParameters) {
    this._member = VCard.asProperty(member, parameters);
  }

  /**
   * Generates a simplified vCard definition as a dictionary object.
   *
   * @returns The simplified vCard definition.
   */
  public toVCardObject(): VCardDefinition | VCardGroupDefinition {
    const vCard: VCardDefinition | VCardGroupDefinition = {
      kind: this._kind,
      fullName: this._fullName,
    };

    if (this.begin) vCard.begin = this.begin;
    if (this.end) vCard.end = this.end;
    if (this.source) vCard.source = this.source;
    if (this.kind) vCard.kind = this.kind;
    if (this.xml) vCard.xml = this.xml;
    if (this.fullName) vCard.fullName = this.fullName;
    if (this.name) vCard.name = this.name;
    if (this.nickName) vCard.nickName = this.nickName;
    if (this.photo) vCard.photo = this.photo;
    if (this.birthday) vCard.birthday = this.birthday;
    if (this.anniversary) vCard.anniversary = this.anniversary;
    if (this.gender) vCard.gender = this.gender;
    if (this.address) vCard.address = this.address;
    if (this.tel) vCard.tel = this.tel;
    if (this.email) vCard.email = this.email;
    if (this.impp) vCard.impp = this.impp;
    if (this.language) vCard.language = this.language;
    if (this.timezone) vCard.timezone = this.timezone;
    if (this.geoLocation) vCard.geoLocation = this.geoLocation;
    if (this.title) vCard.title = this.title;
    if (this.role) vCard.role = this.role;
    if (this.logo) vCard.logo = this.logo;
    if (this.organization) vCard.organization = this.organization;
    if (this.related) vCard.related = this.related;
    if (this.categories) vCard.categories = this.categories;
    if (this.note) vCard.note = this.note;
    if (this.productId) vCard.productId = this.productId;
    if (this.revision) vCard.revision = this.revision;
    if (this.sound) vCard.sound = this.sound;
    if (this.uid) vCard.uid = this.uid;
    /* istanbul ignore next */
    if (this.clientPidMap) vCard.clientPidMap = this.clientPidMap;
    if (this.url) vCard.url = this.url;
    if (this.version) vCard.version = this.version;
    if (this.key) vCard.key = this.key;
    if (this.fbUrl) vCard.fbUrl = this.fbUrl;
    if (this.calendarAddressUri) vCard.calendarAddressUri = this.calendarAddressUri;
    if (this.calendarUri) vCard.calendarUri = this.calendarUri;
    if (this.member) (vCard as VCardGroupDefinition).member = this.member;

    return vCard;
  }

  /**
   * Generates a string representation of the vCard compatible with RFC 6350.
   *
   * @returns the generated vCard string.
   */
  public toString(): string {
    return generateVCard(this.toVCardObject());
  }

  /**
   * @alias toString
   */
  public stringify(): string {
    return this.toString();
  }
}
