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
export class IssuingCardholderRequirements {
    /**
    * If `disabled_reason` is present, all cards will decline authorizations with `cardholder_verification_required` reason.
    */
    'disabledReason': IssuingCardholderRequirements.DisabledReasonEnum;
    /**
    * Array of fields that need to be collected in order to verify and re-enable the cardholder.
    */
    'pastDue': Array<IssuingCardholderRequirements.PastDueEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "disabledReason",
            "baseName": "disabled_reason",
            "type": "IssuingCardholderRequirements.DisabledReasonEnum"
        },
        {
            "name": "pastDue",
            "baseName": "past_due",
            "type": "Array<IssuingCardholderRequirements.PastDueEnum>"
        }    ];

    static getAttributeTypeMap() {
        return IssuingCardholderRequirements.attributeTypeMap;
    }
}

export namespace IssuingCardholderRequirements {
    export enum DisabledReasonEnum {
        Listed = <any> 'listed',
        RejectedListed = <any> 'rejected.listed',
        UnderReview = <any> 'under_review'
    }
    export enum PastDueEnum {
        CompanyTaxId = <any> 'company.tax_id',
        IndividualDobDay = <any> 'individual.dob.day',
        IndividualDobMonth = <any> 'individual.dob.month',
        IndividualDobYear = <any> 'individual.dob.year',
        IndividualFirstName = <any> 'individual.first_name',
        IndividualLastName = <any> 'individual.last_name',
        IndividualVerificationDocument = <any> 'individual.verification.document'
    }
}
