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
import { PaymentFlowsAmountDetails } from './paymentFlowsAmountDetails';
import { PaymentIntentApplication } from './paymentIntentApplication';
import { PaymentIntentAutomaticPaymentMethods } from './paymentIntentAutomaticPaymentMethods';
import { PaymentIntentCustomer } from './paymentIntentCustomer';
import { PaymentIntentInvoice } from './paymentIntentInvoice';
import { PaymentIntentLastPaymentError } from './paymentIntentLastPaymentError';
import { PaymentIntentLatestCharge } from './paymentIntentLatestCharge';
import { PaymentIntentNextAction1 } from './paymentIntentNextAction1';
import { PaymentIntentOnBehalfOf } from './paymentIntentOnBehalfOf';
import { PaymentIntentPaymentMethod } from './paymentIntentPaymentMethod';
import { PaymentIntentPaymentMethodOptions1 } from './paymentIntentPaymentMethodOptions1';
import { PaymentIntentProcessing1 } from './paymentIntentProcessing1';
import { PaymentIntentReview } from './paymentIntentReview';
import { PaymentIntentShipping } from './paymentIntentShipping';
import { PaymentIntentSource } from './paymentIntentSource';
import { PaymentIntentTransferData } from './paymentIntentTransferData';

/**
* A PaymentIntent guides you through the process of collecting a payment from your customer. We recommend that you create exactly one PaymentIntent for each order or customer session in your system. You can reference the PaymentIntent later to see the history of payment attempts for a particular session.  A PaymentIntent transitions through [multiple statuses](https://stripe.com/docs/payments/intents#intent-statuses) throughout its lifetime as it interfaces with Stripe.js to perform authentication flows and ultimately creates at most one successful charge.  Related guide: [Payment Intents API](https://stripe.com/docs/payments/payment-intents).
*/
export class PaymentIntent {
    /**
    * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
    */
    'amount': number;
    /**
    * Amount that can be captured from this PaymentIntent.
    */
    'amountCapturable': number;
    'amountDetails'?: PaymentFlowsAmountDetails;
    /**
    * Amount that was collected by this PaymentIntent.
    */
    'amountReceived': number;
    'application': PaymentIntentApplication | null;
    /**
    * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner\'s Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
    */
    'applicationFeeAmount': number | null;
    'automaticPaymentMethods': PaymentIntentAutomaticPaymentMethods | null;
    /**
    * Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. Measured in seconds since the Unix epoch.
    */
    'canceledAt': number | null;
    /**
    * Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, or `automatic`).
    */
    'cancellationReason': PaymentIntent.CancellationReasonEnum;
    /**
    * Controls when the funds will be captured from the customer\'s account.
    */
    'captureMethod': PaymentIntent.CaptureMethodEnum;
    /**
    * The client secret of this PaymentIntent. Used for client-side retrieval using a publishable key.   The client secret can be used to complete a payment from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.  Refer to our docs to [accept a payment](https://stripe.com/docs/payments/accept-a-payment?ui=elements) and learn about how `client_secret` should be handled.
    */
    'clientSecret': string | null;
    'confirmationMethod': PaymentIntent.ConfirmationMethodEnum;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'customer': PaymentIntentCustomer | null;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description': string | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'invoice': PaymentIntentInvoice | null;
    'lastPaymentError': PaymentIntentLastPaymentError | null;
    'latestCharge'?: PaymentIntentLatestCharge | null;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. For more information, see the [documentation](https://stripe.com/docs/payments/payment-intents/creating-payment-intents#storing-information-in-metadata).
    */
    'metadata': { [key: string]: string; };
    'nextAction': PaymentIntentNextAction1 | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': PaymentIntent.ObjectEnum;
    'onBehalfOf': PaymentIntentOnBehalfOf | null;
    'paymentMethod': PaymentIntentPaymentMethod | null;
    'paymentMethodOptions': PaymentIntentPaymentMethodOptions1 | null;
    /**
    * The list of payment method types (e.g. card) that this PaymentIntent is allowed to use.
    */
    'paymentMethodTypes': Array<string>;
    'processing': PaymentIntentProcessing1 | null;
    /**
    * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
    */
    'receiptEmail': string | null;
    'review': PaymentIntentReview | null;
    /**
    * Indicates that you intend to make future payments with this PaymentIntent\'s payment method.  Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent\'s Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.  When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
    */
    'setupFutureUsage': PaymentIntent.SetupFutureUsageEnum;
    'shipping': PaymentIntentShipping | null;
    'source': PaymentIntentSource | null;
    /**
    * For non-card charges, you can use this value as the complete description that appears on your customers’ statements. Must contain at least one letter, maximum 22 characters.
    */
    'statementDescriptor': string | null;
    /**
    * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
    */
    'statementDescriptorSuffix': string | null;
    /**
    * Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. Read more about each PaymentIntent [status](https://stripe.com/docs/payments/intents#intent-statuses).
    */
    'status': PaymentIntent.StatusEnum;
    'transferData': PaymentIntentTransferData | null;
    /**
    * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
    */
    'transferGroup': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountCapturable",
            "baseName": "amount_capturable",
            "type": "number"
        },
        {
            "name": "amountDetails",
            "baseName": "amount_details",
            "type": "PaymentFlowsAmountDetails"
        },
        {
            "name": "amountReceived",
            "baseName": "amount_received",
            "type": "number"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "PaymentIntentApplication"
        },
        {
            "name": "applicationFeeAmount",
            "baseName": "application_fee_amount",
            "type": "number"
        },
        {
            "name": "automaticPaymentMethods",
            "baseName": "automatic_payment_methods",
            "type": "PaymentIntentAutomaticPaymentMethods"
        },
        {
            "name": "canceledAt",
            "baseName": "canceled_at",
            "type": "number"
        },
        {
            "name": "cancellationReason",
            "baseName": "cancellation_reason",
            "type": "PaymentIntent.CancellationReasonEnum"
        },
        {
            "name": "captureMethod",
            "baseName": "capture_method",
            "type": "PaymentIntent.CaptureMethodEnum"
        },
        {
            "name": "clientSecret",
            "baseName": "client_secret",
            "type": "string"
        },
        {
            "name": "confirmationMethod",
            "baseName": "confirmation_method",
            "type": "PaymentIntent.ConfirmationMethodEnum"
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
            "name": "customer",
            "baseName": "customer",
            "type": "PaymentIntentCustomer"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "PaymentIntentInvoice"
        },
        {
            "name": "lastPaymentError",
            "baseName": "last_payment_error",
            "type": "PaymentIntentLastPaymentError"
        },
        {
            "name": "latestCharge",
            "baseName": "latest_charge",
            "type": "PaymentIntentLatestCharge"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "nextAction",
            "baseName": "next_action",
            "type": "PaymentIntentNextAction1"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "PaymentIntent.ObjectEnum"
        },
        {
            "name": "onBehalfOf",
            "baseName": "on_behalf_of",
            "type": "PaymentIntentOnBehalfOf"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "PaymentIntentPaymentMethod"
        },
        {
            "name": "paymentMethodOptions",
            "baseName": "payment_method_options",
            "type": "PaymentIntentPaymentMethodOptions1"
        },
        {
            "name": "paymentMethodTypes",
            "baseName": "payment_method_types",
            "type": "Array<string>"
        },
        {
            "name": "processing",
            "baseName": "processing",
            "type": "PaymentIntentProcessing1"
        },
        {
            "name": "receiptEmail",
            "baseName": "receipt_email",
            "type": "string"
        },
        {
            "name": "review",
            "baseName": "review",
            "type": "PaymentIntentReview"
        },
        {
            "name": "setupFutureUsage",
            "baseName": "setup_future_usage",
            "type": "PaymentIntent.SetupFutureUsageEnum"
        },
        {
            "name": "shipping",
            "baseName": "shipping",
            "type": "PaymentIntentShipping"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "PaymentIntentSource"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "statementDescriptorSuffix",
            "baseName": "statement_descriptor_suffix",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentIntent.StatusEnum"
        },
        {
            "name": "transferData",
            "baseName": "transfer_data",
            "type": "PaymentIntentTransferData"
        },
        {
            "name": "transferGroup",
            "baseName": "transfer_group",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentIntent.attributeTypeMap;
    }
}

export namespace PaymentIntent {
    export enum CancellationReasonEnum {
        Abandoned = <any> 'abandoned',
        Automatic = <any> 'automatic',
        Duplicate = <any> 'duplicate',
        FailedInvoice = <any> 'failed_invoice',
        Fraudulent = <any> 'fraudulent',
        RequestedByCustomer = <any> 'requested_by_customer',
        VoidInvoice = <any> 'void_invoice'
    }
    export enum CaptureMethodEnum {
        Automatic = <any> 'automatic',
        Manual = <any> 'manual'
    }
    export enum ConfirmationMethodEnum {
        Automatic = <any> 'automatic',
        Manual = <any> 'manual'
    }
    export enum ObjectEnum {
        PaymentIntent = <any> 'payment_intent'
    }
    export enum SetupFutureUsageEnum {
        OffSession = <any> 'off_session',
        OnSession = <any> 'on_session'
    }
    export enum StatusEnum {
        Canceled = <any> 'canceled',
        Processing = <any> 'processing',
        RequiresAction = <any> 'requires_action',
        RequiresCapture = <any> 'requires_capture',
        RequiresConfirmation = <any> 'requires_confirmation',
        RequiresPaymentMethod = <any> 'requires_payment_method',
        Succeeded = <any> 'succeeded'
    }
}
