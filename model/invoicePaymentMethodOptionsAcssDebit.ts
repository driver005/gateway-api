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
import { InvoicePaymentMethodOptionsAcssDebitMandateOptions } from './invoicePaymentMethodOptionsAcssDebitMandateOptions';

/**
* 
*/
export class InvoicePaymentMethodOptionsAcssDebit {
    'mandateOptions'?: InvoicePaymentMethodOptionsAcssDebitMandateOptions;
    /**
    * Bank account verification method.
    */
    'verificationMethod'?: InvoicePaymentMethodOptionsAcssDebit.VerificationMethodEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mandateOptions",
            "baseName": "mandate_options",
            "type": "InvoicePaymentMethodOptionsAcssDebitMandateOptions"
        },
        {
            "name": "verificationMethod",
            "baseName": "verification_method",
            "type": "InvoicePaymentMethodOptionsAcssDebit.VerificationMethodEnum"
        }    ];

    static getAttributeTypeMap() {
        return InvoicePaymentMethodOptionsAcssDebit.attributeTypeMap;
    }
}

export namespace InvoicePaymentMethodOptionsAcssDebit {
    export enum VerificationMethodEnum {
        Automatic = <any> 'automatic',
        Instant = <any> 'instant',
        Microdeposits = <any> 'microdeposits'
    }
}
