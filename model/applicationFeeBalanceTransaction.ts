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
import { BalanceTransaction } from './balanceTransaction';
import { BalanceTransactionSource1 } from './balanceTransactionSource1';
import { Fee } from './fee';

/**
* Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
*/
export class ApplicationFeeBalanceTransaction {
    /**
    * Gross amount of the transaction, in %s.
    */
    'amount': number;
    /**
    * The date the transaction\'s net funds will become available in the Stripe balance.
    */
    'availableOn': number;
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
    /**
    * The exchange rate used, if applicable, for this transaction. Specifically, if money was converted from currency A to currency B, then the `amount` in currency A, times `exchange_rate`, would be the `amount` in currency B. For example, suppose you charged a customer 10.00 EUR. Then the PaymentIntent\'s `amount` would be `1000` and `currency` would be `eur`. Suppose this was converted into 12.34 USD in your Stripe account. Then the BalanceTransaction\'s `amount` would be `1234`, `currency` would be `usd`, and `exchange_rate` would be `1.234`.
    */
    'exchangeRate': number | null;
    /**
    * Fees (in %s) paid for this transaction.
    */
    'fee': number;
    /**
    * Detailed breakdown of fees (in %s) paid for this transaction.
    */
    'feeDetails': Array<Fee>;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Net amount of the transaction, in %s.
    */
    'net': number;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': ApplicationFeeBalanceTransaction.ObjectEnum;
    /**
    * [Learn more](https://stripe.com/docs/reports/reporting-categories) about how reporting categories can help you understand balance transactions from an accounting perspective.
    */
    'reportingCategory': string;
    'source': BalanceTransactionSource1 | null;
    /**
    * If the transaction\'s net funds are available in the Stripe balance yet. Either `available` or `pending`.
    */
    'status': string;
    /**
    * Transaction type: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. [Learn more](https://stripe.com/docs/reports/balance-transaction-types) about balance transaction types and what they represent. If you are looking to classify transactions for accounting purposes, you might want to consider `reporting_category` instead.
    */
    'type': ApplicationFeeBalanceTransaction.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "availableOn",
            "baseName": "available_on",
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
            "name": "exchangeRate",
            "baseName": "exchange_rate",
            "type": "number"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "feeDetails",
            "baseName": "fee_details",
            "type": "Array<Fee>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "net",
            "baseName": "net",
            "type": "number"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "ApplicationFeeBalanceTransaction.ObjectEnum"
        },
        {
            "name": "reportingCategory",
            "baseName": "reporting_category",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "BalanceTransactionSource1"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApplicationFeeBalanceTransaction.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationFeeBalanceTransaction.attributeTypeMap;
    }
}

export namespace ApplicationFeeBalanceTransaction {
    export enum ObjectEnum {
        BalanceTransaction = <any> 'balance_transaction'
    }
    export enum TypeEnum {
        Adjustment = <any> 'adjustment',
        Advance = <any> 'advance',
        AdvanceFunding = <any> 'advance_funding',
        AnticipationRepayment = <any> 'anticipation_repayment',
        ApplicationFee = <any> 'application_fee',
        ApplicationFeeRefund = <any> 'application_fee_refund',
        Charge = <any> 'charge',
        ConnectCollectionTransfer = <any> 'connect_collection_transfer',
        Contribution = <any> 'contribution',
        IssuingAuthorizationHold = <any> 'issuing_authorization_hold',
        IssuingAuthorizationRelease = <any> 'issuing_authorization_release',
        IssuingDispute = <any> 'issuing_dispute',
        IssuingTransaction = <any> 'issuing_transaction',
        Payment = <any> 'payment',
        PaymentFailureRefund = <any> 'payment_failure_refund',
        PaymentRefund = <any> 'payment_refund',
        Payout = <any> 'payout',
        PayoutCancel = <any> 'payout_cancel',
        PayoutFailure = <any> 'payout_failure',
        Refund = <any> 'refund',
        RefundFailure = <any> 'refund_failure',
        ReserveTransaction = <any> 'reserve_transaction',
        ReservedFunds = <any> 'reserved_funds',
        StripeFee = <any> 'stripe_fee',
        StripeFxFee = <any> 'stripe_fx_fee',
        TaxFee = <any> 'tax_fee',
        Topup = <any> 'topup',
        TopupReversal = <any> 'topup_reversal',
        Transfer = <any> 'transfer',
        TransferCancel = <any> 'transfer_cancel',
        TransferFailure = <any> 'transfer_failure',
        TransferRefund = <any> 'transfer_refund'
    }
}
