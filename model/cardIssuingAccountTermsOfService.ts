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
export class CardIssuingAccountTermsOfService {
    /**
    * The Unix timestamp marking when the account representative accepted the service agreement.
    */
    'date': number | null;
    /**
    * The IP address from which the account representative accepted the service agreement.
    */
    'ip': string | null;
    /**
    * The user agent of the browser from which the account representative accepted the service agreement.
    */
    'userAgent'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "number"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        },
        {
            "name": "userAgent",
            "baseName": "user_agent",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CardIssuingAccountTermsOfService.attributeTypeMap;
    }
}

