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
import { ReceivedPaymentMethodDetailsFinancialAccount } from './receivedPaymentMethodDetailsFinancialAccount';
import { TreasurySharedResourceBillingDetails } from './treasurySharedResourceBillingDetails';
import { TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount } from './treasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount';

/**
* 
*/
export class TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails {
    /**
    * Set when `type` is `balance`.
    */
    'balance'?: TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.BalanceEnum;
    'billingDetails': TreasurySharedResourceBillingDetails;
    'financialAccount'?: ReceivedPaymentMethodDetailsFinancialAccount;
    /**
    * Set when `type` is `issuing_card`. This is an [Issuing Card](https://stripe.com/docs/api#issuing_cards) ID.
    */
    'issuingCard'?: string;
    /**
    * Polymorphic type matching the originating money movement\'s source. This can be an external account, a Stripe balance, or a FinancialAccount.
    */
    'type': TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.TypeEnum;
    'usBankAccount'?: TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balance",
            "baseName": "balance",
            "type": "TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.BalanceEnum"
        },
        {
            "name": "billingDetails",
            "baseName": "billing_details",
            "type": "TreasurySharedResourceBillingDetails"
        },
        {
            "name": "financialAccount",
            "baseName": "financial_account",
            "type": "ReceivedPaymentMethodDetailsFinancialAccount"
        },
        {
            "name": "issuingCard",
            "baseName": "issuing_card",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.TypeEnum"
        },
        {
            "name": "usBankAccount",
            "baseName": "us_bank_account",
            "type": "TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount"
        }    ];

    static getAttributeTypeMap() {
        return TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.attributeTypeMap;
    }
}

export namespace TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails {
    export enum BalanceEnum {
        Payments = <any> 'payments'
    }
    export enum TypeEnum {
        Balance = <any> 'balance',
        FinancialAccount = <any> 'financial_account',
        IssuingCard = <any> 'issuing_card',
        Stripe = <any> 'stripe',
        UsBankAccount = <any> 'us_bank_account'
    }
}