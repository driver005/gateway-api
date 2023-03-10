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
import { Payout } from './payout';
import { TreasuryCreditReversal } from './treasuryCreditReversal';
import { TreasuryOutboundPayment } from './treasuryOutboundPayment';
import { TreasuryReceivedCreditsResourceSourceFlowsDetails } from './treasuryReceivedCreditsResourceSourceFlowsDetails';

/**
* The expandable object of the source flow.
*/
export class TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails {
    'creditReversal'?: TreasuryCreditReversal;
    'outboundPayment'?: TreasuryOutboundPayment;
    'payout'?: Payout;
    /**
    * The type of the source flow that originated the ReceivedCredit.
    */
    'type': TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "creditReversal",
            "baseName": "credit_reversal",
            "type": "TreasuryCreditReversal"
        },
        {
            "name": "outboundPayment",
            "baseName": "outbound_payment",
            "type": "TreasuryOutboundPayment"
        },
        {
            "name": "payout",
            "baseName": "payout",
            "type": "Payout"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails.attributeTypeMap;
    }
}

export namespace TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails {
    export enum TypeEnum {
        CreditReversal = <any> 'credit_reversal',
        Other = <any> 'other',
        OutboundPayment = <any> 'outbound_payment',
        Payout = <any> 'payout'
    }
}
