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
import { PaymentPagesCheckoutSessionCustomTextShippingAddress } from './paymentPagesCheckoutSessionCustomTextShippingAddress';
import { PaymentPagesCheckoutSessionCustomTextSubmit } from './paymentPagesCheckoutSessionCustomTextSubmit';

/**
* 
*/
export class PaymentPagesCheckoutSessionCustomText {
    'shippingAddress': PaymentPagesCheckoutSessionCustomTextShippingAddress | null;
    'submit': PaymentPagesCheckoutSessionCustomTextSubmit | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "PaymentPagesCheckoutSessionCustomTextShippingAddress"
        },
        {
            "name": "submit",
            "baseName": "submit",
            "type": "PaymentPagesCheckoutSessionCustomTextSubmit"
        }    ];

    static getAttributeTypeMap() {
        return PaymentPagesCheckoutSessionCustomText.attributeTypeMap;
    }
}

