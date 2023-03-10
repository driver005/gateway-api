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
import { PaymentIntentCardProcessing } from './paymentIntentCardProcessing';
import { PaymentIntentProcessing } from './paymentIntentProcessing';

/**
* If present, this property tells you about the processing state of the payment.
*/
export class PaymentIntentProcessing1 {
    'card'?: PaymentIntentCardProcessing;
    /**
    * Type of the payment method for which payment is in `processing` state, one of `card`.
    */
    'type': PaymentIntentProcessing1.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "card",
            "baseName": "card",
            "type": "PaymentIntentCardProcessing"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentIntentProcessing1.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentIntentProcessing1.attributeTypeMap;
    }
}

export namespace PaymentIntentProcessing1 {
    export enum TypeEnum {
        Card = <any> 'card'
    }
}
