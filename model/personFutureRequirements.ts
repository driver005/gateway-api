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
export class PersonFutureRequirements {
    /**
    * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
    */
    'alternatives': Array<AccountRequirementsAlternative> | null;
    /**
    * Fields that need to be collected to keep the person\'s account enabled. If not collected by the account\'s `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash, and may immediately become `past_due`, but the account may also be given a grace period depending on the account\'s enablement state prior to transition.
    */
    'currentlyDue': Array<string>;
    /**
    * Fields that are `currently_due` and need to be collected again because validation or verification failed.
    */
    'errors': Array<AccountRequirementsError>;
    /**
    * Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and the account\'s `future_requirements[current_deadline]` becomes set.
    */
    'eventuallyDue': Array<string>;
    /**
    * Fields that weren\'t collected by the account\'s `requirements.current_deadline`. These fields need to be collected to enable the person\'s account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`.
    */
    'pastDue': Array<string>;
    /**
    * Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`.
    */
    'pendingVerification': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alternatives",
            "baseName": "alternatives",
            "type": "Array<AccountRequirementsAlternative>"
        },
        {
            "name": "currentlyDue",
            "baseName": "currently_due",
            "type": "Array<string>"
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
        return PersonFutureRequirements.attributeTypeMap;
    }
}

