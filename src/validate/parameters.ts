import { ValueType } from "../model/datatypes";
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
} from "../model/parameters";

export function isValueParameter(params: {}): params is ValueParameter<ValueType> {
  return "value" in params;
}

export function isLanguageParameter(params: {}): params is LanguageParameter {
  return "language" in params;
}

export function isPrefParameter(params: {}): params is PrefParameter {
  return "language" in params;
}

export function isAltIdParameter(params: {}): params is AltIdParameter {
  return "altId" in params;
}

export function isPIdParameter(params: {}): params is PIdParameter {
  return "pId" in params;
}

export function isTypeParameter(params: {}): params is TypeParameter<string> {
  return "type" in params;
}

export function isMediaTypeParameter(params: {}): params is MediaTypeParameter {
  return "mediaType" in params;
}

export function isCalscaleParameter(params: {}): params is CalscaleParameter {
  return "calScale" in params;
}

export function isSortAsParameter(params: {}): params is SortAsParameter {
  return "sortAs" in params;
}

export function isGeoParameter(params: {}): params is GeoParameter {
  return "geo" in params;
}

export function isTimezoneParameter(params: {}): params is TimezoneParameter {
  return "tz" in params;
}

export function isLabelParameter(params: {}): params is LabelParameter {
  return "label" in params;
}

export function isIanaCharsetParameter(params: {}): params is IanaCharsetParameter {
  return "charset" in params;
}
