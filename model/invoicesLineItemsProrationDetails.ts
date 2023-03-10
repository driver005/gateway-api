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
import { InvoicesLineItemsProrationDetailsCreditedItems } from './invoicesLineItemsProrationDetailsCreditedItems';

/**
* 
*/
export class InvoicesLineItemsProrationDetails {
    'creditedItems': InvoicesLineItemsProrationDetailsCreditedItems | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "creditedItems",
            "baseName": "credited_items",
            "type": "InvoicesLineItemsProrationDetailsCreditedItems"
        }    ];

    static getAttributeTypeMap() {
        return InvoicesLineItemsProrationDetails.attributeTypeMap;
    }
}

