import {
  AltIdParameter,
  CalscaleParameter,
  GeoParameter,
  CharsetParameter,
  LabelParameter,
  LanguageParameter,
  MediaTypeParameter,
  PIdParameter,
  PrefParameter,
  PropertyParameters,
  SortAsParameter,
  TimezoneParameter,
  TypeParameter,
  ValueParameter,
  ValueType,
} from "../model/parameters";

/**
 * @internal
 * @category Internally Used
 */
export function isValueParameter(parameters: PropertyParameters): parameters is ValueParameter<ValueType> {
  return "value" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isLanguageParameter(parameters: PropertyParameters): parameters is LanguageParameter {
  return "language" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isPrefParameter(parameters: PropertyParameters): parameters is PrefParameter {
  return "pref" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isAltIdParameter(parameters: PropertyParameters): parameters is AltIdParameter {
  return "altId" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isPIdParameter(parameters: PropertyParameters): parameters is PIdParameter {
  return "pId" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isTypeParameter(parameters: PropertyParameters): parameters is TypeParameter<string> {
  return "type" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isMediaTypeParameter(parameters: PropertyParameters): parameters is MediaTypeParameter {
  return "mediaType" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isCalscaleParameter(parameters: PropertyParameters): parameters is CalscaleParameter {
  return "calScale" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isSortAsParameter(parameters: PropertyParameters): parameters is SortAsParameter {
  return "sortAs" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isGeoParameter(parameters: PropertyParameters): parameters is GeoParameter {
  return "geo" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isTimezoneParameter(parameters: PropertyParameters): parameters is TimezoneParameter {
  return "tz" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isLabelParameter(parameters: PropertyParameters): parameters is LabelParameter {
  return "label" in parameters;
}

/**
 * @internal
 * @category Internally Used
 */
export function isIanaCharsetParameter(parameters: PropertyParameters): parameters is CharsetParameter {
  return "charset" in parameters;
}
