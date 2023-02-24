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
export class TreasuryInboundTransfersResourceFailureDetails {
    /**
    * Reason for the failure.
    */
    'code': TreasuryInboundTransfersResourceFailureDetails.CodeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "TreasuryInboundTransfersResourceFailureDetails.CodeEnum"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryInboundTransfersResourceFailureDetails.attributeTypeMap;
    }
}

export namespace TreasuryInboundTransfersResourceFailureDetails {
    export enum CodeEnum {
        AccountClosed = <any> 'account_closed',
        AccountFrozen = <any> 'account_frozen',
        BankAccountRestricted = <any> 'bank_account_restricted',
        BankOwnershipChanged = <any> 'bank_ownership_changed',
        DebitNotAuthorized = <any> 'debit_not_authorized',
        IncorrectAccountHolderAddress = <any> 'incorrect_account_holder_address',
        IncorrectAccountHolderName = <any> 'incorrect_account_holder_name',
        IncorrectAccountHolderTaxId = <any> 'incorrect_account_holder_tax_id',
        InsufficientFunds = <any> 'insufficient_funds',
        InvalidAccountNumber = <any> 'invalid_account_number',
        InvalidCurrency = <any> 'invalid_currency',
        NoAccount = <any> 'no_account',
        Other = <any> 'other'
    }
}
