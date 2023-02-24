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
* The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
*/
export class Period1 {
    /**
    * The end of the period, which must be greater than or equal to the start. This value is inclusive.
    */
    'end': number;
    /**
    * The start of the period. This value is inclusive.
    */
    'start': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "end",
            "baseName": "end",
            "type": "number"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Period1.attributeTypeMap;
    }
}
