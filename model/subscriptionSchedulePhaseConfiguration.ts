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
import { SchedulesPhaseAutomaticTax } from './schedulesPhaseAutomaticTax';
import { SubscriptionBillingThresholds1 } from './subscriptionBillingThresholds1';
import { SubscriptionScheduleAddInvoiceItem } from './subscriptionScheduleAddInvoiceItem';
import { SubscriptionScheduleConfigurationItem } from './subscriptionScheduleConfigurationItem';
import { SubscriptionSchedulePhaseConfigurationCoupon } from './subscriptionSchedulePhaseConfigurationCoupon';
import { SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod } from './subscriptionSchedulePhaseConfigurationDefaultPaymentMethod';
import { SubscriptionSchedulePhaseConfigurationInvoiceSettings } from './subscriptionSchedulePhaseConfigurationInvoiceSettings';
import { SubscriptionSchedulePhaseConfigurationOnBehalfOf } from './subscriptionSchedulePhaseConfigurationOnBehalfOf';
import { SubscriptionSchedulePhaseConfigurationTransferData } from './subscriptionSchedulePhaseConfigurationTransferData';
import { TaxRate } from './taxRate';

/**
* A phase describes the plans, coupon, and trialing status of a subscription for a predefined time period.
*/
export class SubscriptionSchedulePhaseConfiguration {
    /**
    * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase.
    */
    'addInvoiceItems': Array<SubscriptionScheduleAddInvoiceItem>;
    /**
    * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner\'s Stripe account during this phase of the schedule.
    */
    'applicationFeePercent': number | null;
    'automaticTax'?: SchedulesPhaseAutomaticTax;
    /**
    * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
    */
    'billingCycleAnchor': SubscriptionSchedulePhaseConfiguration.BillingCycleAnchorEnum;
    'billingThresholds': SubscriptionBillingThresholds1 | null;
    /**
    * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
    */
    'collectionMethod': SubscriptionSchedulePhaseConfiguration.CollectionMethodEnum;
    'coupon': SubscriptionSchedulePhaseConfigurationCoupon | null;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'defaultPaymentMethod': SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod | null;
    /**
    * The default tax rates to apply to the subscription during this phase of the subscription schedule.
    */
    'defaultTaxRates'?: Array<TaxRate> | null;
    /**
    * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
    */
    'description': string | null;
    /**
    * The end of this phase of the subscription schedule.
    */
    'endDate': number;
    'invoiceSettings': SubscriptionSchedulePhaseConfigurationInvoiceSettings | null;
    /**
    * Subscription items to configure the subscription to during this phase of the subscription schedule.
    */
    'items': Array<SubscriptionScheduleConfigurationItem>;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule\'s phase will update the underlying subscription\'s `metadata` when the phase is entered. Updating the underlying subscription\'s `metadata` directly will not affect the current phase\'s `metadata`.
    */
    'metadata': { [key: string]: string; } | null;
    'onBehalfOf': SubscriptionSchedulePhaseConfigurationOnBehalfOf | null;
    /**
    * If the subscription schedule will prorate when transitioning to this phase. Possible values are `create_prorations` and `none`.
    */
    'prorationBehavior': SubscriptionSchedulePhaseConfiguration.ProrationBehaviorEnum;
    /**
    * The start of this phase of the subscription schedule.
    */
    'startDate': number;
    'transferData': SubscriptionSchedulePhaseConfigurationTransferData | null;
    /**
    * When the trial ends within the phase.
    */
    'trialEnd': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addInvoiceItems",
            "baseName": "add_invoice_items",
            "type": "Array<SubscriptionScheduleAddInvoiceItem>"
        },
        {
            "name": "applicationFeePercent",
            "baseName": "application_fee_percent",
            "type": "number"
        },
        {
            "name": "automaticTax",
            "baseName": "automatic_tax",
            "type": "SchedulesPhaseAutomaticTax"
        },
        {
            "name": "billingCycleAnchor",
            "baseName": "billing_cycle_anchor",
            "type": "SubscriptionSchedulePhaseConfiguration.BillingCycleAnchorEnum"
        },
        {
            "name": "billingThresholds",
            "baseName": "billing_thresholds",
            "type": "SubscriptionBillingThresholds1"
        },
        {
            "name": "collectionMethod",
            "baseName": "collection_method",
            "type": "SubscriptionSchedulePhaseConfiguration.CollectionMethodEnum"
        },
        {
            "name": "coupon",
            "baseName": "coupon",
            "type": "SubscriptionSchedulePhaseConfigurationCoupon"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "defaultPaymentMethod",
            "baseName": "default_payment_method",
            "type": "SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod"
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
            "name": "endDate",
            "baseName": "end_date",
            "type": "number"
        },
        {
            "name": "invoiceSettings",
            "baseName": "invoice_settings",
            "type": "SubscriptionSchedulePhaseConfigurationInvoiceSettings"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<SubscriptionScheduleConfigurationItem>"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "onBehalfOf",
            "baseName": "on_behalf_of",
            "type": "SubscriptionSchedulePhaseConfigurationOnBehalfOf"
        },
        {
            "name": "prorationBehavior",
            "baseName": "proration_behavior",
            "type": "SubscriptionSchedulePhaseConfiguration.ProrationBehaviorEnum"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "number"
        },
        {
            "name": "transferData",
            "baseName": "transfer_data",
            "type": "SubscriptionSchedulePhaseConfigurationTransferData"
        },
        {
            "name": "trialEnd",
            "baseName": "trial_end",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionSchedulePhaseConfiguration.attributeTypeMap;
    }
}

export namespace SubscriptionSchedulePhaseConfiguration {
    export enum BillingCycleAnchorEnum {
        Automatic = <any> 'automatic',
        PhaseStart = <any> 'phase_start'
    }
    export enum CollectionMethodEnum {
        ChargeAutomatically = <any> 'charge_automatically',
        SendInvoice = <any> 'send_invoice'
    }
    export enum ProrationBehaviorEnum {
        AlwaysInvoice = <any> 'always_invoice',
        CreateProrations = <any> 'create_prorations',
        None = <any> 'none'
    }
}
