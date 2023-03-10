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
import { Application } from './application';

/**
* The value of [application](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation.
*/
export class SetupAttemptApplication {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * The name of the application.
    */
    'name': string | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': SetupAttemptApplication.ObjectEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "type": "SetupAttemptApplication.ObjectEnum"
        }    ];

    static getAttributeTypeMap() {
        return SetupAttemptApplication.attributeTypeMap;
    }
}

export namespace SetupAttemptApplication {
    export enum ObjectEnum {
        Application = <any> 'application'
    }
}
