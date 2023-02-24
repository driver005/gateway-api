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
import { SepaDebitGeneratedFromCharge } from './sepaDebitGeneratedFromCharge';
import { SepaDebitGeneratedFromSetupAttempt } from './sepaDebitGeneratedFromSetupAttempt';

/**
* 
*/
export class SepaDebitGeneratedFrom {
    'charge': SepaDebitGeneratedFromCharge | null;
    'setupAttempt': SepaDebitGeneratedFromSetupAttempt | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "charge",
            "baseName": "charge",
            "type": "SepaDebitGeneratedFromCharge"
        },
        {
            "name": "setupAttempt",
            "baseName": "setup_attempt",
            "type": "SepaDebitGeneratedFromSetupAttempt"
        }    ];

    static getAttributeTypeMap() {
        return SepaDebitGeneratedFrom.attributeTypeMap;
    }
}
