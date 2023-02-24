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
import { CheckoutCustomerBalanceBankTransferPaymentMethodOptions } from './checkoutCustomerBalanceBankTransferPaymentMethodOptions';

/**
* 
*/
export class CheckoutCustomerBalancePaymentMethodOptions {
    'bankTransfer'?: CheckoutCustomerBalanceBankTransferPaymentMethodOptions;
    /**
    * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
    */
    'fundingType': CheckoutCustomerBalancePaymentMethodOptions.FundingTypeEnum;
    /**
    * Indicates that you intend to make future payments with this PaymentIntent\'s payment method.  Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent\'s Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.  When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
    */
    'setupFutureUsage'?: CheckoutCustomerBalancePaymentMethodOptions.SetupFutureUsageEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankTransfer",
            "baseName": "bank_transfer",
            "type": "CheckoutCustomerBalanceBankTransferPaymentMethodOptions"
        },
        {
            "name": "fundingType",
            "baseName": "funding_type",
            "type": "CheckoutCustomerBalancePaymentMethodOptions.FundingTypeEnum"
        },
        {
            "name": "setupFutureUsage",
            "baseName": "setup_future_usage",
            "type": "CheckoutCustomerBalancePaymentMethodOptions.SetupFutureUsageEnum"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutCustomerBalancePaymentMethodOptions.attributeTypeMap;
    }
}

export namespace CheckoutCustomerBalancePaymentMethodOptions {
    export enum FundingTypeEnum {
        BankTransfer = <any> 'bank_transfer'
    }
    export enum SetupFutureUsageEnum {
        None = <any> 'none'
    }
}
