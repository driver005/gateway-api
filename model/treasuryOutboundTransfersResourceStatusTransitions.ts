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
export class TreasuryOutboundTransfersResourceStatusTransitions {
    /**
    * Timestamp describing when an OutboundTransfer changed status to `canceled`
    */
    'canceledAt': number | null;
    /**
    * Timestamp describing when an OutboundTransfer changed status to `failed`
    */
    'failedAt': number | null;
    /**
    * Timestamp describing when an OutboundTransfer changed status to `posted`
    */
    'postedAt': number | null;
    /**
    * Timestamp describing when an OutboundTransfer changed status to `returned`
    */
    'returnedAt': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "canceledAt",
            "baseName": "canceled_at",
            "type": "number"
        },
        {
            "name": "failedAt",
            "baseName": "failed_at",
            "type": "number"
        },
        {
            "name": "postedAt",
            "baseName": "posted_at",
            "type": "number"
        },
        {
            "name": "returnedAt",
            "baseName": "returned_at",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryOutboundTransfersResourceStatusTransitions.attributeTypeMap;
    }
}

