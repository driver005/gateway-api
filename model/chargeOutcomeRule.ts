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
import { Rule } from './rule';

/**
* The ID of the Radar rule that matched the payment, if applicable.
*/
export class ChargeOutcomeRule {
    /**
    * The action taken on the payment.
    */
    'action': string;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * The predicate to evaluate the payment against.
    */
    'predicate': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "predicate",
            "baseName": "predicate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChargeOutcomeRule.attributeTypeMap;
    }
}

