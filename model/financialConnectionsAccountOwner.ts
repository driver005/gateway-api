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
export class FinancialConnectionsAccountOwner {
    /**
    * The email address of the owner.
    */
    'email': string | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * The full name of the owner.
    */
    'name': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': FinancialConnectionsAccountOwner.ObjectEnum;
    /**
    * The ownership object that this owner belongs to.
    */
    'ownership': string;
    /**
    * The raw phone number of the owner.
    */
    'phone': string | null;
    /**
    * The raw physical address of the owner.
    */
    'rawAddress': string | null;
    /**
    * The timestamp of the refresh that updated this owner.
    */
    'refreshedAt': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
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
            "type": "FinancialConnectionsAccountOwner.ObjectEnum"
        },
        {
            "name": "ownership",
            "baseName": "ownership",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "rawAddress",
            "baseName": "raw_address",
            "type": "string"
        },
        {
            "name": "refreshedAt",
            "baseName": "refreshed_at",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return FinancialConnectionsAccountOwner.attributeTypeMap;
    }
}

export namespace FinancialConnectionsAccountOwner {
    export enum ObjectEnum {
        FinancialConnectionsAccountOwner = <any> 'financial_connections.account_owner'
    }
}
