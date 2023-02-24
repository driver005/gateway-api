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
import { MandateOptionsParamCustomMandateUrl } from './mandateOptionsParamCustomMandateUrl';

/**
* Additional fields for Mandate creation
*/
export class MandateOptionsParam {
    'customMandateUrl'?: MandateOptionsParamCustomMandateUrl;
    /**
    * List of Stripe products where this mandate can be selected automatically. Only usable in `setup` mode.
    */
    'defaultFor'?: Array<MandateOptionsParam.DefaultForEnum>;
    /**
    * Description of the mandate interval. Only required if \'payment_schedule\' parameter is \'interval\' or \'combined\'.
    */
    'intervalDescription'?: string;
    /**
    * Payment schedule for the mandate.
    */
    'paymentSchedule'?: MandateOptionsParam.PaymentScheduleEnum;
    /**
    * Transaction type of the mandate.
    */
    'transactionType'?: MandateOptionsParam.TransactionTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customMandateUrl",
            "baseName": "custom_mandate_url",
            "type": "MandateOptionsParamCustomMandateUrl"
        },
        {
            "name": "defaultFor",
            "baseName": "default_for",
            "type": "Array<MandateOptionsParam.DefaultForEnum>"
        },
        {
            "name": "intervalDescription",
            "baseName": "interval_description",
            "type": "string"
        },
        {
            "name": "paymentSchedule",
            "baseName": "payment_schedule",
            "type": "MandateOptionsParam.PaymentScheduleEnum"
        },
        {
            "name": "transactionType",
            "baseName": "transaction_type",
            "type": "MandateOptionsParam.TransactionTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return MandateOptionsParam.attributeTypeMap;
    }
}

export namespace MandateOptionsParam {
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
