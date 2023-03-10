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
import { PortalSubscriptionUpdateProduct } from './portalSubscriptionUpdateProduct';

/**
* 
*/
export class PortalSubscriptionUpdate {
    /**
    * The types of subscription updates that are supported for items listed in the `products` attribute. When empty, subscriptions are not updateable.
    */
    'defaultAllowedUpdates': Array<PortalSubscriptionUpdate.DefaultAllowedUpdatesEnum>;
    /**
    * Whether the feature is enabled.
    */
    'enabled': boolean;
    /**
    * The list of products that support subscription updates.
    */
    'products': Array<PortalSubscriptionUpdateProduct> | null;
    /**
    * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`.
    */
    'prorationBehavior': PortalSubscriptionUpdate.ProrationBehaviorEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultAllowedUpdates",
            "baseName": "default_allowed_updates",
            "type": "Array<PortalSubscriptionUpdate.DefaultAllowedUpdatesEnum>"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<PortalSubscriptionUpdateProduct>"
        },
        {
            "name": "prorationBehavior",
            "baseName": "proration_behavior",
            "type": "PortalSubscriptionUpdate.ProrationBehaviorEnum"
        }    ];

    static getAttributeTypeMap() {
        return PortalSubscriptionUpdate.attributeTypeMap;
    }
}

export namespace PortalSubscriptionUpdate {
    export enum DefaultAllowedUpdatesEnum {
        Price = <any> 'price',
        PromotionCode = <any> 'promotion_code',
        Quantity = <any> 'quantity'
    }
    export enum ProrationBehaviorEnum {
        AlwaysInvoice = <any> 'always_invoice',
        CreateProrations = <any> 'create_prorations',
        None = <any> 'none'
    }
}
