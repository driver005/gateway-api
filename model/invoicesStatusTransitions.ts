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
export class InvoicesStatusTransitions {
    /**
    * The time that the invoice draft was finalized.
    */
    'finalizedAt': number | null;
    /**
    * The time that the invoice was marked uncollectible.
    */
    'markedUncollectibleAt': number | null;
    /**
    * The time that the invoice was paid.
    */
    'paidAt': number | null;
    /**
    * The time that the invoice was voided.
    */
    'voidedAt': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "finalizedAt",
            "baseName": "finalized_at",
            "type": "number"
        },
        {
            "name": "markedUncollectibleAt",
            "baseName": "marked_uncollectible_at",
            "type": "number"
        },
        {
            "name": "paidAt",
            "baseName": "paid_at",
            "type": "number"
        },
        {
            "name": "voidedAt",
            "baseName": "voided_at",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InvoicesStatusTransitions.attributeTypeMap;
    }
}
