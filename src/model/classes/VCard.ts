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
} from "../properties";
import { Kind } from "../propertyValues";
import { VCardDefinition, VCardGroupDefinition } from "../vCard";

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
  private _clientPidMap?: ClientPidMapProperty;
  private _url?: UrlProperty;
  private _version?: VersionProperty;
  private _key?: KeyProperty;
  private _fbUrl?: FbUrlProperty;
  private _calendarAddressUri?: CalendarAddressUriProperty;
  private _calendarUri?: CalendarUriProperty;
  private _member?: MemberProperty;

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
    /* istanbul ignore next */
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

  public setBegin(begin: BeginProperty) {
    this._begin = begin;
  }
  public setEnd(end: EndProperty) {
    this._end = end;
  }
  public setSource(source: SourceProperty) {
    this._source = source;
  }
  public setKind(kind: KindProperty) {
    this._kind = kind;
  }
  public setXml(xml: XmlProperty) {
    this._xml = xml;
  }
  public setFullName(fullName: FullNameProperty) {
    this._fullName = fullName;
  }
  public setName(name: NameProperty) {
    this._name = name;
  }
  public setNickName(nickName: NickNameProperty) {
    this._nickName = nickName;
  }
  public setPhoto(photo: PhotoProperty) {
    this._photo = photo;
  }
  public setBirthday(birthday: BirthdayProperty) {
    this._birthday = birthday;
  }
  public setAnniversary(anniversary: AnniversaryProperty) {
    this._anniversary = anniversary;
  }
  public setGender(gender: GenderProperty) {
    this._gender = gender;
  }
  public setAddress(address: AddressProperty) {
    this._address = address;
  }
  public setTel(tel: TelProperty) {
    this._tel = tel;
  }
  public setEmail(email: EmailProperty) {
    this._email = email;
  }
  public setImpp(impp: ImppProperty) {
    this._impp = impp;
  }
  public setLanguage(language: LanguageProperty) {
    this._language = language;
  }
  public setTimezone(timezone: TimezoneProperty) {
    this._timezone = timezone;
  }
  public setGeoLocation(geoLocation: GeoLocationProperty) {
    this._geoLocation = geoLocation;
  }
  public setTitle(title: TitleProperty) {
    this._title = title;
  }
  public setRole(role: RoleProperty) {
    this._role = role;
  }
  public setLogo(logo: LogoProperty) {
    this._logo = logo;
  }
  public setOrganization(organization: OrganizationProperty) {
    this._organization = organization;
  }
  public setRelated(related: RelatedProperty) {
    this._related = related;
  }
  public setCategories(categories: CategoriesProperty) {
    this._categories = categories;
  }
  public setNote(note: NoteProperty) {
    this._note = note;
  }
  public setProductId(productId: ProductIdProperty) {
    this._productId = productId;
  }
  public setRevision(revision: RevisionProperty) {
    this._revision = revision;
  }
  public setSound(sound: SoundProperty) {
    this._sound = sound;
  }
  public setUid(uid: UidProperty) {
    this._uid = uid;
  }
  /* istanbul ignore next */
  public setClientPidMap(clientPidMap: ClientPidMapProperty) {
    this._clientPidMap = clientPidMap;
  }
  public setUrl(url: UrlProperty) {
    this._url = url;
  }
  public setVersion(version: VersionProperty) {
    this._version = version;
  }
  public setKey(key: KeyProperty) {
    this._key = key;
  }
  public setFbUrl(fbUrl: FbUrlProperty) {
    this._fbUrl = fbUrl;
  }
  public setCalendarAddressUri(calendarAddressUri: CalendarAddressUriProperty) {
    this._calendarAddressUri = calendarAddressUri;
  }
  public setCalendarUri(calendarUri: CalendarUriProperty) {
    this._calendarUri = calendarUri;
  }
  public setMember(member: MemberProperty) {
    this._member = member;
  }

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
