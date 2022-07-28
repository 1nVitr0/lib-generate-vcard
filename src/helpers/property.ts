import { PropertyParameters } from "../model/parameters";
import { Property } from "../model/properties";
import { PropertyValue } from "../model/propertyValues";

/**
 * Simplified Property declaration by providing a value and optional parameters.
 *
 * @category Generate
 * @param value property value
 * @param parameters parameter dictionary
 * @returns property declaration
 * @example
 * ```ts
 * vCardProperty("Boston", { language: "en-us" });
 * ```
 */
export function vCardProperty<Value extends PropertyValue, Parameters extends PropertyParameters>(
  value: Value,
  parameters: Parameters
): { value: Value; parameters: Parameters };
export function vCardProperty<Value extends PropertyValue, Parameters extends PropertyParameters>(
  value: Value
): { value: Value };
export function vCardProperty<Value extends PropertyValue, Parameters extends PropertyParameters>(
  value: Value,
  parameters?: Parameters
): Property {
  return parameters ? { value, parameters } : { value };
}
