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
export class LoginLink {
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': LoginLink.ObjectEnum;
    /**
    * The URL for the login link.
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "LoginLink.ObjectEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LoginLink.attributeTypeMap;
    }
}

export namespace LoginLink {
    export enum ObjectEnum {
        LoginLink = <any> 'login_link'
    }
}