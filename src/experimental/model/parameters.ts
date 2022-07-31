import { PropertyParameters } from "../../model/parameters";

/**
 * Parameter for IMPP Service Types
 *
 * @category Parameters
 * @see https://tools.ietf.org/id/draft-george-vcarddav-vcard-extension-02.html
 * @experimental
 */
export interface ServiceTypeParameter extends PropertyParameters {
  serviceType?: string;
}
