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

export class LinkedFlowsParam {
    /**
    * The source flow type.
    */
    'sourceFlowType': LinkedFlowsParam.SourceFlowTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sourceFlowType",
            "baseName": "source_flow_type",
            "type": "LinkedFlowsParam.SourceFlowTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return LinkedFlowsParam.attributeTypeMap;
    }
}

export namespace LinkedFlowsParam {
    export enum SourceFlowTypeEnum {
        CreditReversal = <any> 'credit_reversal',
        Other = <any> 'other',
        OutboundPayment = <any> 'outbound_payment',
        Payout = <any> 'payout'
    }
}
