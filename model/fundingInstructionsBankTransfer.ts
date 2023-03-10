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
import { FundingInstructionsBankTransferFinancialAddress } from './fundingInstructionsBankTransferFinancialAddress';

/**
* 
*/
export class FundingInstructionsBankTransfer {
    /**
    * The country of the bank account to fund
    */
    'country': string;
    /**
    * A list of financial addresses that can be used to fund a particular balance
    */
    'financialAddresses': Array<FundingInstructionsBankTransferFinancialAddress>;
    /**
    * The bank_transfer type
    */
    'type': FundingInstructionsBankTransfer.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "financialAddresses",
            "baseName": "financial_addresses",
            "type": "Array<FundingInstructionsBankTransferFinancialAddress>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "FundingInstructionsBankTransfer.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return FundingInstructionsBankTransfer.attributeTypeMap;
    }
}

export namespace FundingInstructionsBankTransfer {
    export enum TypeEnum {
        EuBankTransfer = <any> 'eu_bank_transfer',
        JpBankTransfer = <any> 'jp_bank_transfer'
    }
}
