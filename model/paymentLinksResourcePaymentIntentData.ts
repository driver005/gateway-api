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
export class PaymentLinksResourcePaymentIntentData {
    /**
    * Indicates when the funds will be captured from the customer\'s account.
    */
    'captureMethod': PaymentLinksResourcePaymentIntentData.CaptureMethodEnum;
    /**
    * Indicates that you intend to make future payments with the payment method collected during checkout.
    */
    'setupFutureUsage': PaymentLinksResourcePaymentIntentData.SetupFutureUsageEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "captureMethod",
            "baseName": "capture_method",
            "type": "PaymentLinksResourcePaymentIntentData.CaptureMethodEnum"
        },
        {
            "name": "setupFutureUsage",
            "baseName": "setup_future_usage",
            "type": "PaymentLinksResourcePaymentIntentData.SetupFutureUsageEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentLinksResourcePaymentIntentData.attributeTypeMap;
    }
}

export namespace PaymentLinksResourcePaymentIntentData {
    export enum CaptureMethodEnum {
        Automatic = <any> 'automatic',
        Manual = <any> 'manual'
    }
    export enum SetupFutureUsageEnum {
        OffSession = <any> 'off_session',
        OnSession = <any> 'on_session'
    }
}
