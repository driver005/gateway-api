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
import { CurrencyOption } from './currencyOption';
import { CurrencyOptionCustomUnitAmount } from './currencyOptionCustomUnitAmount';
import { Price } from './price';
import { PriceProduct } from './priceProduct';
import { PriceRecurring } from './priceRecurring';
import { PriceTier } from './priceTier';
import { PriceTransformQuantity } from './priceTransformQuantity';

/**
* The price of the invoice item.
*/
export class InvoiceitemPrice {
    /**
    * Whether the price can be used for new purchases.
    */
    'active': boolean;
    /**
    * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
    */
    'billingScheme': InvoiceitemPrice.BillingSchemeEnum;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
    */
    'currencyOptions'?: { [key: string]: CurrencyOption; };
    'customUnitAmount': CurrencyOptionCustomUnitAmount | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
    */
    'lookupKey': string | null;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * A brief description of the price, hidden from customers.
    */
    'nickname': string | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': InvoiceitemPrice.ObjectEnum;
    'product': PriceProduct;
    'recurring': PriceRecurring | null;
    /**
    * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
    */
    'taxBehavior': InvoiceitemPrice.TaxBehaviorEnum;
    /**
    * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
    */
    'tiers'?: Array<PriceTier>;
    /**
    * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
    */
    'tiersMode': InvoiceitemPrice.TiersModeEnum;
    'transformQuantity': PriceTransformQuantity | null;
    /**
    * One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
    */
    'type': InvoiceitemPrice.TypeEnum;
    /**
    * The unit amount in %s to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
    */
    'unitAmount': number | null;
    /**
    * The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
    */
    'unitAmountDecimal': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "billingScheme",
            "baseName": "billing_scheme",
            "type": "InvoiceitemPrice.BillingSchemeEnum"
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
            "name": "currencyOptions",
            "baseName": "currency_options",
            "type": "{ [key: string]: CurrencyOption; }"
        },
        {
            "name": "customUnitAmount",
            "baseName": "custom_unit_amount",
            "type": "CurrencyOptionCustomUnitAmount"
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
            "name": "lookupKey",
            "baseName": "lookup_key",
            "type": "string"
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
            "type": "InvoiceitemPrice.ObjectEnum"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "PriceProduct"
        },
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "PriceRecurring"
        },
        {
            "name": "taxBehavior",
            "baseName": "tax_behavior",
            "type": "InvoiceitemPrice.TaxBehaviorEnum"
        },
        {
            "name": "tiers",
            "baseName": "tiers",
            "type": "Array<PriceTier>"
        },
        {
            "name": "tiersMode",
            "baseName": "tiers_mode",
            "type": "InvoiceitemPrice.TiersModeEnum"
        },
        {
            "name": "transformQuantity",
            "baseName": "transform_quantity",
            "type": "PriceTransformQuantity"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "InvoiceitemPrice.TypeEnum"
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
        return InvoiceitemPrice.attributeTypeMap;
    }
}

export namespace InvoiceitemPrice {
    export enum BillingSchemeEnum {
        PerUnit = <any> 'per_unit',
        Tiered = <any> 'tiered'
    }
    export enum ObjectEnum {
        Price = <any> 'price'
    }
    export enum TaxBehaviorEnum {
        Exclusive = <any> 'exclusive',
        Inclusive = <any> 'inclusive',
        Unspecified = <any> 'unspecified'
    }
    export enum TiersModeEnum {
        Graduated = <any> 'graduated',
        Volume = <any> 'volume'
    }
    export enum TypeEnum {
        OneTime = <any> 'one_time',
        Recurring = <any> 'recurring'
    }
}
