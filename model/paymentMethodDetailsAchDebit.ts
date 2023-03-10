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
export class PaymentMethodDetailsAchDebit {
    /**
    * Type of entity that holds the account. This can be either `individual` or `company`.
    */
    'accountHolderType': PaymentMethodDetailsAchDebit.AccountHolderTypeEnum;
    /**
    * Name of the bank associated with the bank account.
    */
    'bankName': string | null;
    /**
    * Two-letter ISO code representing the country the bank account is located in.
    */
    'country': string | null;
    /**
    * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
    */
    'fingerprint': string | null;
    /**
    * Last four digits of the bank account number.
    */
    'last4': string | null;
    /**
    * Routing transit number of the bank account.
    */
    'routingNumber': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderType",
            "baseName": "account_holder_type",
            "type": "PaymentMethodDetailsAchDebit.AccountHolderTypeEnum"
        },
        {
            "name": "bankName",
            "baseName": "bank_name",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "routingNumber",
            "baseName": "routing_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsAchDebit.attributeTypeMap;
    }
}

export namespace PaymentMethodDetailsAchDebit {
    export enum AccountHolderTypeEnum {
        Company = <any> 'company',
        Individual = <any> 'individual'
    }
}
