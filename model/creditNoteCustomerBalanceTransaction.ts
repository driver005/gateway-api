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
import { CustomerBalanceTransaction } from './customerBalanceTransaction';
import { CustomerBalanceTransactionCreditNote } from './customerBalanceTransactionCreditNote';
import { CustomerBalanceTransactionCustomer } from './customerBalanceTransactionCustomer';
import { CustomerBalanceTransactionInvoice } from './customerBalanceTransactionInvoice';

/**
* Customer balance transaction related to this credit note.
*/
export class CreditNoteCustomerBalanceTransaction {
    /**
    * The amount of the transaction. A negative value is a credit for the customer\'s balance, and a positive value is a debit to the customer\'s `balance`.
    */
    'amount': number;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'creditNote': CustomerBalanceTransactionCreditNote | null;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'customer': CustomerBalanceTransactionCustomer;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description': string | null;
    /**
    * The customer\'s `balance` after the transaction was applied. A negative value decreases the amount due on the customer\'s next invoice. A positive value increases the amount due on the customer\'s next invoice.
    */
    'endingBalance': number;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'invoice': CustomerBalanceTransactionInvoice | null;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; } | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': CreditNoteCustomerBalanceTransaction.ObjectEnum;
    /**
    * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, or `unapplied_from_invoice`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
    */
    'type': CreditNoteCustomerBalanceTransaction.TypeEnum;

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
            "name": "creditNote",
            "baseName": "credit_note",
            "type": "CustomerBalanceTransactionCreditNote"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "CustomerBalanceTransactionCustomer"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "endingBalance",
            "baseName": "ending_balance",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "CustomerBalanceTransactionInvoice"
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
            "type": "CreditNoteCustomerBalanceTransaction.ObjectEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreditNoteCustomerBalanceTransaction.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreditNoteCustomerBalanceTransaction.attributeTypeMap;
    }
}

export namespace CreditNoteCustomerBalanceTransaction {
    export enum ObjectEnum {
        CustomerBalanceTransaction = <any> 'customer_balance_transaction'
    }
    export enum TypeEnum {
        Adjustment = <any> 'adjustment',
        AppliedToInvoice = <any> 'applied_to_invoice',
        CreditNote = <any> 'credit_note',
        Initial = <any> 'initial',
        InvoiceOverpaid = <any> 'invoice_overpaid',
        InvoiceTooLarge = <any> 'invoice_too_large',
        InvoiceTooSmall = <any> 'invoice_too_small',
        Migration = <any> 'migration',
        UnappliedFromInvoice = <any> 'unapplied_from_invoice',
        UnspentReceiverCredit = <any> 'unspent_receiver_credit'
    }
}
