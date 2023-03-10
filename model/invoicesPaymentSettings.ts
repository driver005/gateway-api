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
import { InvoicesPaymentSettingsPaymentMethodOptions } from './invoicesPaymentSettingsPaymentMethodOptions';

/**
* 
*/
export class InvoicesPaymentSettings {
    /**
    * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice\'s default_payment_method or default_source, if set.
    */
    'defaultMandate': string | null;
    'paymentMethodOptions': InvoicesPaymentSettingsPaymentMethodOptions | null;
    /**
    * The list of payment method types (e.g. card) to provide to the invoice’s PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
    */
    'paymentMethodTypes': Array<InvoicesPaymentSettings.PaymentMethodTypesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultMandate",
            "baseName": "default_mandate",
            "type": "string"
        },
        {
            "name": "paymentMethodOptions",
            "baseName": "payment_method_options",
            "type": "InvoicesPaymentSettingsPaymentMethodOptions"
        },
        {
            "name": "paymentMethodTypes",
            "baseName": "payment_method_types",
            "type": "Array<InvoicesPaymentSettings.PaymentMethodTypesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return InvoicesPaymentSettings.attributeTypeMap;
    }
}

export namespace InvoicesPaymentSettings {
    export enum PaymentMethodTypesEnum {
        AchCreditTransfer = <any> 'ach_credit_transfer',
        AchDebit = <any> 'ach_debit',
        AcssDebit = <any> 'acss_debit',
        AuBecsDebit = <any> 'au_becs_debit',
        BacsDebit = <any> 'bacs_debit',
        Bancontact = <any> 'bancontact',
        Boleto = <any> 'boleto',
        Card = <any> 'card',
        CustomerBalance = <any> 'customer_balance',
        Fpx = <any> 'fpx',
        Giropay = <any> 'giropay',
        Grabpay = <any> 'grabpay',
        Ideal = <any> 'ideal',
        Konbini = <any> 'konbini',
        Link = <any> 'link',
        Paynow = <any> 'paynow',
        Promptpay = <any> 'promptpay',
        SepaCreditTransfer = <any> 'sepa_credit_transfer',
        SepaDebit = <any> 'sepa_debit',
        Sofort = <any> 'sofort',
        UsBankAccount = <any> 'us_bank_account',
        WechatPay = <any> 'wechat_pay'
    }
}
