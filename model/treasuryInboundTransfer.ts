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
import { TreasuryInboundTransferFailureDetails } from './treasuryInboundTransferFailureDetails';
import { TreasuryInboundTransferOriginPaymentMethodDetails } from './treasuryInboundTransferOriginPaymentMethodDetails';
import { TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows } from './treasuryInboundTransfersResourceInboundTransferResourceLinkedFlows';
import { TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions } from './treasuryInboundTransfersResourceInboundTransferResourceStatusTransitions';

/**
* Use [InboundTransfers](https://stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers) to add funds to your [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a PaymentMethod that is owned by you. The funds will be transferred via an ACH debit.
*/
export class TreasuryInboundTransfer {
    /**
    * Amount (in cents) transferred.
    */
    'amount': number;
    /**
    * Returns `true` if the InboundTransfer is able to be canceled.
    */
    'cancelable': boolean;
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
    'description': string | null;
    'failureDetails': TreasuryInboundTransferFailureDetails | null;
    /**
    * The FinancialAccount that received the funds.
    */
    'financialAccount': string;
    /**
    * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe\'s money transmission licenses.
    */
    'hostedRegulatoryReceiptUrl': string | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'linkedFlows': TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': TreasuryInboundTransfer.ObjectEnum;
    /**
    * The origin payment method to be debited for an InboundTransfer.
    */
    'originPaymentMethod': string;
    'originPaymentMethodDetails': TreasuryInboundTransferOriginPaymentMethodDetails | null;
    /**
    * Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state.
    */
    'returned': boolean | null;
    /**
    * Statement descriptor shown when funds are debited from the source. Not all payment networks support `statement_descriptor`.
    */
    'statementDescriptor': string;
    /**
    * Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. An InboundTransfer is `processing` if it is created and pending. The status changes to `succeeded` once the funds have been \"confirmed\" and a `transaction` is created and posted. The status changes to `failed` if the transfer fails.
    */
    'status': TreasuryInboundTransfer.StatusEnum;
    'statusTransitions': TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions;
    'transaction': TreasuryCreditReversalTransaction | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "cancelable",
            "baseName": "cancelable",
            "type": "boolean"
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
            "name": "failureDetails",
            "baseName": "failure_details",
            "type": "TreasuryInboundTransferFailureDetails"
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
            "name": "linkedFlows",
            "baseName": "linked_flows",
            "type": "TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "TreasuryInboundTransfer.ObjectEnum"
        },
        {
            "name": "originPaymentMethod",
            "baseName": "origin_payment_method",
            "type": "string"
        },
        {
            "name": "originPaymentMethodDetails",
            "baseName": "origin_payment_method_details",
            "type": "TreasuryInboundTransferOriginPaymentMethodDetails"
        },
        {
            "name": "returned",
            "baseName": "returned",
            "type": "boolean"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TreasuryInboundTransfer.StatusEnum"
        },
        {
            "name": "statusTransitions",
            "baseName": "status_transitions",
            "type": "TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "TreasuryCreditReversalTransaction"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryInboundTransfer.attributeTypeMap;
    }
}

export namespace TreasuryInboundTransfer {
    export enum ObjectEnum {
        TreasuryInboundTransfer = <any> 'treasury.inbound_transfer'
    }
    export enum StatusEnum {
        Canceled = <any> 'canceled',
        Failed = <any> 'failed',
        Processing = <any> 'processing',
        Succeeded = <any> 'succeeded'
    }
}
