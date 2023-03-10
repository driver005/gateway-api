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

/**
* You can configure [webhook endpoints](https://stripe.com/docs/webhooks/) via the API to be notified about events that happen in your Stripe account or connected accounts.  Most users configure webhooks from [the dashboard](https://dashboard.stripe.com/webhooks), which provides a user interface for registering and testing your webhook endpoints.  Related guide: [Setting up Webhooks](https://stripe.com/docs/webhooks/configure).
*/
export class WebhookEndpoint {
    /**
    * The API version events are rendered as for this webhook endpoint.
    */
    'apiVersion': string | null;
    /**
    * The ID of the associated Connect application.
    */
    'application': string | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * An optional description of what the webhook is used for.
    */
    'description': string | null;
    /**
    * The list of events to enable for this endpoint. `[\'*\']` indicates that all events are enabled, except those that require explicit selection.
    */
    'enabledEvents': Array<string>;
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
    'metadata': { [key: string]: string; };
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': WebhookEndpoint.ObjectEnum;
    /**
    * The endpoint\'s secret, used to generate [webhook signatures](https://stripe.com/docs/webhooks/signatures). Only returned at creation.
    */
    'secret'?: string;
    /**
    * The status of the webhook. It can be `enabled` or `disabled`.
    */
    'status': string;
    /**
    * The URL of the webhook endpoint.
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "api_version",
            "type": "string"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "enabledEvents",
            "baseName": "enabled_events",
            "type": "Array<string>"
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
            "type": "WebhookEndpoint.ObjectEnum"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEndpoint.attributeTypeMap;
    }
}

export namespace WebhookEndpoint {
    export enum ObjectEnum {
        WebhookEndpoint = <any> 'webhook_endpoint'
    }
}
