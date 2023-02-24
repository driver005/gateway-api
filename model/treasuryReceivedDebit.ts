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
import { TreasuryCreditReversalTransaction } from './treasuryCreditReversalTransaction';
import { TreasuryReceivedDebitReversalDetails } from './treasuryReceivedDebitReversalDetails';
import { TreasuryReceivedDebitsResourceLinkedFlows } from './treasuryReceivedDebitsResourceLinkedFlows';
import { TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails } from './treasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails';

/**
* ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
*/
export class TreasuryReceivedDebit {
    /**
    * Amount (in cents) transferred.
    */
    'amount': number;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description': string;
    /**
    * Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn\'t have sufficient funds, is closed, or is frozen.
    */
    'failureCode': TreasuryReceivedDebit.FailureCodeEnum;
    /**
    * The FinancialAccount that funds were pulled from.
    */
    'financialAccount': string | null;
    /**
    * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe\'s money transmission licenses.
    */
    'hostedRegulatoryReceiptUrl': string | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'initiatingPaymentMethodDetails'?: TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails;
    'linkedFlows': TreasuryReceivedDebitsResourceLinkedFlows;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * The network used for the ReceivedDebit.
    */
    'network': TreasuryReceivedDebit.NetworkEnum;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': TreasuryReceivedDebit.ObjectEnum;
    'reversalDetails': TreasuryReceivedDebitReversalDetails | null;
    /**
    * Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`.
    */
    'status': TreasuryReceivedDebit.StatusEnum;
    'transaction': TreasuryCreditReversalTransaction | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "failureCode",
            "baseName": "failure_code",
            "type": "TreasuryReceivedDebit.FailureCodeEnum"
        },
        {
            "name": "financialAccount",
            "baseName": "financial_account",
            "type": "string"
        },
        {
            "name": "hostedRegulatoryReceiptUrl",
            "baseName": "hosted_regulatory_receipt_url",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "initiatingPaymentMethodDetails",
            "baseName": "initiating_payment_method_details",
            "type": "TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails"
        },
        {
            "name": "linkedFlows",
            "baseName": "linked_flows",
            "type": "TreasuryReceivedDebitsResourceLinkedFlows"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "TreasuryReceivedDebit.NetworkEnum"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "TreasuryReceivedDebit.ObjectEnum"
        },
        {
            "name": "reversalDetails",
            "baseName": "reversal_details",
            "type": "TreasuryReceivedDebitReversalDetails"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TreasuryReceivedDebit.StatusEnum"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "TreasuryCreditReversalTransaction"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryReceivedDebit.attributeTypeMap;
    }
}

export namespace TreasuryReceivedDebit {
    export enum FailureCodeEnum {
        AccountClosed = <any> 'account_closed',
        AccountFrozen = <any> 'account_frozen',
        InsufficientFunds = <any> 'insufficient_funds',
        Other = <any> 'other'
    }
    export enum NetworkEnum {
        Ach = <any> 'ach',
        Card = <any> 'card',
        Stripe = <any> 'stripe'
    }
    export enum ObjectEnum {
        TreasuryReceivedDebit = <any> 'treasury.received_debit'
    }
    export enum StatusEnum {
        Failed = <any> 'failed',
        Succeeded = <any> 'succeeded'
    }
}
