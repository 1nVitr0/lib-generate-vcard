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
) {
  return {
    value,
    parameters,
  };
}
