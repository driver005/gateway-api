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
import { SubscriptionScheduleCurrentPhase } from './subscriptionScheduleCurrentPhase';

/**
* Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`.
*/
export class SubscriptionScheduleCurrentPhase1 {
    /**
    * The end of this phase of the subscription schedule.
    */
    'endDate': number;
    /**
    * The start of this phase of the subscription schedule.
    */
    'startDate': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionScheduleCurrentPhase1.attributeTypeMap;
    }
}

