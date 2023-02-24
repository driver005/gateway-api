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
import { Subscription } from './subscription';
import { SubscriptionApplication } from './subscriptionApplication';
import { SubscriptionAutomaticTax } from './subscriptionAutomaticTax';
import { SubscriptionBillingThresholds1 } from './subscriptionBillingThresholds1';
import { SubscriptionCustomer } from './subscriptionCustomer';
import { SubscriptionDefaultPaymentMethod } from './subscriptionDefaultPaymentMethod';
import { SubscriptionDefaultSource } from './subscriptionDefaultSource';
import { SubscriptionDiscount } from './subscriptionDiscount';
import { SubscriptionItemList } from './subscriptionItemList';
import { SubscriptionLatestInvoice } from './subscriptionLatestInvoice';
import { SubscriptionOnBehalfOf } from './subscriptionOnBehalfOf';
import { SubscriptionPauseCollection } from './subscriptionPauseCollection';
import { SubscriptionPaymentSettings } from './subscriptionPaymentSettings';
import { SubscriptionPendingInvoiceItemInterval1 } from './subscriptionPendingInvoiceItemInterval1';
import { SubscriptionPendingSetupIntent } from './subscriptionPendingSetupIntent';
import { SubscriptionPendingUpdate } from './subscriptionPendingUpdate';
import { SubscriptionSchedule1 } from './subscriptionSchedule1';
import { SubscriptionTestClock } from './subscriptionTestClock';
import { SubscriptionTransferData1 } from './subscriptionTransferData1';
import { SubscriptionTrialSettings } from './subscriptionTrialSettings';
import { TaxRate } from './taxRate';

/**
* The ID of the subscription for Checkout Sessions in `subscription` mode.
*/
export class CheckoutSessionSubscription {
    'application': SubscriptionApplication | null;
    /**
    * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner\'s Stripe account.
    */
    'applicationFeePercent': number | null;
    'automaticTax': SubscriptionAutomaticTax;
    /**
    * Determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
    */
    'billingCycleAnchor': number;
    'billingThresholds': SubscriptionBillingThresholds1 | null;
    /**
    * A date in the future at which the subscription will automatically get canceled
    */
    'cancelAt': number | null;
    /**
    * If the subscription has been canceled with the `at_period_end` flag set to `true`, `cancel_at_period_end` on the subscription will be true. You can use this attribute to determine whether a subscription that has a status of active is scheduled to be canceled at the end of the current period.
    */
    'cancelAtPeriodEnd': boolean;
    /**
    * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
    */
    'canceledAt': number | null;
    /**
    * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
    */
    'collectionMethod': CheckoutSessionSubscription.CollectionMethodEnum;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
    */
    'currentPeriodEnd': number;
    /**
    * Start of the current period that the subscription has been invoiced for.
    */
    'currentPeriodStart': number;
    'customer': SubscriptionCustomer;
    /**
    * Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`.
    */
    'daysUntilDue': number | null;
    'defaultPaymentMethod': SubscriptionDefaultPaymentMethod | null;
    'defaultSource': SubscriptionDefaultSource | null;
    /**
    * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
    */
    'defaultTaxRates'?: Array<TaxRate> | null;
    /**
    * The subscription\'s description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces.
    */
    'description': string | null;
    'discount': SubscriptionDiscount | null;
    /**
    * If the subscription has ended, the date the subscription ended.
    */
    'endedAt': number | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'items': SubscriptionItemList;
    'latestInvoice': SubscriptionLatestInvoice | null;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`.
    */
    'nextPendingInvoiceItemInvoice': number | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': CheckoutSessionSubscription.ObjectEnum;
    'onBehalfOf': SubscriptionOnBehalfOf | null;
    'pauseCollection': SubscriptionPauseCollection | null;
    'paymentSettings': SubscriptionPaymentSettings | null;
    'pendingInvoiceItemInterval': SubscriptionPendingInvoiceItemInterval1 | null;
    'pendingSetupIntent': SubscriptionPendingSetupIntent | null;
    'pendingUpdate': SubscriptionPendingUpdate | null;
    'schedule': SubscriptionSchedule1 | null;
    /**
    * Date when the subscription was first created. The date might differ from the `created` date due to backdating.
    */
    'startDate': number;
    /**
    * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, or `unpaid`.   For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this state can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` state. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal state, the open invoice will be voided and no further invoices will be generated.   A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.   If subscription `collection_method=charge_automatically` it becomes `past_due` when payment to renew it fails and `canceled` or `unpaid` (depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts.   If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
    */
    'status': CheckoutSessionSubscription.StatusEnum;
    'testClock': SubscriptionTestClock | null;
    'transferData': SubscriptionTransferData1 | null;
    /**
    * If the subscription has a trial, the end of that trial.
    */
    'trialEnd': number | null;
    'trialSettings': SubscriptionTrialSettings | null;
    /**
    * If the subscription has a trial, the beginning of that trial.
    */
    'trialStart': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "SubscriptionApplication"
        },
        {
            "name": "applicationFeePercent",
            "baseName": "application_fee_percent",
            "type": "number"
        },
        {
            "name": "automaticTax",
            "baseName": "automatic_tax",
            "type": "SubscriptionAutomaticTax"
        },
        {
            "name": "billingCycleAnchor",
            "baseName": "billing_cycle_anchor",
            "type": "number"
        },
        {
            "name": "billingThresholds",
            "baseName": "billing_thresholds",
            "type": "SubscriptionBillingThresholds1"
        },
        {
            "name": "cancelAt",
            "baseName": "cancel_at",
            "type": "number"
        },
        {
            "name": "cancelAtPeriodEnd",
            "baseName": "cancel_at_period_end",
            "type": "boolean"
        },
        {
            "name": "canceledAt",
            "baseName": "canceled_at",
            "type": "number"
        },
        {
            "name": "collectionMethod",
            "baseName": "collection_method",
            "type": "CheckoutSessionSubscription.CollectionMethodEnum"
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
            "name": "currentPeriodEnd",
            "baseName": "current_period_end",
            "type": "number"
        },
        {
            "name": "currentPeriodStart",
            "baseName": "current_period_start",
            "type": "number"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "SubscriptionCustomer"
        },
        {
            "name": "daysUntilDue",
            "baseName": "days_until_due",
            "type": "number"
        },
        {
            "name": "defaultPaymentMethod",
            "baseName": "default_payment_method",
            "type": "SubscriptionDefaultPaymentMethod"
        },
        {
            "name": "defaultSource",
            "baseName": "default_source",
            "type": "SubscriptionDefaultSource"
        },
        {
            "name": "defaultTaxRates",
            "baseName": "default_tax_rates",
            "type": "Array<TaxRate>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "SubscriptionDiscount"
        },
        {
            "name": "endedAt",
            "baseName": "ended_at",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "SubscriptionItemList"
        },
        {
            "name": "latestInvoice",
            "baseName": "latest_invoice",
            "type": "SubscriptionLatestInvoice"
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
            "name": "nextPendingInvoiceItemInvoice",
            "baseName": "next_pending_invoice_item_invoice",
            "type": "number"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "CheckoutSessionSubscription.ObjectEnum"
        },
        {
            "name": "onBehalfOf",
            "baseName": "on_behalf_of",
            "type": "SubscriptionOnBehalfOf"
        },
        {
            "name": "pauseCollection",
            "baseName": "pause_collection",
            "type": "SubscriptionPauseCollection"
        },
        {
            "name": "paymentSettings",
            "baseName": "payment_settings",
            "type": "SubscriptionPaymentSettings"
        },
        {
            "name": "pendingInvoiceItemInterval",
            "baseName": "pending_invoice_item_interval",
            "type": "SubscriptionPendingInvoiceItemInterval1"
        },
        {
            "name": "pendingSetupIntent",
            "baseName": "pending_setup_intent",
            "type": "SubscriptionPendingSetupIntent"
        },
        {
            "name": "pendingUpdate",
            "baseName": "pending_update",
            "type": "SubscriptionPendingUpdate"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "SubscriptionSchedule1"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CheckoutSessionSubscription.StatusEnum"
        },
        {
            "name": "testClock",
            "baseName": "test_clock",
            "type": "SubscriptionTestClock"
        },
        {
            "name": "transferData",
            "baseName": "transfer_data",
            "type": "SubscriptionTransferData1"
        },
        {
            "name": "trialEnd",
            "baseName": "trial_end",
            "type": "number"
        },
        {
            "name": "trialSettings",
            "baseName": "trial_settings",
            "type": "SubscriptionTrialSettings"
        },
        {
            "name": "trialStart",
            "baseName": "trial_start",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutSessionSubscription.attributeTypeMap;
    }
}

export namespace CheckoutSessionSubscription {
    export enum CollectionMethodEnum {
        ChargeAutomatically = <any> 'charge_automatically',
        SendInvoice = <any> 'send_invoice'
    }
    export enum ObjectEnum {
        Subscription = <any> 'subscription'
    }
    export enum StatusEnum {
        Active = <any> 'active',
        Canceled = <any> 'canceled',
        Incomplete = <any> 'incomplete',
        IncompleteExpired = <any> 'incomplete_expired',
        PastDue = <any> 'past_due',
        Paused = <any> 'paused',
        Trialing = <any> 'trialing',
        Unpaid = <any> 'unpaid'
    }
}
