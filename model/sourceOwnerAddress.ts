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
import { Address } from './address';

/**
* Owner\'s address.
*/
export class SourceOwnerAddress {
    /**
    * City, district, suburb, town, or village.
    */
    'city': string | null;
    /**
    * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
    */
    'country': string | null;
    /**
    * Address line 1 (e.g., street, PO Box, or company name).
    */
    'line1': string | null;
    /**
    * Address line 2 (e.g., apartment, suite, unit, or building).
    */
    'line2': string | null;
    /**
    * ZIP or postal code.
    */
    'postalCode': string | null;
    /**
    * State, county, province, or region.
    */
    'state': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceOwnerAddress.attributeTypeMap;
    }
}
