import { Text } from "../model/datatypes";

/**
 * @internal
 * @category Internally Used
 */
export function escapeParameterValue(value: Text | string): string {
  return value.toString().replace("\\", "\\\\").replace(",", "\\,").replace(";", "\\;");
}

/**
 * @internal
 * @category Internally Used
 */
export function escapeValue(value: Text | string): string {
  return value.toString().replace("\\", "\\\\").replace(",", "\\,").replace(";", "\\;");
}
