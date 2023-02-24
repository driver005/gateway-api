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
import { Plan } from './plan';
import { Price } from './price';
import { SubscriptionItemBillingThresholds1 } from './subscriptionItemBillingThresholds1';
import { TaxRate } from './taxRate';

/**
* Subscription items allow you to create customer subscriptions with more than one plan, making it easy to represent complex billing relationships.
*/
export class SubscriptionItem {
    'billingThresholds': SubscriptionItemBillingThresholds1 | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': SubscriptionItem.ObjectEnum;
    'plan': Plan;
    'price': Price;
    /**
    * The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
    */
    'quantity'?: number;
    /**
    * The `subscription` this `subscription_item` belongs to.
    */
    'subscription': string;
    /**
    * The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
    */
    'taxRates': Array<TaxRate> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingThresholds",
            "baseName": "billing_thresholds",
            "type": "SubscriptionItemBillingThresholds1"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "SubscriptionItem.ObjectEnum"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "Plan"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "Price"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string"
        },
        {
            "name": "taxRates",
            "baseName": "tax_rates",
            "type": "Array<TaxRate>"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionItem.attributeTypeMap;
    }
}

export namespace SubscriptionItem {
    export enum ObjectEnum {
        SubscriptionItem = <any> 'subscription_item'
    }
}