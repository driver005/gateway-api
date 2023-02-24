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
export class MandateAcssDebit {
    /**
    * List of Stripe products where this mandate can be selected automatically.
    */
    'defaultFor'?: Array<MandateAcssDebit.DefaultForEnum>;
    /**
    * Description of the interval. Only required if the \'payment_schedule\' parameter is \'interval\' or \'combined\'.
    */
    'intervalDescription': string | null;
    /**
    * Payment schedule for the mandate.
    */
    'paymentSchedule': MandateAcssDebit.PaymentScheduleEnum;
    /**
    * Transaction type of the mandate.
    */
    'transactionType': MandateAcssDebit.TransactionTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultFor",
            "baseName": "default_for",
            "type": "Array<MandateAcssDebit.DefaultForEnum>"
        },
        {
            "name": "intervalDescription",
            "baseName": "interval_description",
            "type": "string"
        },
        {
            "name": "paymentSchedule",
            "baseName": "payment_schedule",
            "type": "MandateAcssDebit.PaymentScheduleEnum"
        },
        {
            "name": "transactionType",
            "baseName": "transaction_type",
            "type": "MandateAcssDebit.TransactionTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return MandateAcssDebit.attributeTypeMap;
    }
}

export namespace MandateAcssDebit {
    export enum DefaultForEnum {
        Invoice = <any> 'invoice',
        Subscription = <any> 'subscription'
    }
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
