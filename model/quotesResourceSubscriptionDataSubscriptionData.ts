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
export class QuotesResourceSubscriptionDataSubscriptionData {
    /**
    * The subscription\'s description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
    */
    'description': string | null;
    /**
    * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. This date is ignored if it is in the past when the quote is accepted. Measured in seconds since the Unix epoch.
    */
    'effectiveDate': number | null;
    /**
    * Integer representing the number of trial period days before the customer is charged for the first time.
    */
    'trialPeriodDays': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "effectiveDate",
            "baseName": "effective_date",
            "type": "number"
        },
        {
            "name": "trialPeriodDays",
            "baseName": "trial_period_days",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return QuotesResourceSubscriptionDataSubscriptionData.attributeTypeMap;
    }
}
