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
import { CheckoutAcssDebitMandateOptions } from './checkoutAcssDebitMandateOptions';

/**
* 
*/
export class CheckoutAcssDebitPaymentMethodOptions {
    /**
    * Currency supported by the bank account. Returned when the Session is in `setup` mode.
    */
    'currency'?: CheckoutAcssDebitPaymentMethodOptions.CurrencyEnum;
    'mandateOptions'?: CheckoutAcssDebitMandateOptions;
    /**
    * Indicates that you intend to make future payments with this PaymentIntent\'s payment method.  Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent\'s Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.  When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
    */
    'setupFutureUsage'?: CheckoutAcssDebitPaymentMethodOptions.SetupFutureUsageEnum;
    /**
    * Bank account verification method.
    */
    'verificationMethod'?: CheckoutAcssDebitPaymentMethodOptions.VerificationMethodEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "CheckoutAcssDebitPaymentMethodOptions.CurrencyEnum"
        },
        {
            "name": "mandateOptions",
            "baseName": "mandate_options",
            "type": "CheckoutAcssDebitMandateOptions"
        },
        {
            "name": "setupFutureUsage",
            "baseName": "setup_future_usage",
            "type": "CheckoutAcssDebitPaymentMethodOptions.SetupFutureUsageEnum"
        },
        {
            "name": "verificationMethod",
            "baseName": "verification_method",
            "type": "CheckoutAcssDebitPaymentMethodOptions.VerificationMethodEnum"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutAcssDebitPaymentMethodOptions.attributeTypeMap;
    }
}

export namespace CheckoutAcssDebitPaymentMethodOptions {
    export enum CurrencyEnum {
        Cad = <any> 'cad',
        Usd = <any> 'usd'
    }
    export enum SetupFutureUsageEnum {
        None = <any> 'none',
        OffSession = <any> 'off_session',
        OnSession = <any> 'on_session'
    }
    export enum VerificationMethodEnum {
        Automatic = <any> 'automatic',
        Instant = <any> 'instant',
        Microdeposits = <any> 'microdeposits'
    }
}
