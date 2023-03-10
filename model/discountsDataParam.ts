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

export class DiscountsDataParam {
    /**
    * ID of the coupon to create a new discount for.
    */
    'coupon'?: string;
    /**
    * ID of an existing discount on the object (or one of its ancestors) to reuse.
    */
    'discount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "coupon",
            "baseName": "coupon",
            "type": "string"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DiscountsDataParam.attributeTypeMap;
    }
}

