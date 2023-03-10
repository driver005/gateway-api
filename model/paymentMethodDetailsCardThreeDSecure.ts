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
import { ThreeDSecureDetails } from './threeDSecureDetails';

/**
* Populated if this transaction used 3D Secure authentication.
*/
export class PaymentMethodDetailsCardThreeDSecure {
    /**
    * For authenticated transactions: how the customer was authenticated by the issuing bank.
    */
    'authenticationFlow': PaymentMethodDetailsCardThreeDSecure.AuthenticationFlowEnum;
    /**
    * Indicates the outcome of 3D Secure authentication.
    */
    'result': PaymentMethodDetailsCardThreeDSecure.ResultEnum;
    /**
    * Additional information about why 3D Secure succeeded or failed based on the `result`.
    */
    'resultReason': PaymentMethodDetailsCardThreeDSecure.ResultReasonEnum;
    /**
    * The version of 3D Secure that was used.
    */
    'version': PaymentMethodDetailsCardThreeDSecure.VersionEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authenticationFlow",
            "baseName": "authentication_flow",
            "type": "PaymentMethodDetailsCardThreeDSecure.AuthenticationFlowEnum"
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "PaymentMethodDetailsCardThreeDSecure.ResultEnum"
        },
        {
            "name": "resultReason",
            "baseName": "result_reason",
            "type": "PaymentMethodDetailsCardThreeDSecure.ResultReasonEnum"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "PaymentMethodDetailsCardThreeDSecure.VersionEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsCardThreeDSecure.attributeTypeMap;
    }
}

export namespace PaymentMethodDetailsCardThreeDSecure {
    export enum AuthenticationFlowEnum {
        Challenge = <any> 'challenge',
        Frictionless = <any> 'frictionless'
    }
    export enum ResultEnum {
        AttemptAcknowledged = <any> 'attempt_acknowledged',
        Authenticated = <any> 'authenticated',
        Exempted = <any> 'exempted',
        Failed = <any> 'failed',
        NotSupported = <any> 'not_supported',
        ProcessingError = <any> 'processing_error'
    }
    export enum ResultReasonEnum {
        Abandoned = <any> 'abandoned',
        Bypassed = <any> 'bypassed',
        Canceled = <any> 'canceled',
        CardNotEnrolled = <any> 'card_not_enrolled',
        NetworkNotSupported = <any> 'network_not_supported',
        ProtocolError = <any> 'protocol_error',
        Rejected = <any> 'rejected'
    }
    export enum VersionEnum {
        _102 = <any> '1.0.2',
        _210 = <any> '2.1.0',
        _220 = <any> '2.2.0'
    }
}
