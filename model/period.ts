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
export class Period {
    /**
    * The end date of this usage period. All usage up to and including this point in time is included.
    */
    'end': number | null;
    /**
    * The start date of this usage period. All usage after this point in time is included.
    */
    'start': number | null;

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
        return Period.attributeTypeMap;
    }
}

