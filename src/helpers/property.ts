import { Property } from "../model/properties";

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
export function vCardProperty<Value extends string | number | Date, Parameters extends {}>(
  value: Value,
  parameters: Parameters
): { value: Value; parameters: Parameters };
export function vCardProperty<Value extends string | number | Date, Parameters extends {}>(
  value: Value
): { value: Value };
export function vCardProperty<Value extends string | number | Date, Parameters extends {}>(
  value: Value,
  parameters?: Parameters
): Property {
  return parameters ? { value, parameters } : { value };
}
