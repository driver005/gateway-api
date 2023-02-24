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
import { TreasuryOutboundPaymentTransaction } from './treasuryOutboundPaymentTransaction';
import { TreasuryOutboundTransfersResourceReturnedDetails } from './treasuryOutboundTransfersResourceReturnedDetails';

/**
* Details about a returned OutboundTransfer. Only set when the status is `returned`.
*/
export class TreasuryOutboundTransferReturnedDetails {
    /**
    * Reason for the return.
    */
    'code': TreasuryOutboundTransferReturnedDetails.CodeEnum;
    'transaction': TreasuryOutboundPaymentTransaction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "TreasuryOutboundTransferReturnedDetails.CodeEnum"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "TreasuryOutboundPaymentTransaction"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryOutboundTransferReturnedDetails.attributeTypeMap;
    }
}

export namespace TreasuryOutboundTransferReturnedDetails {
    export enum CodeEnum {
        AccountClosed = <any> 'account_closed',
        AccountFrozen = <any> 'account_frozen',
        BankAccountRestricted = <any> 'bank_account_restricted',
        BankOwnershipChanged = <any> 'bank_ownership_changed',
        Declined = <any> 'declined',
        IncorrectAccountHolderName = <any> 'incorrect_account_holder_name',
        InvalidAccountNumber = <any> 'invalid_account_number',
        InvalidCurrency = <any> 'invalid_currency',
        NoAccount = <any> 'no_account',
        Other = <any> 'other'
    }
}
