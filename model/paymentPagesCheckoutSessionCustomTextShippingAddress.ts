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
import { PaymentPagesCheckoutSessionCustomTextPosition } from './paymentPagesCheckoutSessionCustomTextPosition';

/**
* Custom text that should be displayed alongside shipping address collection.
*/
export class PaymentPagesCheckoutSessionCustomTextShippingAddress {
    /**
    * Text may be up to 1000 characters in length.
    */
    'message': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentPagesCheckoutSessionCustomTextShippingAddress.attributeTypeMap;
    }
}

