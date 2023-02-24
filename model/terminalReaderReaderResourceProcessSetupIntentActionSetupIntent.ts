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
import { SetupIntent } from './setupIntent';
import { SetupIntentApplication } from './setupIntentApplication';
import { SetupIntentCustomer } from './setupIntentCustomer';
import { SetupIntentLastSetupError } from './setupIntentLastSetupError';
import { SetupIntentLatestAttempt } from './setupIntentLatestAttempt';
import { SetupIntentMandate } from './setupIntentMandate';
import { SetupIntentNextAction1 } from './setupIntentNextAction1';
import { SetupIntentOnBehalfOf } from './setupIntentOnBehalfOf';
import { SetupIntentPaymentMethod } from './setupIntentPaymentMethod';
import { SetupIntentPaymentMethodOptions1 } from './setupIntentPaymentMethodOptions1';
import { SetupIntentSingleUseMandate } from './setupIntentSingleUseMandate';

/**
* Most recent SetupIntent processed by the reader.
*/
export class TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent {
    'application': SetupIntentApplication | null;
    /**
    * If present, the SetupIntent\'s payment method will be attached to the in-context Stripe Account.  It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
    */
    'attachToSelf'?: boolean;
    /**
    * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
    */
    'cancellationReason': TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.CancellationReasonEnum;
    /**
    * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.  The client secret can be used to complete payment setup from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
    */
    'clientSecret': string | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'customer': SetupIntentCustomer | null;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description': string | null;
    /**
    * Indicates the directions of money movement for which this payment method is intended to be used.  Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
    */
    'flowDirections': Array<TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.FlowDirectionsEnum>;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'lastSetupError': SetupIntentLastSetupError | null;
    'latestAttempt': SetupIntentLatestAttempt | null;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    'mandate': SetupIntentMandate | null;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; } | null;
    'nextAction': SetupIntentNextAction1 | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.ObjectEnum;
    'onBehalfOf': SetupIntentOnBehalfOf | null;
    'paymentMethod': SetupIntentPaymentMethod | null;
    'paymentMethodOptions': SetupIntentPaymentMethodOptions1 | null;
    /**
    * The list of payment method types (e.g. card) that this SetupIntent is allowed to set up.
    */
    'paymentMethodTypes': Array<string>;
    'singleUseMandate': SetupIntentSingleUseMandate | null;
    /**
    * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
    */
    'status': TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.StatusEnum;
    /**
    * Indicates how the payment method is intended to be used in the future.  Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
    */
    'usage': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "SetupIntentApplication"
        },
        {
            "name": "attachToSelf",
            "baseName": "attach_to_self",
            "type": "boolean"
        },
        {
            "name": "cancellationReason",
            "baseName": "cancellation_reason",
            "type": "TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.CancellationReasonEnum"
        },
        {
            "name": "clientSecret",
            "baseName": "client_secret",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "SetupIntentCustomer"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "flowDirections",
            "baseName": "flow_directions",
            "type": "Array<TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.FlowDirectionsEnum>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastSetupError",
            "baseName": "last_setup_error",
            "type": "SetupIntentLastSetupError"
        },
        {
            "name": "latestAttempt",
            "baseName": "latest_attempt",
            "type": "SetupIntentLatestAttempt"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "mandate",
            "baseName": "mandate",
            "type": "SetupIntentMandate"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "nextAction",
            "baseName": "next_action",
            "type": "SetupIntentNextAction1"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.ObjectEnum"
        },
        {
            "name": "onBehalfOf",
            "baseName": "on_behalf_of",
            "type": "SetupIntentOnBehalfOf"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "SetupIntentPaymentMethod"
        },
        {
            "name": "paymentMethodOptions",
            "baseName": "payment_method_options",
            "type": "SetupIntentPaymentMethodOptions1"
        },
        {
            "name": "paymentMethodTypes",
            "baseName": "payment_method_types",
            "type": "Array<string>"
        },
        {
            "name": "singleUseMandate",
            "baseName": "single_use_mandate",
            "type": "SetupIntentSingleUseMandate"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.StatusEnum"
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.attributeTypeMap;
    }
}

export namespace TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent {
    export enum CancellationReasonEnum {
        Abandoned = <any> 'abandoned',
        Duplicate = <any> 'duplicate',
        RequestedByCustomer = <any> 'requested_by_customer'
    }
    export enum FlowDirectionsEnum {
        Inbound = <any> 'inbound',
        Outbound = <any> 'outbound'
    }
    export enum ObjectEnum {
        SetupIntent = <any> 'setup_intent'
    }
    export enum StatusEnum {
        Canceled = <any> 'canceled',
        Processing = <any> 'processing',
        RequiresAction = <any> 'requires_action',
        RequiresConfirmation = <any> 'requires_confirmation',
        RequiresPaymentMethod = <any> 'requires_payment_method',
        Succeeded = <any> 'succeeded'
    }
}
