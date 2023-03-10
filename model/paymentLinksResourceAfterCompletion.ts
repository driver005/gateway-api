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
import { PaymentLinksResourceCompletionBehaviorConfirmationPage } from './paymentLinksResourceCompletionBehaviorConfirmationPage';
import { PaymentLinksResourceCompletionBehaviorRedirect } from './paymentLinksResourceCompletionBehaviorRedirect';

/**
* 
*/
export class PaymentLinksResourceAfterCompletion {
    'hostedConfirmation'?: PaymentLinksResourceCompletionBehaviorConfirmationPage;
    'redirect'?: PaymentLinksResourceCompletionBehaviorRedirect;
    /**
    * The specified behavior after the purchase is complete.
    */
    'type': PaymentLinksResourceAfterCompletion.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hostedConfirmation",
            "baseName": "hosted_confirmation",
            "type": "PaymentLinksResourceCompletionBehaviorConfirmationPage"
        },
        {
            "name": "redirect",
            "baseName": "redirect",
            "type": "PaymentLinksResourceCompletionBehaviorRedirect"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentLinksResourceAfterCompletion.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentLinksResourceAfterCompletion.attributeTypeMap;
    }
}

export namespace PaymentLinksResourceAfterCompletion {
    export enum TypeEnum {
        HostedConfirmation = <any> 'hosted_confirmation',
        Redirect = <any> 'redirect'
    }
}
