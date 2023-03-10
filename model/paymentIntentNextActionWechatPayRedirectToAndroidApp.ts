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
export class PaymentIntentNextActionWechatPayRedirectToAndroidApp {
    /**
    * app_id is the APP ID registered on WeChat open platform
    */
    'appId': string;
    /**
    * nonce_str is a random string
    */
    'nonceStr': string;
    /**
    * package is static value
    */
    '_package': string;
    /**
    * an unique merchant ID assigned by WeChat Pay
    */
    'partnerId': string;
    /**
    * an unique trading ID assigned by WeChat Pay
    */
    'prepayId': string;
    /**
    * A signature
    */
    'sign': string;
    /**
    * Specifies the current time in epoch format
    */
    'timestamp': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "string"
        },
        {
            "name": "nonceStr",
            "baseName": "nonce_str",
            "type": "string"
        },
        {
            "name": "_package",
            "baseName": "package",
            "type": "string"
        },
        {
            "name": "partnerId",
            "baseName": "partner_id",
            "type": "string"
        },
        {
            "name": "prepayId",
            "baseName": "prepay_id",
            "type": "string"
        },
        {
            "name": "sign",
            "baseName": "sign",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentIntentNextActionWechatPayRedirectToAndroidApp.attributeTypeMap;
    }
}

