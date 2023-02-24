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
import { DeletedBankAccount } from './deletedBankAccount';
import { DeletedCard } from './deletedCard';

export class DeletedExternalAccount {
    /**
    * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
    */
    'currency'?: string | null;
    /**
    * Always true for a deleted object
    */
    'deleted': DeletedExternalAccount.DeletedEnum;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': DeletedExternalAccount.ObjectEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "DeletedExternalAccount.DeletedEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "DeletedExternalAccount.ObjectEnum"
        }    ];

    static getAttributeTypeMap() {
        return DeletedExternalAccount.attributeTypeMap;
    }
}

export namespace DeletedExternalAccount {
    export enum DeletedEnum {
        True = <any> true
    }
    export enum ObjectEnum {
        Card = <any> 'card'
    }
}
