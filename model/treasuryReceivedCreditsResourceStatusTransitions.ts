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
export class TreasuryReceivedCreditsResourceStatusTransitions {
    /**
    * Timestamp describing when the CreditReversal changed status to `posted`
    */
    'postedAt': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "postedAt",
            "baseName": "posted_at",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryReceivedCreditsResourceStatusTransitions.attributeTypeMap;
    }
}

