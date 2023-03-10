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
export class SourceOrderItem {
    /**
    * The amount (price) for this order item.
    */
    'amount': number | null;
    /**
    * This currency of this order item. Required when `amount` is present.
    */
    'currency': string | null;
    /**
    * Human-readable description for this order item.
    */
    'description': string | null;
    /**
    * The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU).
    */
    'parent': string | null;
    /**
    * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
    */
    'quantity'?: number;
    /**
    * The type of this order item. Must be `sku`, `tax`, or `shipping`.
    */
    'type': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceOrderItem.attributeTypeMap;
    }
}

