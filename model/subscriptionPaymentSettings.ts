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
import { SubscriptionsResourcePaymentSettings } from './subscriptionsResourcePaymentSettings';
import { SubscriptionsResourcePaymentSettingsPaymentMethodOptions } from './subscriptionsResourcePaymentSettingsPaymentMethodOptions';

/**
* Payment settings passed on to invoices created by the subscription.
*/
export class SubscriptionPaymentSettings {
    'paymentMethodOptions': SubscriptionsResourcePaymentSettingsPaymentMethodOptions | null;
    /**
    * The list of payment method types to provide to every invoice created by the subscription. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
    */
    'paymentMethodTypes': Array<SubscriptionPaymentSettings.PaymentMethodTypesEnum>;
    /**
    * Either `off`, or `on_subscription`. With `on_subscription` Stripe updates `subscription.default_payment_method` when a subscription payment succeeds.
    */
    'saveDefaultPaymentMethod': SubscriptionPaymentSettings.SaveDefaultPaymentMethodEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentMethodOptions",
            "baseName": "payment_method_options",
            "type": "SubscriptionsResourcePaymentSettingsPaymentMethodOptions"
        },
        {
            "name": "paymentMethodTypes",
            "baseName": "payment_method_types",
            "type": "Array<SubscriptionPaymentSettings.PaymentMethodTypesEnum>"
        },
        {
            "name": "saveDefaultPaymentMethod",
            "baseName": "save_default_payment_method",
            "type": "SubscriptionPaymentSettings.SaveDefaultPaymentMethodEnum"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPaymentSettings.attributeTypeMap;
    }
}

export namespace SubscriptionPaymentSettings {
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
    export enum SaveDefaultPaymentMethodEnum {
        Off = <any> 'off',
        OnSubscription = <any> 'on_subscription'
    }
}