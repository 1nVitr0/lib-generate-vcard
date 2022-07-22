import { Text } from "../model/datatypes";

export function escapeParameterValue(value: Text | string): string {
  return value.toString().replace("\\", "\\\\").replace(",", "\\,").replace(";", "\\;");
}

export function escapeValue(value: Text | string): string {
  return value.toString().replace("\\", "\\\\").replace(",", "\\,").replace(";", "\\;");
}
