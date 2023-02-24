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
import { InvoicePaymentMethodOptionsUsBankAccount } from './invoicePaymentMethodOptionsUsBankAccount';
import { InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions } from './invoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions';

/**
* This sub-hash contains details about the ACH direct debit payment method options to pass to invoices created by the subscription.
*/
export class SubscriptionsResourcePaymentMethodOptionsUsBankAccount {
    'financialConnections'?: InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions;
    /**
    * Bank account verification method.
    */
    'verificationMethod'?: SubscriptionsResourcePaymentMethodOptionsUsBankAccount.VerificationMethodEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "financialConnections",
            "baseName": "financial_connections",
            "type": "InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions"
        },
        {
            "name": "verificationMethod",
            "baseName": "verification_method",
            "type": "SubscriptionsResourcePaymentMethodOptionsUsBankAccount.VerificationMethodEnum"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionsResourcePaymentMethodOptionsUsBankAccount.attributeTypeMap;
    }
}

export namespace SubscriptionsResourcePaymentMethodOptionsUsBankAccount {
    export enum VerificationMethodEnum {
        Automatic = <any> 'automatic',
        Instant = <any> 'instant',
        Microdeposits = <any> 'microdeposits'
    }
}
