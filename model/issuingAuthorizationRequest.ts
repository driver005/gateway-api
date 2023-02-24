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
import { IssuingAuthorizationAmountDetails1 } from './issuingAuthorizationAmountDetails1';

/**
* 
*/
export class IssuingAuthorizationRequest {
    /**
    * The `pending_request.amount` at the time of the request, presented in your card\'s currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved.
    */
    'amount': number;
    'amountDetails': IssuingAuthorizationAmountDetails1 | null;
    /**
    * Whether this request was approved.
    */
    'approved': boolean;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * The `pending_request.merchant_amount` at the time of the request, presented in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
    */
    'merchantAmount': number;
    /**
    * The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'merchantCurrency': string;
    /**
    * When an authorization is approved or declined by you or by Stripe, this field provides additional detail on the reason for the outcome.
    */
    'reason': IssuingAuthorizationRequest.ReasonEnum;
    /**
    * If approve/decline decision is directly responsed to the webhook with json payload and if the response is invalid (e.g., parsing errors), we surface the detailed message via this field.
    */
    'reasonMessage': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountDetails",
            "baseName": "amount_details",
            "type": "IssuingAuthorizationAmountDetails1"
        },
        {
            "name": "approved",
            "baseName": "approved",
            "type": "boolean"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "merchantAmount",
            "baseName": "merchant_amount",
            "type": "number"
        },
        {
            "name": "merchantCurrency",
            "baseName": "merchant_currency",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "IssuingAuthorizationRequest.ReasonEnum"
        },
        {
            "name": "reasonMessage",
            "baseName": "reason_message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IssuingAuthorizationRequest.attributeTypeMap;
    }
}

export namespace IssuingAuthorizationRequest {
    export enum ReasonEnum {
        AccountDisabled = <any> 'account_disabled',
        CardActive = <any> 'card_active',
        CardInactive = <any> 'card_inactive',
        CardholderInactive = <any> 'cardholder_inactive',
        CardholderVerificationRequired = <any> 'cardholder_verification_required',
        InsufficientFunds = <any> 'insufficient_funds',
        NotAllowed = <any> 'not_allowed',
        SpendingControls = <any> 'spending_controls',
        SuspectedFraud = <any> 'suspected_fraud',
        VerificationFailed = <any> 'verification_failed',
        WebhookApproved = <any> 'webhook_approved',
        WebhookDeclined = <any> 'webhook_declined',
        WebhookError = <any> 'webhook_error',
        WebhookTimeout = <any> 'webhook_timeout'
    }
}