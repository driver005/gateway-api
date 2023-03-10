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
export class PaymentPagesCheckoutSessionAfterExpirationRecovery {
    /**
    * Enables user redeemable promotion codes on the recovered Checkout Sessions. Defaults to `false`
    */
    'allowPromotionCodes': boolean;
    /**
    * If `true`, a recovery url will be generated to recover this Checkout Session if it expires before a transaction is completed. It will be attached to the Checkout Session object upon expiration.
    */
    'enabled': boolean;
    /**
    * The timestamp at which the recovery URL will expire.
    */
    'expiresAt': number | null;
    /**
    * URL that creates a new Checkout Session when clicked that is a copy of this expired Checkout Session
    */
    'url': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowPromotionCodes",
            "baseName": "allow_promotion_codes",
            "type": "boolean"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentPagesCheckoutSessionAfterExpirationRecovery.attributeTypeMap;
    }
}

