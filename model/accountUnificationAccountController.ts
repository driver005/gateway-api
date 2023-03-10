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
export class AccountUnificationAccountController {
    /**
    * `true` if the Connect application retrieving the resource controls the account and can therefore exercise [platform controls](https://stripe.com/docs/connect/platform-controls-for-standard-accounts). Otherwise, this field is null.
    */
    'isController'?: boolean;
    /**
    * The controller type. Can be `application`, if a Connect application controls the account, or `account`, if the account controls itself.
    */
    'type': AccountUnificationAccountController.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isController",
            "baseName": "is_controller",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AccountUnificationAccountController.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AccountUnificationAccountController.attributeTypeMap;
    }
}

export namespace AccountUnificationAccountController {
    export enum TypeEnum {
        Account = <any> 'account',
        Application = <any> 'application'
    }
}
