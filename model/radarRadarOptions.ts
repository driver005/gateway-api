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
* Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
*/
export class RadarRadarOptions {
    /**
    * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
    */
    'session'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "session",
            "baseName": "session",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RadarRadarOptions.attributeTypeMap;
    }
}

