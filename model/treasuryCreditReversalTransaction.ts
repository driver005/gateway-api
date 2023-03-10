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
import { TreasuryTransaction } from './treasuryTransaction';
import { TreasuryTransactionFlowDetails } from './treasuryTransactionFlowDetails';
import { TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions } from './treasuryTransactionsResourceAbstractTransactionResourceStatusTransitions';
import { TreasuryTransactionsResourceBalanceImpact } from './treasuryTransactionsResourceBalanceImpact';
import { TreasuryTransactionsResourceTransactionEntryList1 } from './treasuryTransactionsResourceTransactionEntryList1';

/**
* The Transaction associated with this object.
*/
export class TreasuryCreditReversalTransaction {
    /**
    * Amount (in cents) transferred.
    */
    'amount': number;
    'balanceImpact': TreasuryTransactionsResourceBalanceImpact;
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
    'entries': TreasuryTransactionsResourceTransactionEntryList1 | null;
    /**
    * The FinancialAccount associated with this object.
    */
    'financialAccount': string;
    /**
    * ID of the flow that created the Transaction.
    */
    'flow': string | null;
    'flowDetails': TreasuryTransactionFlowDetails | null;
    /**
    * Type of the flow that created the Transaction.
    */
    'flowType': TreasuryCreditReversalTransaction.FlowTypeEnum;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': TreasuryCreditReversalTransaction.ObjectEnum;
    /**
    * Status of the Transaction.
    */
    'status': TreasuryCreditReversalTransaction.StatusEnum;
    'statusTransitions': TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "balanceImpact",
            "baseName": "balance_impact",
            "type": "TreasuryTransactionsResourceBalanceImpact"
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
            "name": "entries",
            "baseName": "entries",
            "type": "TreasuryTransactionsResourceTransactionEntryList1"
        },
        {
            "name": "financialAccount",
            "baseName": "financial_account",
            "type": "string"
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "string"
        },
        {
            "name": "flowDetails",
            "baseName": "flow_details",
            "type": "TreasuryTransactionFlowDetails"
        },
        {
            "name": "flowType",
            "baseName": "flow_type",
            "type": "TreasuryCreditReversalTransaction.FlowTypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "TreasuryCreditReversalTransaction.ObjectEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TreasuryCreditReversalTransaction.StatusEnum"
        },
        {
            "name": "statusTransitions",
            "baseName": "status_transitions",
            "type": "TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryCreditReversalTransaction.attributeTypeMap;
    }
}

export namespace TreasuryCreditReversalTransaction {
    export enum FlowTypeEnum {
        CreditReversal = <any> 'credit_reversal',
        DebitReversal = <any> 'debit_reversal',
        InboundTransfer = <any> 'inbound_transfer',
        IssuingAuthorization = <any> 'issuing_authorization',
        Other = <any> 'other',
        OutboundPayment = <any> 'outbound_payment',
        OutboundTransfer = <any> 'outbound_transfer',
        ReceivedCredit = <any> 'received_credit',
        ReceivedDebit = <any> 'received_debit'
    }
    export enum ObjectEnum {
        TreasuryTransaction = <any> 'treasury.transaction'
    }
    export enum StatusEnum {
        Open = <any> 'open',
        Posted = <any> 'posted',
        Void = <any> 'void'
    }
}
