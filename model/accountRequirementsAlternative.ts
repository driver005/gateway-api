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
export class AccountRequirementsAlternative {
    /**
    * Fields that can be provided to satisfy all fields in `original_fields_due`.
    */
    'alternativeFieldsDue': Array<string>;
    /**
    * Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`.
    */
    'originalFieldsDue': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alternativeFieldsDue",
            "baseName": "alternative_fields_due",
            "type": "Array<string>"
        },
        {
            "name": "originalFieldsDue",
            "baseName": "original_fields_due",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AccountRequirementsAlternative.attributeTypeMap;
    }
}

