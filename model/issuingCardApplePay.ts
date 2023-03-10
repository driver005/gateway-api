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
export class IssuingCardApplePay {
    /**
    * Apple Pay Eligibility
    */
    'eligible': boolean;
    /**
    * Reason the card is ineligible for Apple Pay
    */
    'ineligibleReason': IssuingCardApplePay.IneligibleReasonEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eligible",
            "baseName": "eligible",
            "type": "boolean"
        },
        {
            "name": "ineligibleReason",
            "baseName": "ineligible_reason",
            "type": "IssuingCardApplePay.IneligibleReasonEnum"
        }    ];

    static getAttributeTypeMap() {
        return IssuingCardApplePay.attributeTypeMap;
    }
}

export namespace IssuingCardApplePay {
    export enum IneligibleReasonEnum {
        MissingAgreement = <any> 'missing_agreement',
        MissingCardholderContact = <any> 'missing_cardholder_contact',
        UnsupportedRegion = <any> 'unsupported_region'
    }
}
