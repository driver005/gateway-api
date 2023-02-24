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
* [Tax codes](https://stripe.com/docs/tax/tax-categories) classify goods and services for tax purposes.
*/
export class TaxCode {
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
    'object': TaxCode.ObjectEnum;

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
            "type": "TaxCode.ObjectEnum"
        }    ];

    static getAttributeTypeMap() {
        return TaxCode.attributeTypeMap;
    }
}

export namespace TaxCode {
    export enum ObjectEnum {
        TaxCode = <any> 'tax_code'
    }
}
