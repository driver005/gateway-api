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
export class ShippingRateCurrencyOption {
    /**
    * A non-negative integer in cents representing how much to charge.
    */
    'amount': number;
    /**
    * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
    */
    'taxBehavior': ShippingRateCurrencyOption.TaxBehaviorEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "taxBehavior",
            "baseName": "tax_behavior",
            "type": "ShippingRateCurrencyOption.TaxBehaviorEnum"
        }    ];

    static getAttributeTypeMap() {
        return ShippingRateCurrencyOption.attributeTypeMap;
    }
}

export namespace ShippingRateCurrencyOption {
    export enum TaxBehaviorEnum {
        Exclusive = <any> 'exclusive',
        Inclusive = <any> 'inclusive',
        Unspecified = <any> 'unspecified'
    }
}
