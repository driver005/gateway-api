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
import { TreasuryReceivedDebitsResourceDebitReversalLinkedFlows } from './treasuryReceivedDebitsResourceDebitReversalLinkedFlows';

/**
* Other flows linked to a DebitReversal.
*/
export class TreasuryDebitReversalLinkedFlows {
    /**
    * Set if there is an Issuing dispute associated with the DebitReversal.
    */
    'issuingDispute': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "issuingDispute",
            "baseName": "issuing_dispute",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryDebitReversalLinkedFlows.attributeTypeMap;
    }
}

