import { generateVCard } from "../../generate/vCard";
import {
  BeginProperty,
  EndProperty,
  SourceProperty,
  KindProperty,
  XmlProperty,
  FullNameProperty,
  NameProperty,
  NickNameProperty,
  PhotoProperty,
  BirthdayProperty,
  AnniversaryProperty,
  GenderProperty,
  AddressProperty,
  TelProperty,
  EmailProperty,
  ImppProperty,
  LanguageProperty,
  TimezoneProperty,
  GeoLocationProperty,
  TitleProperty,
  RoleProperty,
  LogoProperty,
  OrganizationProperty,
  RelatedProperty,
  CategoriesProperty,
  NoteProperty,
  ProductIdProperty,
  RevisionProperty,
  SoundProperty,
  UidProperty,
  ClientPidMapProperty,
  UrlProperty,
  VersionProperty,
  KeyProperty,
  FbUrlProperty,
  CalendarAddressUriProperty,
  CalendarUriProperty,
  MemberProperty,
  ClientPidMapDictionary,
} from "../properties";
import { Kind } from "../propertyValues";
import { VCardDefinition, VCardGroupDefinition } from "../vCard";

/**
 * Class representation of a vCard.
 *
 * @category Generate
 */
export default class VCard implements VCardDefinition, VCardGroupDefinition {
  private _kind: KindProperty<Kind>;
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

  /**
   * Create a new vCard instance.
   *
   * @param kind the kind of the vCard.
   * @param fullName the full name of the vCard contact.
   *
   * @example
   * ```ts
   * const vCard = new VCard("individual");
   * vCard.setFullName("John Doe");
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
  public setSource(source: SourceProperty) {
    this._source = source;
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
  public setKind(kind: KindProperty) {
    this._kind = kind;
  }
  /**
   * Set the value of the xml property.
   *
   * @param xml the xml property value of the vCard.
   */
  public setXml(xml: XmlProperty) {
    this._xml = xml;
  }
  /**
   * Set the value of the fullName property.
   *
   * @param fullName the fullName property value of the vCard.
   */
  public setFullName(fullName: FullNameProperty) {
    this._fullName = fullName;
  }
  /**
   * Set the value of the name property.
   *
   * @param name the name property value of the vCard.
   */
  public setName(name: NameProperty) {
    this._name = name;
  }
  /**
   * Set the value of the nickName property.
   *
   * @param nickName the nickName property value of the vCard.
   */
  public setNickName(nickName: NickNameProperty) {
    this._nickName = nickName;
  }
  /**
   * Set the value of the photo property.
   *
   * @param photo the photo property value of the vCard.
   */
  public setPhoto(photo: PhotoProperty) {
    this._photo = photo;
  }
  /**
   * Set the value of the birthday property.
   *
   * @param birthday the birthday property value of the vCard.
   */
  public setBirthday(birthday: BirthdayProperty) {
    this._birthday = birthday;
  }
  /**
   * Set the value of the anniversary property.
   *
   * @param anniversary the anniversary property value of the vCard.
   */
  public setAnniversary(anniversary: AnniversaryProperty) {
    this._anniversary = anniversary;
  }
  /**
   * Set the value of the gender property.
   *
   * @param gender the gender property value of the vCard.
   */
  public setGender(gender: GenderProperty) {
    this._gender = gender;
  }
  /**
   * Set the value of the address property.
   *
   * @param address the address property value of the vCard.
   */
  public setAddress(address: AddressProperty) {
    this._address = address;
  }
  /**
   * Set the value of the tel property.
   *
   * @param tel the tel property value of the vCard.
   */
  public setTel(tel: TelProperty) {
    this._tel = tel;
  }
  /**
   * Set the value of the email property.
   *
   * @param email the email property value of the vCard.
   */
  public setEmail(email: EmailProperty) {
    this._email = email;
  }
  /**
   * Set the value of the impp property.
   *
   * @param impp the impp property value of the vCard.
   */
  public setImpp(impp: ImppProperty) {
    this._impp = impp;
  }
  /**
   * Set the value of the language property.
   *
   * @param language the language property value of the vCard.
   */
  public setLanguage(language: LanguageProperty) {
    this._language = language;
  }
  /**
   * Set the value of the timezone property.
   *
   * @param timezone the timezone property value of the vCard.
   */
  public setTimezone(timezone: TimezoneProperty) {
    this._timezone = timezone;
  }
  /**
   * Set the value of the geoLocation property.
   *
   * @param geoLocation the geoLocation property value of the vCard.
   */
  public setGeoLocation(geoLocation: GeoLocationProperty) {
    this._geoLocation = geoLocation;
  }
  /**
   * Set the value of the title property.
   *
   * @param title the title property value of the vCard.
   */
  public setTitle(title: TitleProperty) {
    this._title = title;
  }
  /**
   * Set the value of the role property.
   *
   * @param role the role property value of the vCard.
   */
  public setRole(role: RoleProperty) {
    this._role = role;
  }
  /**
   * Set the value of the logo property.
   *
   * @param logo the logo property value of the vCard.
   */
  public setLogo(logo: LogoProperty) {
    this._logo = logo;
  }
  /**
   * Set the value of the organization property.
   *
   * @param organization the organization property value of the vCard.
   */
  public setOrganization(organization: OrganizationProperty) {
    this._organization = organization;
  }
  /**
   * Set the value of the related property.
   *
   * @param related the related property value of the vCard.
   */
  public setRelated(related: RelatedProperty) {
    this._related = related;
  }
  /**
   * Set the value of the categories property.
   *
   * @param categories the categories property value of the vCard.
   */
  public setCategories(categories: CategoriesProperty) {
    this._categories = categories;
  }
  /**
   * Set the value of the note property.
   *
   * @param note the note property value of the vCard.
   */
  public setNote(note: NoteProperty) {
    this._note = note;
  }
  /**
   * Set the value of the productId property.
   *
   * @param productId the productId property value of the vCard.
   */
  public setProductId(productId: ProductIdProperty) {
    this._productId = productId;
  }
  /**
   * Set the value of the revision property.
   *
   * @param revision the revision property value of the vCard.
   */
  public setRevision(revision: RevisionProperty) {
    this._revision = revision;
  }
  /**
   * Set the value of the sound property.
   *
   * @param sound the sound property value of the vCard.
   */
  public setSound(sound: SoundProperty) {
    this._sound = sound;
  }
  /**
   * Set the value of the uid property.
   *
   * @param uid the uid property value of the vCard.
   */
  public setUid(uid: UidProperty) {
    this._uid = uid;
  }
  /* istanbul ignore next */
  /**
   * Set the value of the clientPidMap property.
   *
   * @param clientPidMap the clientPidMap property value of the vCard.
   */
  public setClientPidMap(clientPidMap: ClientPidMapProperty | ClientPidMapDictionary) {
    this._clientPidMap = clientPidMap;
  }
  /**
   * Set the value of the url property.
   *
   * @param url the url property value of the vCard.
   */
  public setUrl(url: UrlProperty) {
    this._url = url;
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
  public setKey(key: KeyProperty) {
    this._key = key;
  }
  /**
   * Set the value of the fbUrl property.
   *
   * @param fbUrl the fbUrl property value of the vCard.
   */
  public setFbUrl(fbUrl: FbUrlProperty) {
    this._fbUrl = fbUrl;
  }
  /**
   * Set the value of the calendarAddressUri property.
   *
   * @param calendarAddressUri the calendarAddressUri property value of the vCard.
   */
  public setCalendarAddressUri(calendarAddressUri: CalendarAddressUriProperty) {
    this._calendarAddressUri = calendarAddressUri;
  }
  /**
   * Set the value of the calendarUri property.
   *
   * @param calendarUri the calendarUri property value of the vCard.
   */
  public setCalendarUri(calendarUri: CalendarUriProperty) {
    this._calendarUri = calendarUri;
  }
  /**
   * Set the value of the member property.
   *
   * @param member the member property value of the vCard.
   */
  public setMember(member: MemberProperty) {
    this._member = member;
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
