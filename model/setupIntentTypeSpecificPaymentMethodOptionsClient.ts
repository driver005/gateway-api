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
export class SetupIntentTypeSpecificPaymentMethodOptionsClient {
    /**
    * Bank account verification method.
    */
    'verificationMethod'?: SetupIntentTypeSpecificPaymentMethodOptionsClient.VerificationMethodEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "verificationMethod",
            "baseName": "verification_method",
            "type": "SetupIntentTypeSpecificPaymentMethodOptionsClient.VerificationMethodEnum"
        }    ];

    static getAttributeTypeMap() {
        return SetupIntentTypeSpecificPaymentMethodOptionsClient.attributeTypeMap;
    }
}

export namespace SetupIntentTypeSpecificPaymentMethodOptionsClient {
    export enum VerificationMethodEnum {
        Automatic = <any> 'automatic',
        Instant = <any> 'instant',
        Microdeposits = <any> 'microdeposits'
    }
}