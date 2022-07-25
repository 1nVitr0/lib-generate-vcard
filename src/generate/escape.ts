import { Text } from "../model/datatypes";

/**
 * @internal
 */
export function escapeParameterValue(value: Text | string): string {
  return value.toString().replace("\\", "\\\\").replace(",", "\\,").replace(";", "\\;");
}

/**
 * @internal
 */
export function escapeValue(value: Text | string): string {
  return value.toString().replace("\\", "\\\\").replace(",", "\\,").replace(";", "\\;");
}
