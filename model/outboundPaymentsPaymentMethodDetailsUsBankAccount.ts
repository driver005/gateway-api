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
export class OutboundPaymentsPaymentMethodDetailsUsBankAccount {
    /**
    * Account holder type: individual or company.
    */
    'accountHolderType': OutboundPaymentsPaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum;
    /**
    * Account type: checkings or savings. Defaults to checking if omitted.
    */
    'accountType': OutboundPaymentsPaymentMethodDetailsUsBankAccount.AccountTypeEnum;
    /**
    * Name of the bank associated with the bank account.
    */
    'bankName': string | null;
    /**
    * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
    */
    'fingerprint': string | null;
    /**
    * Last four digits of the bank account number.
    */
    'last4': string | null;
    /**
    * The US bank account network used to send funds.
    */
    'network': OutboundPaymentsPaymentMethodDetailsUsBankAccount.NetworkEnum;
    /**
    * Routing number of the bank account.
    */
    'routingNumber': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderType",
            "baseName": "account_holder_type",
            "type": "OutboundPaymentsPaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum"
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "OutboundPaymentsPaymentMethodDetailsUsBankAccount.AccountTypeEnum"
        },
        {
            "name": "bankName",
            "baseName": "bank_name",
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
            "name": "network",
            "baseName": "network",
            "type": "OutboundPaymentsPaymentMethodDetailsUsBankAccount.NetworkEnum"
        },
        {
            "name": "routingNumber",
            "baseName": "routing_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OutboundPaymentsPaymentMethodDetailsUsBankAccount.attributeTypeMap;
    }
}

export namespace OutboundPaymentsPaymentMethodDetailsUsBankAccount {
    export enum AccountHolderTypeEnum {
        Company = <any> 'company',
        Individual = <any> 'individual'
    }
    export enum AccountTypeEnum {
        Checking = <any> 'checking',
        Savings = <any> 'savings'
    }
    export enum NetworkEnum {
        Ach = <any> 'ach',
        UsDomesticWire = <any> 'us_domestic_wire'
    }
}
