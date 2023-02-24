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
import { SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit } from './setupIntentPaymentMethodOptionsMandateOptionsAcssDebit';

/**
* 
*/
export class SetupIntentPaymentMethodOptionsAcssDebit {
    /**
    * Currency supported by the bank account
    */
    'currency': SetupIntentPaymentMethodOptionsAcssDebit.CurrencyEnum;
    'mandateOptions'?: SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit;
    /**
    * Bank account verification method.
    */
    'verificationMethod'?: SetupIntentPaymentMethodOptionsAcssDebit.VerificationMethodEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "SetupIntentPaymentMethodOptionsAcssDebit.CurrencyEnum"
        },
        {
            "name": "mandateOptions",
            "baseName": "mandate_options",
            "type": "SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit"
        },
        {
            "name": "verificationMethod",
            "baseName": "verification_method",
            "type": "SetupIntentPaymentMethodOptionsAcssDebit.VerificationMethodEnum"
        }    ];

    static getAttributeTypeMap() {
        return SetupIntentPaymentMethodOptionsAcssDebit.attributeTypeMap;
    }
}

export namespace SetupIntentPaymentMethodOptionsAcssDebit {
    export enum CurrencyEnum {
        Cad = <any> 'cad',
        Usd = <any> 'usd'
    }
    export enum VerificationMethodEnum {
        Automatic = <any> 'automatic',
        Instant = <any> 'instant',
        Microdeposits = <any> 'microdeposits'
    }
}
