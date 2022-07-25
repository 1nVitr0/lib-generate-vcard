import { ignoreParameters, parameterNames } from "../model/parameterNames";
import { AnyParameter, NamedParameters } from "../model/parameters";
import { Property } from "../model/properties";
import { isPropertyObject } from "../validate/properties";
import { escapeParameterValue } from "./escape";

/**
 * @internal
 */
export function mergeParameters<Params extends {}>(commonParameters: Params | undefined, property: Property): Property {
  if (!commonParameters) return property;
  if (isPropertyObject(property)) {
    const { value, parameters = {} } = property;
    return { value, parameters: { ...commonParameters, ...parameters } };
  } else {
    return { value: property, parameters: commonParameters };
  }
}

export function generateParameters<Parameters extends NamedParameters | AnyParameter>(
  parameters: Parameters,
  ignore: string[] = []
): string[] {
  ignore.push(...ignoreParameters); // Global ignore parameters

  return Object.entries(parameters)
    .filter(([name, value]) => value !== null && ignore.includes(name) === false)
    .map(([name, value]) => {
      const parameterName = name in parameterNames ? parameterNames[name as keyof NamedParameters] : name;
      const valueList = value instanceof Array ? value : [value];
      const escapedValues = valueList.map((value) => escapeParameterValue(value));

      return `${parameterName}=${escapedValues.join(",")}`;
    });
}
