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
import { CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction } from './customerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction } from './customerBalanceResourceCashBalanceTransactionResourceFundedTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction } from './customerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction } from './customerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction';
import { CustomerCashBalanceTransactionCustomer } from './customerCashBalanceTransactionCustomer';

/**
* Customers with certain payments enabled have a cash balance, representing funds that were paid by the customer to a merchant, but have not yet been allocated to a payment. Cash Balance Transactions represent when funds are moved into or out of this balance. This includes funding by the customer, allocation to payments, and refunds to the customer.
*/
export class CustomerCashBalanceTransaction {
    'appliedToPayment'?: CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'customer': CustomerCashBalanceTransactionCustomer;
    /**
    * The total available cash balance for the specified currency after this transaction was applied. Represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
    */
    'endingBalance': number;
    'funded'?: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * The amount by which the cash balance changed, represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). A positive value represents funds being added to the cash balance, a negative value represents funds being removed from the cash balance.
    */
    'netAmount': number;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': CustomerCashBalanceTransaction.ObjectEnum;
    'refundedFromPayment'?: CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction;
    /**
    * The type of the cash balance transaction. One of `applied_to_payment`, `unapplied_from_payment`, `refunded_from_payment`, `funded`, `return_initiated`, or `return_canceled`. New types may be added in future. See [Customer Balance](https://stripe.com/docs/payments/customer-balance#types) to learn more about these types.
    */
    'type': CustomerCashBalanceTransaction.TypeEnum;
    'unappliedFromPayment'?: CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appliedToPayment",
            "baseName": "applied_to_payment",
            "type": "CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction"
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
            "name": "customer",
            "baseName": "customer",
            "type": "CustomerCashBalanceTransactionCustomer"
        },
        {
            "name": "endingBalance",
            "baseName": "ending_balance",
            "type": "number"
        },
        {
            "name": "funded",
            "baseName": "funded",
            "type": "CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction"
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
            "name": "netAmount",
            "baseName": "net_amount",
            "type": "number"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "CustomerCashBalanceTransaction.ObjectEnum"
        },
        {
            "name": "refundedFromPayment",
            "baseName": "refunded_from_payment",
            "type": "CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomerCashBalanceTransaction.TypeEnum"
        },
        {
            "name": "unappliedFromPayment",
            "baseName": "unapplied_from_payment",
            "type": "CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction"
        }    ];

    static getAttributeTypeMap() {
        return CustomerCashBalanceTransaction.attributeTypeMap;
    }
}

export namespace CustomerCashBalanceTransaction {
    export enum ObjectEnum {
        CustomerCashBalanceTransaction = <any> 'customer_cash_balance_transaction'
    }
    export enum TypeEnum {
        AppliedToPayment = <any> 'applied_to_payment',
        Funded = <any> 'funded',
        FundingReversed = <any> 'funding_reversed',
        RefundedFromPayment = <any> 'refunded_from_payment',
        ReturnCanceled = <any> 'return_canceled',
        ReturnInitiated = <any> 'return_initiated',
        UnappliedFromPayment = <any> 'unapplied_from_payment'
    }
}
