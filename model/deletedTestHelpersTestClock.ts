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
export class DeletedTestHelpersTestClock {
    /**
    * Always true for a deleted object
    */
    'deleted': DeletedTestHelpersTestClock.DeletedEnum;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': DeletedTestHelpersTestClock.ObjectEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "DeletedTestHelpersTestClock.DeletedEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "DeletedTestHelpersTestClock.ObjectEnum"
        }    ];

    static getAttributeTypeMap() {
        return DeletedTestHelpersTestClock.attributeTypeMap;
    }
}

export namespace DeletedTestHelpersTestClock {
    export enum DeletedEnum {
        True = <any> true
    }
    export enum ObjectEnum {
        TestHelpersTestClock = <any> 'test_helpers.test_clock'
    }
}
