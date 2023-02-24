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
import { BankConnectionsResourceAccountholder } from './bankConnectionsResourceAccountholder';
import { BankConnectionsResourceAccountholderAccount } from './bankConnectionsResourceAccountholderAccount';
import { BankConnectionsResourceAccountholderCustomer } from './bankConnectionsResourceAccountholderCustomer';

/**
* The account holder for whom accounts are collected in this session.
*/
export class FinancialConnectionsSessionAccountHolder {
    'account'?: BankConnectionsResourceAccountholderAccount;
    'customer'?: BankConnectionsResourceAccountholderCustomer;
    /**
    * Type of account holder that this account belongs to.
    */
    'type': FinancialConnectionsSessionAccountHolder.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "BankConnectionsResourceAccountholderAccount"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "BankConnectionsResourceAccountholderCustomer"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "FinancialConnectionsSessionAccountHolder.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return FinancialConnectionsSessionAccountHolder.attributeTypeMap;
    }
}

export namespace FinancialConnectionsSessionAccountHolder {
    export enum TypeEnum {
        Account = <any> 'account',
        Customer = <any> 'customer'
    }
}