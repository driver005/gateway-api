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
import { InvoiceLineItemPeriod } from './invoiceLineItemPeriod';
import { InvoiceitemCustomer } from './invoiceitemCustomer';
import { InvoiceitemDiscountsInner } from './invoiceitemDiscountsInner';
import { InvoiceitemInvoice } from './invoiceitemInvoice';
import { InvoiceitemPlan } from './invoiceitemPlan';
import { InvoiceitemPrice } from './invoiceitemPrice';
import { InvoiceitemSubscription } from './invoiceitemSubscription';
import { InvoiceitemTestClock } from './invoiceitemTestClock';
import { TaxRate } from './taxRate';

/**
* Invoice Items represent the component lines of an [invoice](https://stripe.com/docs/api/invoices). An invoice item is added to an invoice by creating or updating it with an `invoice` field, at which point it will be included as [an invoice line item](https://stripe.com/docs/api/invoices/line_item) within [invoice.lines](https://stripe.com/docs/api/invoices/object#invoice_object-lines).  Invoice Items can be created before you are ready to actually send the invoice. This can be particularly useful when combined with a [subscription](https://stripe.com/docs/api/subscriptions). Sometimes you want to add a charge or credit to a customer, but actually charge or credit the customer’s card only at the end of a regular billing cycle. This is useful for combining several charges (to minimize per-transaction fees), or for having Stripe tabulate your usage-based billing totals.  Related guides: [Integrate with the Invoicing API](https://stripe.com/docs/invoicing/integration), [Subscription Invoices](https://stripe.com/docs/billing/invoices/subscription#adding-upcoming-invoice-items).
*/
export class Invoiceitem {
    /**
    * Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
    */
    'amount': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'customer': InvoiceitemCustomer;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'date': number;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description': string | null;
    /**
    * If true, discounts will apply to this invoice item. Always false for prorations.
    */
    'discountable': boolean;
    /**
    * The discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
    */
    'discounts': Array<InvoiceitemDiscountsInner> | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'invoice': InvoiceitemInvoice | null;
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
    'object': Invoiceitem.ObjectEnum;
    'period': InvoiceLineItemPeriod;
    'plan': InvoiceitemPlan | null;
    'price': InvoiceitemPrice | null;
    /**
    * Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.
    */
    'proration': boolean;
    /**
    * Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
    */
    'quantity': number;
    'subscription': InvoiceitemSubscription | null;
    /**
    * The subscription item that this invoice item has been created for, if any.
    */
    'subscriptionItem'?: string;
    /**
    * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
    */
    'taxRates': Array<TaxRate> | null;
    'testClock': InvoiceitemTestClock | null;
    /**
    * Unit amount (in the `currency` specified) of the invoice item.
    */
    'unitAmount': number | null;
    /**
    * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
    */
    'unitAmountDecimal': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
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
            "type": "InvoiceitemCustomer"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "discountable",
            "baseName": "discountable",
            "type": "boolean"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<InvoiceitemDiscountsInner>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "InvoiceitemInvoice"
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
            "type": "Invoiceitem.ObjectEnum"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "InvoiceLineItemPeriod"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "InvoiceitemPlan"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "InvoiceitemPrice"
        },
        {
            "name": "proration",
            "baseName": "proration",
            "type": "boolean"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "InvoiceitemSubscription"
        },
        {
            "name": "subscriptionItem",
            "baseName": "subscription_item",
            "type": "string"
        },
        {
            "name": "taxRates",
            "baseName": "tax_rates",
            "type": "Array<TaxRate>"
        },
        {
            "name": "testClock",
            "baseName": "test_clock",
            "type": "InvoiceitemTestClock"
        },
        {
            "name": "unitAmount",
            "baseName": "unit_amount",
            "type": "number"
        },
        {
            "name": "unitAmountDecimal",
            "baseName": "unit_amount_decimal",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Invoiceitem.attributeTypeMap;
    }
}

export namespace Invoiceitem {
    export enum ObjectEnum {
        Invoiceitem = <any> 'invoiceitem'
    }
}