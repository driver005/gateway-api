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
export class IssuingAuthorizationTreasury {
    /**
    * The array of [ReceivedCredits](https://stripe.com/docs/api/treasury/received_credits) associated with this authorization
    */
    'receivedCredits': Array<string>;
    /**
    * The array of [ReceivedDebits](https://stripe.com/docs/api/treasury/received_debits) associated with this authorization
    */
    'receivedDebits': Array<string>;
    /**
    * The Treasury [Transaction](https://stripe.com/docs/api/treasury/transactions) associated with this authorization
    */
    'transaction': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "receivedCredits",
            "baseName": "received_credits",
            "type": "Array<string>"
        },
        {
            "name": "receivedDebits",
            "baseName": "received_debits",
            "type": "Array<string>"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IssuingAuthorizationTreasury.attributeTypeMap;
    }
}

