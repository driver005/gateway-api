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
export class QuotesResourceStatusTransitions {
    /**
    * The time that the quote was accepted. Measured in seconds since Unix epoch.
    */
    'acceptedAt': number | null;
    /**
    * The time that the quote was canceled. Measured in seconds since Unix epoch.
    */
    'canceledAt': number | null;
    /**
    * The time that the quote was finalized. Measured in seconds since Unix epoch.
    */
    'finalizedAt': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acceptedAt",
            "baseName": "accepted_at",
            "type": "number"
        },
        {
            "name": "canceledAt",
            "baseName": "canceled_at",
            "type": "number"
        },
        {
            "name": "finalizedAt",
            "baseName": "finalized_at",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return QuotesResourceStatusTransitions.attributeTypeMap;
    }
}

