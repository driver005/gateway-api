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
import { TreasuryReceivedCreditReversalDetails } from './treasuryReceivedCreditReversalDetails';
import { TreasuryReceivedCreditsResourceLinkedFlows } from './treasuryReceivedCreditsResourceLinkedFlows';
import { TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails } from './treasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails';

/**
* ReceivedCredits represent funds sent to a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for example, via ACH or wire). These money movements are not initiated from the FinancialAccount.
*/
export class TreasuryReceivedCredit {
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
    * Reason for the failure. A ReceivedCredit might fail because the receiving FinancialAccount is closed or frozen.
    */
    'failureCode': TreasuryReceivedCredit.FailureCodeEnum;
    /**
    * The FinancialAccount that received the funds.
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
    'initiatingPaymentMethodDetails': TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails;
    'linkedFlows': TreasuryReceivedCreditsResourceLinkedFlows;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * The rails used to send the funds.
    */
    'network': TreasuryReceivedCredit.NetworkEnum;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': TreasuryReceivedCredit.ObjectEnum;
    'reversalDetails': TreasuryReceivedCreditReversalDetails | null;
    /**
    * Status of the ReceivedCredit. ReceivedCredits are created either `succeeded` (approved) or `failed` (declined). If a ReceivedCredit is declined, the failure reason can be found in the `failure_code` field.
    */
    'status': TreasuryReceivedCredit.StatusEnum;
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
            "type": "TreasuryReceivedCredit.FailureCodeEnum"
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
            "type": "TreasuryReceivedCreditsResourceLinkedFlows"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "TreasuryReceivedCredit.NetworkEnum"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "TreasuryReceivedCredit.ObjectEnum"
        },
        {
            "name": "reversalDetails",
            "baseName": "reversal_details",
            "type": "TreasuryReceivedCreditReversalDetails"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TreasuryReceivedCredit.StatusEnum"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "TreasuryCreditReversalTransaction"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryReceivedCredit.attributeTypeMap;
    }
}

export namespace TreasuryReceivedCredit {
    export enum FailureCodeEnum {
        AccountClosed = <any> 'account_closed',
        AccountFrozen = <any> 'account_frozen',
        Other = <any> 'other'
    }
    export enum NetworkEnum {
        Ach = <any> 'ach',
        Card = <any> 'card',
        Stripe = <any> 'stripe',
        UsDomesticWire = <any> 'us_domestic_wire'
    }
    export enum ObjectEnum {
        TreasuryReceivedCredit = <any> 'treasury.received_credit'
    }
    export enum StatusEnum {
        Failed = <any> 'failed',
        Succeeded = <any> 'succeeded'
    }
}
