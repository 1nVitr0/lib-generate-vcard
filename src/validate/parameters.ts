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

export function isValueParameter(parameters: {}): parameters is ValueParameter<ValueType> {
  return "value" in parameters;
}

export function isLanguageParameter(parameters: {}): parameters is LanguageParameter {
  return "language" in parameters;
}

export function isPrefParameter(parameters: {}): parameters is PrefParameter {
  return "pref" in parameters;
}

export function isAltIdParameter(parameters: {}): parameters is AltIdParameter {
  return "altId" in parameters;
}

export function isPIdParameter(parameters: {}): parameters is PIdParameter {
  return "pId" in parameters;
}

export function isTypeParameter(parameters: {}): parameters is TypeParameter<string> {
  return "type" in parameters;
}

export function isMediaTypeParameter(parameters: {}): parameters is MediaTypeParameter {
  return "mediaType" in parameters;
}

export function isCalscaleParameter(parameters: {}): parameters is CalscaleParameter {
  return "calScale" in parameters;
}

export function isSortAsParameter(parameters: {}): parameters is SortAsParameter {
  return "sortAs" in parameters;
}

export function isGeoParameter(parameters: {}): parameters is GeoParameter {
  return "geo" in parameters;
}

export function isTimezoneParameter(parameters: {}): parameters is TimezoneParameter {
  return "tz" in parameters;
}

export function isLabelParameter(parameters: {}): parameters is LabelParameter {
  return "label" in parameters;
}

export function isIanaCharsetParameter(parameters: {}): parameters is IanaCharsetParameter {
  return "charset" in parameters;
}
