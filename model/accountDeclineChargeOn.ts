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
export class AccountDeclineChargeOn {
    /**
    * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
    */
    'avsFailure': boolean;
    /**
    * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
    */
    'cvcFailure': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "avsFailure",
            "baseName": "avs_failure",
            "type": "boolean"
        },
        {
            "name": "cvcFailure",
            "baseName": "cvc_failure",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AccountDeclineChargeOn.attributeTypeMap;
    }
}
