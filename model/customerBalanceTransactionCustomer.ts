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
import { ApmsSourcesSourceList1 } from './apmsSourcesSourceList1';
import { Customer } from './customer';
import { CustomerAddress } from './customerAddress';
import { CustomerCashBalance } from './customerCashBalance';
import { CustomerDefaultSource } from './customerDefaultSource';
import { CustomerDiscount } from './customerDiscount';
import { CustomerShipping1 } from './customerShipping1';
import { CustomerTax } from './customerTax';
import { CustomerTestClock } from './customerTestClock';
import { InvoiceSettingCustomerSetting } from './invoiceSettingCustomerSetting';
import { SubscriptionList } from './subscriptionList';
import { TaxIDsList1 } from './taxIDsList1';

/**
* The ID of the customer the transaction belongs to.
*/
export class CustomerBalanceTransactionCustomer {
    'address'?: CustomerAddress | null;
    /**
    * Current balance, if any, being stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that will be added to their next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account as invoices are finalized.
    */
    'balance'?: number;
    'cashBalance'?: CustomerCashBalance | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
    */
    'currency'?: string | null;
    'defaultSource': CustomerDefaultSource | null;
    /**
    * When the customer\'s latest invoice is billed by charging automatically, `delinquent` is `true` if the invoice\'s latest charge failed. When the customer\'s latest invoice is billed by sending an invoice, `delinquent` is `true` if the invoice isn\'t paid by its due date.  If an invoice is marked uncollectible by [dunning](https://stripe.com/docs/billing/automatic-collection), `delinquent` doesn\'t get reset to `false`.
    */
    'delinquent'?: boolean | null;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description': string | null;
    'discount'?: CustomerDiscount | null;
    /**
    * The customer\'s email address.
    */
    'email': string | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * The current multi-currency balances, if any, being stored on the customer. If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency. If negative, the customer has an amount owed that will be added to their next invoice denominated in that currency. These balances do not refer to any unpaid invoices. They solely track amounts that have yet to be successfully applied to any invoice. A balance in a particular currency is only applied to any invoice as an invoice in that currency is finalized.
    */
    'invoiceCreditBalance'?: { [key: string]: number; };
    /**
    * The prefix for the customer used to generate unique invoice numbers.
    */
    'invoicePrefix'?: string | null;
    'invoiceSettings'?: InvoiceSettingCustomerSetting;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * The customer\'s full name or business name.
    */
    'name'?: string | null;
    /**
    * The suffix of the customer\'s next invoice number, e.g., 0001.
    */
    'nextInvoiceSequence'?: number;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': CustomerBalanceTransactionCustomer.ObjectEnum;
    /**
    * The customer\'s phone number.
    */
    'phone'?: string | null;
    /**
    * The customer\'s preferred locales (languages), ordered by preference.
    */
    'preferredLocales'?: Array<string> | null;
    'shipping': CustomerShipping1 | null;
    'sources'?: ApmsSourcesSourceList1;
    'subscriptions'?: SubscriptionList;
    'tax'?: CustomerTax;
    /**
    * Describes the customer\'s tax exemption status. One of `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the text **\"Reverse charge\"**.
    */
    'taxExempt'?: CustomerBalanceTransactionCustomer.TaxExemptEnum;
    'taxIds'?: TaxIDsList1;
    'testClock'?: CustomerTestClock | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "CustomerAddress"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        },
        {
            "name": "cashBalance",
            "baseName": "cash_balance",
            "type": "CustomerCashBalance"
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
            "name": "defaultSource",
            "baseName": "default_source",
            "type": "CustomerDefaultSource"
        },
        {
            "name": "delinquent",
            "baseName": "delinquent",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "CustomerDiscount"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "invoiceCreditBalance",
            "baseName": "invoice_credit_balance",
            "type": "{ [key: string]: number; }"
        },
        {
            "name": "invoicePrefix",
            "baseName": "invoice_prefix",
            "type": "string"
        },
        {
            "name": "invoiceSettings",
            "baseName": "invoice_settings",
            "type": "InvoiceSettingCustomerSetting"
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nextInvoiceSequence",
            "baseName": "next_invoice_sequence",
            "type": "number"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "CustomerBalanceTransactionCustomer.ObjectEnum"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "preferredLocales",
            "baseName": "preferred_locales",
            "type": "Array<string>"
        },
        {
            "name": "shipping",
            "baseName": "shipping",
            "type": "CustomerShipping1"
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "ApmsSourcesSourceList1"
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "SubscriptionList"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "CustomerTax"
        },
        {
            "name": "taxExempt",
            "baseName": "tax_exempt",
            "type": "CustomerBalanceTransactionCustomer.TaxExemptEnum"
        },
        {
            "name": "taxIds",
            "baseName": "tax_ids",
            "type": "TaxIDsList1"
        },
        {
            "name": "testClock",
            "baseName": "test_clock",
            "type": "CustomerTestClock"
        }    ];

    static getAttributeTypeMap() {
        return CustomerBalanceTransactionCustomer.attributeTypeMap;
    }
}

export namespace CustomerBalanceTransactionCustomer {
    export enum ObjectEnum {
        Customer = <any> 'customer'
    }
    export enum TaxExemptEnum {
        Exempt = <any> 'exempt',
        None = <any> 'none',
        Reverse = <any> 'reverse'
    }
}
