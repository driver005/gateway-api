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
export class TreasuryReceivedDebitsResourceLinkedFlows {
    /**
    * The DebitReversal created as a result of this ReceivedDebit being reversed.
    */
    'debitReversal': string | null;
    /**
    * Set if the ReceivedDebit is associated with an InboundTransfer\'s return of funds.
    */
    'inboundTransfer': string | null;
    /**
    * Set if the ReceivedDebit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
    */
    'issuingAuthorization': string | null;
    /**
    * Set if the ReceivedDebit is also viewable as an [Issuing Dispute](https://stripe.com/docs/api#issuing_disputes) object.
    */
    'issuingTransaction': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "debitReversal",
            "baseName": "debit_reversal",
            "type": "string"
        },
        {
            "name": "inboundTransfer",
            "baseName": "inbound_transfer",
            "type": "string"
        },
        {
            "name": "issuingAuthorization",
            "baseName": "issuing_authorization",
            "type": "string"
        },
        {
            "name": "issuingTransaction",
            "baseName": "issuing_transaction",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryReceivedDebitsResourceLinkedFlows.attributeTypeMap;
    }
}
