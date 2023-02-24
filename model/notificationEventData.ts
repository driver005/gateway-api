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
* 
*/
export class NotificationEventData {
    /**
    * Object containing the API resource relevant to the event. For example, an `invoice.created` event will have a full [invoice object](https://stripe.com/docs/api#invoice_object) as the value of the object key.
    */
    'object': object;
    /**
    * Object containing the names of the attributes that have changed, and their previous values (sent along only with *.updated events).
    */
    'previousAttributes'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "object"
        },
        {
            "name": "previousAttributes",
            "baseName": "previous_attributes",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return NotificationEventData.attributeTypeMap;
    }
}

