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
import { InvoicesShippingCostShippingRate } from './invoicesShippingCostShippingRate';
import { LineItemsTaxAmount } from './lineItemsTaxAmount';

/**
* 
*/
export class InvoicesShippingCost {
    /**
    * Total shipping cost before any taxes are applied.
    */
    'amountSubtotal': number;
    /**
    * Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0.
    */
    'amountTax': number;
    /**
    * Total shipping cost after taxes are applied.
    */
    'amountTotal': number;
    'shippingRate': InvoicesShippingCostShippingRate | null;
    /**
    * The taxes applied to the shipping rate.
    */
    'taxes'?: Array<LineItemsTaxAmount>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountSubtotal",
            "baseName": "amount_subtotal",
            "type": "number"
        },
        {
            "name": "amountTax",
            "baseName": "amount_tax",
            "type": "number"
        },
        {
            "name": "amountTotal",
            "baseName": "amount_total",
            "type": "number"
        },
        {
            "name": "shippingRate",
            "baseName": "shipping_rate",
            "type": "InvoicesShippingCostShippingRate"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<LineItemsTaxAmount>"
        }    ];

    static getAttributeTypeMap() {
        return InvoicesShippingCost.attributeTypeMap;
    }
}

