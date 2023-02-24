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
import { CustomerAcceptance } from './customerAcceptance';
import { Mandate } from './mandate';
import { MandatePaymentMethod } from './mandatePaymentMethod';
import { MandatePaymentMethodDetails } from './mandatePaymentMethodDetails';
import { MandateSingleUse } from './mandateSingleUse';

/**
* The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
*/
export class PaymentMethodDetailsBancontactGeneratedSepaDebitMandate {
    'customerAcceptance': CustomerAcceptance;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * 
    */
    'multiUse'?: object;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum;
    'paymentMethod': MandatePaymentMethod;
    'paymentMethodDetails': MandatePaymentMethodDetails;
    'singleUse'?: MandateSingleUse;
    /**
    * The status of the mandate, which indicates whether it can be used to initiate a payment.
    */
    'status': PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.StatusEnum;
    /**
    * The type of the mandate.
    */
    'type': PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customerAcceptance",
            "baseName": "customer_acceptance",
            "type": "CustomerAcceptance"
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
            "name": "multiUse",
            "baseName": "multi_use",
            "type": "object"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "MandatePaymentMethod"
        },
        {
            "name": "paymentMethodDetails",
            "baseName": "payment_method_details",
            "type": "MandatePaymentMethodDetails"
        },
        {
            "name": "singleUse",
            "baseName": "single_use",
            "type": "MandateSingleUse"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.StatusEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.attributeTypeMap;
    }
}

export namespace PaymentMethodDetailsBancontactGeneratedSepaDebitMandate {
    export enum ObjectEnum {
        Mandate = <any> 'mandate'
    }
    export enum StatusEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum TypeEnum {
        MultiUse = <any> 'multi_use',
        SingleUse = <any> 'single_use'
    }
}
