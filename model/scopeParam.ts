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

export class ScopeParam {
    /**
    * The secret scope type.
    */
    'type': ScopeParam.TypeEnum;
    /**
    * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
    */
    'user'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ScopeParam.TypeEnum"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ScopeParam.attributeTypeMap;
    }
}

export namespace ScopeParam {
    export enum TypeEnum {
        Account = <any> 'account',
        User = <any> 'user'
    }
}
