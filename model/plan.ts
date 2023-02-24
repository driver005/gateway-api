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
import { PlanProduct } from './planProduct';
import { PlanTier } from './planTier';
import { PlanTransformUsage } from './planTransformUsage';

/**
* You can now model subscriptions more flexibly using the [Prices API](https://stripe.com/docs/api#prices). It replaces the Plans API and is backwards compatible to simplify your migration.  Plans define the base price, currency, and billing cycle for recurring purchases of products. [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and plans help you track pricing. Different physical goods or levels of service should be represented by products, and pricing options should be represented by plans. This approach lets you change prices without having to change your provisioning scheme.  For example, you might have a single \"gold\" product that has plans for $10/month, $100/year, €9/month, and €90/year.  Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription) and more about [products and prices](https://stripe.com/docs/products-prices/overview).
*/
export class Plan {
    /**
    * Whether the plan can be used for new purchases.
    */
    'active': boolean;
    /**
    * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
    */
    'aggregateUsage': Plan.AggregateUsageEnum;
    /**
    * The unit amount in %s to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
    */
    'amount': number | null;
    /**
    * The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
    */
    'amountDecimal': string | null;
    /**
    * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
    */
    'billingScheme': Plan.BillingSchemeEnum;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
    */
    'interval': Plan.IntervalEnum;
    /**
    * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
    */
    'intervalCount': number;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; } | null;
    /**
    * A brief description of the plan, hidden from customers.
    */
    'nickname': string | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': Plan.ObjectEnum;
    'product': PlanProduct | null;
    /**
    * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
    */
    'tiers'?: Array<PlanTier>;
    /**
    * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
    */
    'tiersMode': Plan.TiersModeEnum;
    'transformUsage': PlanTransformUsage | null;
    /**
    * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
    */
    'trialPeriodDays': number | null;
    /**
    * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
    */
    'usageType': Plan.UsageTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "aggregateUsage",
            "baseName": "aggregate_usage",
            "type": "Plan.AggregateUsageEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountDecimal",
            "baseName": "amount_decimal",
            "type": "string"
        },
        {
            "name": "billingScheme",
            "baseName": "billing_scheme",
            "type": "Plan.BillingSchemeEnum"
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
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "Plan.IntervalEnum"
        },
        {
            "name": "intervalCount",
            "baseName": "interval_count",
            "type": "number"
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
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "Plan.ObjectEnum"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "PlanProduct"
        },
        {
            "name": "tiers",
            "baseName": "tiers",
            "type": "Array<PlanTier>"
        },
        {
            "name": "tiersMode",
            "baseName": "tiers_mode",
            "type": "Plan.TiersModeEnum"
        },
        {
            "name": "transformUsage",
            "baseName": "transform_usage",
            "type": "PlanTransformUsage"
        },
        {
            "name": "trialPeriodDays",
            "baseName": "trial_period_days",
            "type": "number"
        },
        {
            "name": "usageType",
            "baseName": "usage_type",
            "type": "Plan.UsageTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Plan.attributeTypeMap;
    }
}

export namespace Plan {
    export enum AggregateUsageEnum {
        LastDuringPeriod = <any> 'last_during_period',
        LastEver = <any> 'last_ever',
        Max = <any> 'max',
        Sum = <any> 'sum'
    }
    export enum BillingSchemeEnum {
        PerUnit = <any> 'per_unit',
        Tiered = <any> 'tiered'
    }
    export enum IntervalEnum {
        Day = <any> 'day',
        Month = <any> 'month',
        Week = <any> 'week',
        Year = <any> 'year'
    }
    export enum ObjectEnum {
        Plan = <any> 'plan'
    }
    export enum TiersModeEnum {
        Graduated = <any> 'graduated',
        Volume = <any> 'volume'
    }
    export enum UsageTypeEnum {
        Licensed = <any> 'licensed',
        Metered = <any> 'metered'
    }
}
