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
export class PaymentPagesCheckoutSessionConsent {
    /**
    * If `opt_in`, the customer consents to receiving promotional communications from the merchant about this Checkout Session.
    */
    'promotions': PaymentPagesCheckoutSessionConsent.PromotionsEnum;
    /**
    * If `accepted`, the customer in this Checkout Session has agreed to the merchant\'s terms of service.
    */
    'termsOfService': PaymentPagesCheckoutSessionConsent.TermsOfServiceEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "promotions",
            "baseName": "promotions",
            "type": "PaymentPagesCheckoutSessionConsent.PromotionsEnum"
        },
        {
            "name": "termsOfService",
            "baseName": "terms_of_service",
            "type": "PaymentPagesCheckoutSessionConsent.TermsOfServiceEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentPagesCheckoutSessionConsent.attributeTypeMap;
    }
}

export namespace PaymentPagesCheckoutSessionConsent {
    export enum PromotionsEnum {
        In = <any> 'opt_in',
        Out = <any> 'opt_out'
    }
    export enum TermsOfServiceEnum {
        Accepted = <any> 'accepted'
    }
}