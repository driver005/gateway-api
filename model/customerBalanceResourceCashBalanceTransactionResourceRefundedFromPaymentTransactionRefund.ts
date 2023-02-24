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
import { FeeRefundBalanceTransaction } from './feeRefundBalanceTransaction';
import { Refund } from './refund';
import { RefundCharge } from './refundCharge';
import { RefundFailureBalanceTransaction } from './refundFailureBalanceTransaction';
import { RefundNextAction } from './refundNextAction';
import { RefundPaymentIntent } from './refundPaymentIntent';
import { RefundSourceTransferReversal } from './refundSourceTransferReversal';
import { RefundTransferReversal } from './refundTransferReversal';

/**
* The [Refund](https://stripe.com/docs/api/refunds/object) that moved these funds into the customer\'s cash balance.
*/
export class CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund {
    /**
    * Amount, in %s.
    */
    'amount': number;
    'balanceTransaction': FeeRefundBalanceTransaction | null;
    'charge': RefundCharge | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users. (Available on non-card refunds only)
    */
    'description'?: string;
    'failureBalanceTransaction'?: RefundFailureBalanceTransaction;
    /**
    * If the refund failed, the reason for refund failure if known. Possible values are `lost_or_stolen_card`, `expired_or_canceled_card`, `charge_for_pending_refund_disputed`, `insufficient_funds`, `declined`, `merchant_request` or `unknown`.
    */
    'failureReason'?: string;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Email to which refund instructions, if required, are sent to.
    */
    'instructionsEmail'?: string;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; } | null;
    'nextAction'?: RefundNextAction;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund.ObjectEnum;
    'paymentIntent': RefundPaymentIntent | null;
    /**
    * Reason for the refund, either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`).
    */
    'reason': CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund.ReasonEnum;
    /**
    * This is the transaction number that appears on email receipts sent for this refund.
    */
    'receiptNumber': string | null;
    'sourceTransferReversal': RefundSourceTransferReversal | null;
    /**
    * Status of the refund. For credit card refunds, this can be `pending`, `succeeded`, or `failed`. For other types of refunds, it can be `pending`, `requires_action`, `succeeded`, `failed`, or `canceled`. Refer to our [refunds](https://stripe.com/docs/refunds#failed-refunds) documentation for more details.
    */
    'status': string | null;
    'transferReversal': RefundTransferReversal | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "balanceTransaction",
            "baseName": "balance_transaction",
            "type": "FeeRefundBalanceTransaction"
        },
        {
            "name": "charge",
            "baseName": "charge",
            "type": "RefundCharge"
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
            "name": "failureBalanceTransaction",
            "baseName": "failure_balance_transaction",
            "type": "RefundFailureBalanceTransaction"
        },
        {
            "name": "failureReason",
            "baseName": "failure_reason",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "instructionsEmail",
            "baseName": "instructions_email",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "nextAction",
            "baseName": "next_action",
            "type": "RefundNextAction"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund.ObjectEnum"
        },
        {
            "name": "paymentIntent",
            "baseName": "payment_intent",
            "type": "RefundPaymentIntent"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund.ReasonEnum"
        },
        {
            "name": "receiptNumber",
            "baseName": "receipt_number",
            "type": "string"
        },
        {
            "name": "sourceTransferReversal",
            "baseName": "source_transfer_reversal",
            "type": "RefundSourceTransferReversal"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "transferReversal",
            "baseName": "transfer_reversal",
            "type": "RefundTransferReversal"
        }    ];

    static getAttributeTypeMap() {
        return CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund.attributeTypeMap;
    }
}

export namespace CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund {
    export enum ObjectEnum {
        Refund = <any> 'refund'
    }
    export enum ReasonEnum {
        Duplicate = <any> 'duplicate',
        ExpiredUncapturedCharge = <any> 'expired_uncaptured_charge',
        Fraudulent = <any> 'fraudulent',
        RequestedByCustomer = <any> 'requested_by_customer'
    }
}
