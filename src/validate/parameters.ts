import {
  AltIdParameter,
  CalscaleParameter,
  GeoParameter,
  IanaCharsetParameter,
  LabelParameter,
  LanguageParameter,
  MediaTypeParameter,
  PIdParameter,
  PrefParameter,
  SortAsParameter,
  TimezoneParameter,
  TypeParameter,
  ValueParameter,
  ValueType,
} from "../model/parameters";

/**
 * @internal
 */
export function isValueParameter(parameters: {}): parameters is ValueParameter<ValueType> {
  return "value" in parameters;
}

/**
 * @internal
 */
export function isLanguageParameter(parameters: {}): parameters is LanguageParameter {
  return "language" in parameters;
}

/**
 * @internal
 */
export function isPrefParameter(parameters: {}): parameters is PrefParameter {
  return "pref" in parameters;
}

/**
 * @internal
 */
export function isAltIdParameter(parameters: {}): parameters is AltIdParameter {
  return "altId" in parameters;
}

/**
 * @internal
 */
export function isPIdParameter(parameters: {}): parameters is PIdParameter {
  return "pId" in parameters;
}

/**
 * @internal
 */
export function isTypeParameter(parameters: {}): parameters is TypeParameter<string> {
  return "type" in parameters;
}

/**
 * @internal
 */
export function isMediaTypeParameter(parameters: {}): parameters is MediaTypeParameter {
  return "mediaType" in parameters;
}

/**
 * @internal
 */
export function isCalscaleParameter(parameters: {}): parameters is CalscaleParameter {
  return "calScale" in parameters;
}

/**
 * @internal
 */
export function isSortAsParameter(parameters: {}): parameters is SortAsParameter {
  return "sortAs" in parameters;
}

/**
 * @internal
 */
export function isGeoParameter(parameters: {}): parameters is GeoParameter {
  return "geo" in parameters;
}

/**
 * @internal
 */
export function isTimezoneParameter(parameters: {}): parameters is TimezoneParameter {
  return "tz" in parameters;
}

/**
 * @internal
 */
export function isLabelParameter(parameters: {}): parameters is LabelParameter {
  return "label" in parameters;
}

/**
 * @internal
 */
export function isIanaCharsetParameter(parameters: {}): parameters is IanaCharsetParameter {
  return "charset" in parameters;
}
