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
export class DeletedPlan {
    /**
    * Always true for a deleted object
    */
    'deleted': DeletedPlan.DeletedEnum;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': DeletedPlan.ObjectEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "DeletedPlan.DeletedEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "DeletedPlan.ObjectEnum"
        }    ];

    static getAttributeTypeMap() {
        return DeletedPlan.attributeTypeMap;
    }
}

export namespace DeletedPlan {
    export enum DeletedEnum {
        True = <any> true
    }
    export enum ObjectEnum {
        Plan = <any> 'plan'
    }
}
