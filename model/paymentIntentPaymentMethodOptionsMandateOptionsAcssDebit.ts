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

/**
* 
*/
export class PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit {
    /**
    * A URL for custom mandate text
    */
    'customMandateUrl'?: string;
    /**
    * Description of the interval. Only required if the \'payment_schedule\' parameter is \'interval\' or \'combined\'.
    */
    'intervalDescription': string | null;
    /**
    * Payment schedule for the mandate.
    */
    'paymentSchedule': PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit.PaymentScheduleEnum;
    /**
    * Transaction type of the mandate.
    */
    'transactionType': PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit.TransactionTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customMandateUrl",
            "baseName": "custom_mandate_url",
            "type": "string"
        },
        {
            "name": "intervalDescription",
            "baseName": "interval_description",
            "type": "string"
        },
        {
            "name": "paymentSchedule",
            "baseName": "payment_schedule",
            "type": "PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit.PaymentScheduleEnum"
        },
        {
            "name": "transactionType",
            "baseName": "transaction_type",
            "type": "PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit.TransactionTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit.attributeTypeMap;
    }
}

export namespace PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit {
    export enum PaymentScheduleEnum {
        Combined = <any> 'combined',
        Interval = <any> 'interval',
        Sporadic = <any> 'sporadic'
    }
    export enum TransactionTypeEnum {
        Business = <any> 'business',
        Personal = <any> 'personal'
    }
}
