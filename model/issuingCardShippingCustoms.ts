/**
 * Stripe API
 * The Stripe REST API. Please see https://stripe.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2022-11-15
 * Contact: dev-platform@stripe.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* 
*/
export class IssuingCardShippingCustoms {
    /**
    * A registration number used for customs in Europe. See https://www.gov.uk/eori and https://ec.europa.eu/taxation_customs/business/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en.
    */
    'eoriNumber': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eoriNumber",
            "baseName": "eori_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IssuingCardShippingCustoms.attributeTypeMap;
    }
}
