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
export class DeletedCustomer {
    /**
    * Always true for a deleted object
    */
    'deleted': DeletedCustomer.DeletedEnum;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': DeletedCustomer.ObjectEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "DeletedCustomer.DeletedEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "DeletedCustomer.ObjectEnum"
        }    ];

    static getAttributeTypeMap() {
        return DeletedCustomer.attributeTypeMap;
    }
}

export namespace DeletedCustomer {
    export enum DeletedEnum {
        True = <any> true
    }
    export enum ObjectEnum {
        Customer = <any> 'customer'
    }
}
