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
import { Networks } from './networks';

/**
* Contains information about card networks that can be used to process the payment.
*/
export class PaymentMethodCardNetworks {
    /**
    * All available networks for the card.
    */
    'available': Array<string>;
    /**
    * The preferred network for the card.
    */
    'preferred': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "Array<string>"
        },
        {
            "name": "preferred",
            "baseName": "preferred",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodCardNetworks.attributeTypeMap;
    }
}
