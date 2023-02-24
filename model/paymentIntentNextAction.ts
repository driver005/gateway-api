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
import { PaymentIntentNextActionAlipayHandleRedirect } from './paymentIntentNextActionAlipayHandleRedirect';
import { PaymentIntentNextActionBoleto } from './paymentIntentNextActionBoleto';
import { PaymentIntentNextActionCardAwaitNotification } from './paymentIntentNextActionCardAwaitNotification';
import { PaymentIntentNextActionDisplayBankTransferInstructions } from './paymentIntentNextActionDisplayBankTransferInstructions';
import { PaymentIntentNextActionDisplayOxxoDetails } from './paymentIntentNextActionDisplayOxxoDetails';
import { PaymentIntentNextActionKonbini } from './paymentIntentNextActionKonbini';
import { PaymentIntentNextActionPaynowDisplayQrCode } from './paymentIntentNextActionPaynowDisplayQrCode';
import { PaymentIntentNextActionPixDisplayQrCode } from './paymentIntentNextActionPixDisplayQrCode';
import { PaymentIntentNextActionPromptpayDisplayQrCode } from './paymentIntentNextActionPromptpayDisplayQrCode';
import { PaymentIntentNextActionRedirectToUrl } from './paymentIntentNextActionRedirectToUrl';
import { PaymentIntentNextActionVerifyWithMicrodeposits } from './paymentIntentNextActionVerifyWithMicrodeposits';
import { PaymentIntentNextActionWechatPayDisplayQrCode } from './paymentIntentNextActionWechatPayDisplayQrCode';
import { PaymentIntentNextActionWechatPayRedirectToAndroidApp } from './paymentIntentNextActionWechatPayRedirectToAndroidApp';
import { PaymentIntentNextActionWechatPayRedirectToIosApp } from './paymentIntentNextActionWechatPayRedirectToIosApp';

/**
* 
*/
export class PaymentIntentNextAction {
    'alipayHandleRedirect'?: PaymentIntentNextActionAlipayHandleRedirect;
    'boletoDisplayDetails'?: PaymentIntentNextActionBoleto;
    'cardAwaitNotification'?: PaymentIntentNextActionCardAwaitNotification;
    'displayBankTransferInstructions'?: PaymentIntentNextActionDisplayBankTransferInstructions;
    'konbiniDisplayDetails'?: PaymentIntentNextActionKonbini;
    'oxxoDisplayDetails'?: PaymentIntentNextActionDisplayOxxoDetails;
    'paynowDisplayQrCode'?: PaymentIntentNextActionPaynowDisplayQrCode;
    'pixDisplayQrCode'?: PaymentIntentNextActionPixDisplayQrCode;
    'promptpayDisplayQrCode'?: PaymentIntentNextActionPromptpayDisplayQrCode;
    'redirectToUrl'?: PaymentIntentNextActionRedirectToUrl;
    /**
    * Type of the next action to perform, one of `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
    */
    'type': string;
    /**
    * When confirming a PaymentIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
    */
    'useStripeSdk'?: object;
    'verifyWithMicrodeposits'?: PaymentIntentNextActionVerifyWithMicrodeposits;
    'wechatPayDisplayQrCode'?: PaymentIntentNextActionWechatPayDisplayQrCode;
    'wechatPayRedirectToAndroidApp'?: PaymentIntentNextActionWechatPayRedirectToAndroidApp;
    'wechatPayRedirectToIosApp'?: PaymentIntentNextActionWechatPayRedirectToIosApp;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alipayHandleRedirect",
            "baseName": "alipay_handle_redirect",
            "type": "PaymentIntentNextActionAlipayHandleRedirect"
        },
        {
            "name": "boletoDisplayDetails",
            "baseName": "boleto_display_details",
            "type": "PaymentIntentNextActionBoleto"
        },
        {
            "name": "cardAwaitNotification",
            "baseName": "card_await_notification",
            "type": "PaymentIntentNextActionCardAwaitNotification"
        },
        {
            "name": "displayBankTransferInstructions",
            "baseName": "display_bank_transfer_instructions",
            "type": "PaymentIntentNextActionDisplayBankTransferInstructions"
        },
        {
            "name": "konbiniDisplayDetails",
            "baseName": "konbini_display_details",
            "type": "PaymentIntentNextActionKonbini"
        },
        {
            "name": "oxxoDisplayDetails",
            "baseName": "oxxo_display_details",
            "type": "PaymentIntentNextActionDisplayOxxoDetails"
        },
        {
            "name": "paynowDisplayQrCode",
            "baseName": "paynow_display_qr_code",
            "type": "PaymentIntentNextActionPaynowDisplayQrCode"
        },
        {
            "name": "pixDisplayQrCode",
            "baseName": "pix_display_qr_code",
            "type": "PaymentIntentNextActionPixDisplayQrCode"
        },
        {
            "name": "promptpayDisplayQrCode",
            "baseName": "promptpay_display_qr_code",
            "type": "PaymentIntentNextActionPromptpayDisplayQrCode"
        },
        {
            "name": "redirectToUrl",
            "baseName": "redirect_to_url",
            "type": "PaymentIntentNextActionRedirectToUrl"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "useStripeSdk",
            "baseName": "use_stripe_sdk",
            "type": "object"
        },
        {
            "name": "verifyWithMicrodeposits",
            "baseName": "verify_with_microdeposits",
            "type": "PaymentIntentNextActionVerifyWithMicrodeposits"
        },
        {
            "name": "wechatPayDisplayQrCode",
            "baseName": "wechat_pay_display_qr_code",
            "type": "PaymentIntentNextActionWechatPayDisplayQrCode"
        },
        {
            "name": "wechatPayRedirectToAndroidApp",
            "baseName": "wechat_pay_redirect_to_android_app",
            "type": "PaymentIntentNextActionWechatPayRedirectToAndroidApp"
        },
        {
            "name": "wechatPayRedirectToIosApp",
            "baseName": "wechat_pay_redirect_to_ios_app",
            "type": "PaymentIntentNextActionWechatPayRedirectToIosApp"
        }    ];

    static getAttributeTypeMap() {
        return PaymentIntentNextAction.attributeTypeMap;
    }
}

