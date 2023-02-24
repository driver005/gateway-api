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
import { PortalFlowsFlowAfterCompletion } from './portalFlowsFlowAfterCompletion';
import { PortalFlowsFlowSubscriptionCancel1 } from './portalFlowsFlowSubscriptionCancel1';

/**
* 
*/
export class PortalFlowsFlow {
    'afterCompletion': PortalFlowsFlowAfterCompletion;
    'subscriptionCancel': PortalFlowsFlowSubscriptionCancel1 | null;
    /**
    * Type of flow that the customer will go through.
    */
    'type': PortalFlowsFlow.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "afterCompletion",
            "baseName": "after_completion",
            "type": "PortalFlowsFlowAfterCompletion"
        },
        {
            "name": "subscriptionCancel",
            "baseName": "subscription_cancel",
            "type": "PortalFlowsFlowSubscriptionCancel1"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PortalFlowsFlow.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PortalFlowsFlow.attributeTypeMap;
    }
}

export namespace PortalFlowsFlow {
    export enum TypeEnum {
        PaymentMethodUpdate = <any> 'payment_method_update',
        SubscriptionCancel = <any> 'subscription_cancel'
    }
}