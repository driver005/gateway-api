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
import { SubscriptionSchedule } from './subscriptionSchedule';
import { SubscriptionScheduleApplication } from './subscriptionScheduleApplication';
import { SubscriptionScheduleCurrentPhase1 } from './subscriptionScheduleCurrentPhase1';
import { SubscriptionScheduleCustomer } from './subscriptionScheduleCustomer';
import { SubscriptionSchedulePhaseConfiguration } from './subscriptionSchedulePhaseConfiguration';
import { SubscriptionScheduleSubscription } from './subscriptionScheduleSubscription';
import { SubscriptionScheduleTestClock } from './subscriptionScheduleTestClock';
import { SubscriptionSchedulesResourceDefaultSettings } from './subscriptionSchedulesResourceDefaultSettings';

/**
* The schedule attached to the subscription
*/
export class SubscriptionSchedule1 {
    'application': SubscriptionScheduleApplication | null;
    /**
    * Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
    */
    'canceledAt': number | null;
    /**
    * Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
    */
    'completedAt': number | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'currentPhase': SubscriptionScheduleCurrentPhase1 | null;
    'customer': SubscriptionScheduleCustomer;
    'defaultSettings': SubscriptionSchedulesResourceDefaultSettings;
    /**
    * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
    */
    'endBehavior': SubscriptionSchedule1.EndBehaviorEnum;
    /**
    * Unique identifier for the object.
    */
    'id': string;
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
    'object': SubscriptionSchedule1.ObjectEnum;
    /**
    * Configuration for the subscription schedule\'s phases.
    */
    'phases': Array<SubscriptionSchedulePhaseConfiguration>;
    /**
    * Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
    */
    'releasedAt': number | null;
    /**
    * ID of the subscription once managed by the subscription schedule (if it is released).
    */
    'releasedSubscription': string | null;
    /**
    * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
    */
    'status': SubscriptionSchedule1.StatusEnum;
    'subscription': SubscriptionScheduleSubscription | null;
    'testClock': SubscriptionScheduleTestClock | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "SubscriptionScheduleApplication"
        },
        {
            "name": "canceledAt",
            "baseName": "canceled_at",
            "type": "number"
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
            "type": "number"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currentPhase",
            "baseName": "current_phase",
            "type": "SubscriptionScheduleCurrentPhase1"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "SubscriptionScheduleCustomer"
        },
        {
            "name": "defaultSettings",
            "baseName": "default_settings",
            "type": "SubscriptionSchedulesResourceDefaultSettings"
        },
        {
            "name": "endBehavior",
            "baseName": "end_behavior",
            "type": "SubscriptionSchedule1.EndBehaviorEnum"
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "SubscriptionSchedule1.ObjectEnum"
        },
        {
            "name": "phases",
            "baseName": "phases",
            "type": "Array<SubscriptionSchedulePhaseConfiguration>"
        },
        {
            "name": "releasedAt",
            "baseName": "released_at",
            "type": "number"
        },
        {
            "name": "releasedSubscription",
            "baseName": "released_subscription",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SubscriptionSchedule1.StatusEnum"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "SubscriptionScheduleSubscription"
        },
        {
            "name": "testClock",
            "baseName": "test_clock",
            "type": "SubscriptionScheduleTestClock"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionSchedule1.attributeTypeMap;
    }
}

export namespace SubscriptionSchedule1 {
    export enum EndBehaviorEnum {
        Cancel = <any> 'cancel',
        None = <any> 'none',
        Release = <any> 'release',
        Renew = <any> 'renew'
    }
    export enum ObjectEnum {
        SubscriptionSchedule = <any> 'subscription_schedule'
    }
    export enum StatusEnum {
        Active = <any> 'active',
        Canceled = <any> 'canceled',
        Completed = <any> 'completed',
        NotStarted = <any> 'not_started',
        Released = <any> 'released'
    }
}
