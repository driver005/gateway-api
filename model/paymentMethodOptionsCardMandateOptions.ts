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
export class PaymentMethodOptionsCardMandateOptions {
    /**
    * Amount to be charged for future payments.
    */
    'amount': number;
    /**
    * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
    */
    'amountType': PaymentMethodOptionsCardMandateOptions.AmountTypeEnum;
    /**
    * A description of the mandate or subscription that is meant to be displayed to the customer.
    */
    'description': string | null;
    /**
    * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
    */
    'endDate': number | null;
    /**
    * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
    */
    'interval': PaymentMethodOptionsCardMandateOptions.IntervalEnum;
    /**
    * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
    */
    'intervalCount': number | null;
    /**
    * Unique identifier for the mandate or subscription.
    */
    'reference': string;
    /**
    * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
    */
    'startDate': number;
    /**
    * Specifies the type of mandates supported. Possible values are `india`.
    */
    'supportedTypes': Array<PaymentMethodOptionsCardMandateOptions.SupportedTypesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountType",
            "baseName": "amount_type",
            "type": "PaymentMethodOptionsCardMandateOptions.AmountTypeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "number"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "PaymentMethodOptionsCardMandateOptions.IntervalEnum"
        },
        {
            "name": "intervalCount",
            "baseName": "interval_count",
            "type": "number"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "number"
        },
        {
            "name": "supportedTypes",
            "baseName": "supported_types",
            "type": "Array<PaymentMethodOptionsCardMandateOptions.SupportedTypesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodOptionsCardMandateOptions.attributeTypeMap;
    }
}

export namespace PaymentMethodOptionsCardMandateOptions {
    export enum AmountTypeEnum {
        Fixed = <any> 'fixed',
        Maximum = <any> 'maximum'
    }
    export enum IntervalEnum {
        Day = <any> 'day',
        Month = <any> 'month',
        Sporadic = <any> 'sporadic',
        Week = <any> 'week',
        Year = <any> 'year'
    }
    export enum SupportedTypesEnum {
        India = <any> 'india'
    }
}
