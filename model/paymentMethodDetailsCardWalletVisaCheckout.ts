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
import { PaymentMethodCardWalletMasterpassBillingAddress } from './paymentMethodCardWalletMasterpassBillingAddress';
import { PaymentMethodCardWalletMasterpassShippingAddress } from './paymentMethodCardWalletMasterpassShippingAddress';

/**
* 
*/
export class PaymentMethodDetailsCardWalletVisaCheckout {
    'billingAddress': PaymentMethodCardWalletMasterpassBillingAddress | null;
    /**
    * Owner\'s verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
    */
    'email': string | null;
    /**
    * Owner\'s verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
    */
    'name': string | null;
    'shippingAddress': PaymentMethodCardWalletMasterpassShippingAddress | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAddress",
            "baseName": "billing_address",
            "type": "PaymentMethodCardWalletMasterpassBillingAddress"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "PaymentMethodCardWalletMasterpassShippingAddress"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsCardWalletVisaCheckout.attributeTypeMap;
    }
}

