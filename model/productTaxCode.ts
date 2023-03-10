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
import { TaxCode } from './taxCode';

/**
* A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
*/
export class ProductTaxCode {
    /**
    * A detailed description of which types of products the tax code represents.
    */
    'description': string;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * A short name for the tax code.
    */
    'name': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': ProductTaxCode.ObjectEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "ProductTaxCode.ObjectEnum"
        }    ];

    static getAttributeTypeMap() {
        return ProductTaxCode.attributeTypeMap;
    }
}

export namespace ProductTaxCode {
    export enum ObjectEnum {
        TaxCode = <any> 'tax_code'
    }
}
