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
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer } from './customerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer';

/**
* 
*/
export class CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer {
    'euBankTransfer'?: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer;
    /**
    * The user-supplied reference field on the bank transfer.
    */
    'reference': string | null;
    /**
    * The funding method type used to fund the customer balance. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
    */
    'type': CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "euBankTransfer",
            "baseName": "eu_bank_transfer",
            "type": "CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer.attributeTypeMap;
    }
}

export namespace CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer {
    export enum TypeEnum {
        EuBankTransfer = <any> 'eu_bank_transfer',
        GbBankTransfer = <any> 'gb_bank_transfer',
        JpBankTransfer = <any> 'jp_bank_transfer',
        MxBankTransfer = <any> 'mx_bank_transfer'
    }
}
