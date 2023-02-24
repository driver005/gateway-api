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
export class IssuingCardholderUserTermsAcceptance {
    /**
    * The Unix timestamp marking when the cardholder accepted the Authorized User Terms. Required for Celtic Spend Card users.
    */
    'date': number | null;
    /**
    * The IP address from which the cardholder accepted the Authorized User Terms. Required for Celtic Spend Card users.
    */
    'ip': string | null;
    /**
    * The user agent of the browser from which the cardholder accepted the Authorized User Terms.
    */
    'userAgent': string | null;

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
        return IssuingCardholderUserTermsAcceptance.attributeTypeMap;
    }
}
