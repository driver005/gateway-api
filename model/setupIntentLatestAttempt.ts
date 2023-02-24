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
import { SetupAttempt } from './setupAttempt';
import { SetupAttemptApplication } from './setupAttemptApplication';
import { SetupAttemptCustomer } from './setupAttemptCustomer';
import { SetupAttemptOnBehalfOf } from './setupAttemptOnBehalfOf';
import { SetupAttemptPaymentMethod } from './setupAttemptPaymentMethod';
import { SetupAttemptPaymentMethodDetails } from './setupAttemptPaymentMethodDetails';
import { SetupAttemptSetupError } from './setupAttemptSetupError';
import { SetupAttemptSetupIntent } from './setupAttemptSetupIntent';

/**
* The most recent SetupAttempt for this SetupIntent.
*/
export class SetupIntentLatestAttempt {
    'application': SetupAttemptApplication | null;
    /**
    * If present, the SetupIntent\'s payment method will be attached to the in-context Stripe Account.  It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
    */
    'attachToSelf'?: boolean;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'customer': SetupAttemptCustomer | null;
    /**
    * Indicates the directions of money movement for which this payment method is intended to be used.  Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
    */
    'flowDirections': Array<SetupIntentLatestAttempt.FlowDirectionsEnum>;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': SetupIntentLatestAttempt.ObjectEnum;
    'onBehalfOf': SetupAttemptOnBehalfOf | null;
    'paymentMethod': SetupAttemptPaymentMethod;
    'paymentMethodDetails': SetupAttemptPaymentMethodDetails;
    'setupError': SetupAttemptSetupError | null;
    'setupIntent': SetupAttemptSetupIntent;
    /**
    * Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`.
    */
    'status': string;
    /**
    * The value of [usage](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`.
    */
    'usage': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "SetupAttemptApplication"
        },
        {
            "name": "attachToSelf",
            "baseName": "attach_to_self",
            "type": "boolean"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "SetupAttemptCustomer"
        },
        {
            "name": "flowDirections",
            "baseName": "flow_directions",
            "type": "Array<SetupIntentLatestAttempt.FlowDirectionsEnum>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "SetupIntentLatestAttempt.ObjectEnum"
        },
        {
            "name": "onBehalfOf",
            "baseName": "on_behalf_of",
            "type": "SetupAttemptOnBehalfOf"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "SetupAttemptPaymentMethod"
        },
        {
            "name": "paymentMethodDetails",
            "baseName": "payment_method_details",
            "type": "SetupAttemptPaymentMethodDetails"
        },
        {
            "name": "setupError",
            "baseName": "setup_error",
            "type": "SetupAttemptSetupError"
        },
        {
            "name": "setupIntent",
            "baseName": "setup_intent",
            "type": "SetupAttemptSetupIntent"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SetupIntentLatestAttempt.attributeTypeMap;
    }
}

export namespace SetupIntentLatestAttempt {
    export enum FlowDirectionsEnum {
        Inbound = <any> 'inbound',
        Outbound = <any> 'outbound'
    }
    export enum ObjectEnum {
        SetupAttempt = <any> 'setup_attempt'
    }
}
