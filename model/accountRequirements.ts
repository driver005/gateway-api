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
import { AccountRequirementsAlternative } from './accountRequirementsAlternative';
import { AccountRequirementsError } from './accountRequirementsError';

/**
* 
*/
export class AccountRequirements {
    /**
    * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
    */
    'alternatives': Array<AccountRequirementsAlternative> | null;
    /**
    * Date by which the fields in `currently_due` must be collected to keep the account enabled. These fields may disable the account sooner if the next threshold is reached before they are collected.
    */
    'currentDeadline': number | null;
    /**
    * Fields that need to be collected to keep the account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
    */
    'currentlyDue': Array<string> | null;
    /**
    * If the account is disabled, this string describes why. Can be `requirements.past_due`, `requirements.pending_verification`, `listed`, `platform_paused`, `rejected.fraud`, `rejected.listed`, `rejected.terms_of_service`, `rejected.other`, `under_review`, or `other`.
    */
    'disabledReason': string | null;
    /**
    * Fields that are `currently_due` and need to be collected again because validation or verification failed.
    */
    'errors': Array<AccountRequirementsError> | null;
    /**
    * Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set.
    */
    'eventuallyDue': Array<string> | null;
    /**
    * Fields that weren\'t collected by `current_deadline`. These fields need to be collected to enable the account.
    */
    'pastDue': Array<string> | null;
    /**
    * Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`.
    */
    'pendingVerification': Array<string> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alternatives",
            "baseName": "alternatives",
            "type": "Array<AccountRequirementsAlternative>"
        },
        {
            "name": "currentDeadline",
            "baseName": "current_deadline",
            "type": "number"
        },
        {
            "name": "currentlyDue",
            "baseName": "currently_due",
            "type": "Array<string>"
        },
        {
            "name": "disabledReason",
            "baseName": "disabled_reason",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<AccountRequirementsError>"
        },
        {
            "name": "eventuallyDue",
            "baseName": "eventually_due",
            "type": "Array<string>"
        },
        {
            "name": "pastDue",
            "baseName": "past_due",
            "type": "Array<string>"
        },
        {
            "name": "pendingVerification",
            "baseName": "pending_verification",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AccountRequirements.attributeTypeMap;
    }
}

