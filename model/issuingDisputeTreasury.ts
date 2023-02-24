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
export class IssuingDisputeTreasury {
    /**
    * The Treasury [DebitReversal](https://stripe.com/docs/api/treasury/debit_reversals) representing this Issuing dispute
    */
    'debitReversal': string | null;
    /**
    * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) that is being disputed.
    */
    'receivedDebit': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "debitReversal",
            "baseName": "debit_reversal",
            "type": "string"
        },
        {
            "name": "receivedDebit",
            "baseName": "received_debit",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IssuingDisputeTreasury.attributeTypeMap;
    }
}
