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
import { TreasuryReceivedCreditsResourceReversalDetails } from './treasuryReceivedCreditsResourceReversalDetails';

/**
* Details describing when a ReceivedCredit may be reversed.
*/
export class TreasuryReceivedCreditReversalDetails {
    /**
    * Time before which a ReceivedCredit can be reversed.
    */
    'deadline': number | null;
    /**
    * Set if a ReceivedCredit cannot be reversed.
    */
    'restrictedReason': TreasuryReceivedCreditReversalDetails.RestrictedReasonEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deadline",
            "baseName": "deadline",
            "type": "number"
        },
        {
            "name": "restrictedReason",
            "baseName": "restricted_reason",
            "type": "TreasuryReceivedCreditReversalDetails.RestrictedReasonEnum"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryReceivedCreditReversalDetails.attributeTypeMap;
    }
}

export namespace TreasuryReceivedCreditReversalDetails {
    export enum RestrictedReasonEnum {
        AlreadyReversed = <any> 'already_reversed',
        DeadlinePassed = <any> 'deadline_passed',
        NetworkRestricted = <any> 'network_restricted',
        Other = <any> 'other',
        SourceFlowRestricted = <any> 'source_flow_restricted'
    }
}
