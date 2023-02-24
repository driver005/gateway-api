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
import { IssuingCardholderIndividual } from './issuingCardholderIndividual';
import { IssuingCardholderIndividualCardIssuing } from './issuingCardholderIndividualCardIssuing';
import { IssuingCardholderIndividualDob1 } from './issuingCardholderIndividualDob1';
import { IssuingCardholderIndividualVerification } from './issuingCardholderIndividualVerification';

/**
* Additional information about an `individual` cardholder.
*/
export class IssuingCardholderIndividual1 {
    'cardIssuing': IssuingCardholderIndividualCardIssuing | null;
    'dob': IssuingCardholderIndividualDob1 | null;
    /**
    * The first name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
    */
    'firstName': string | null;
    /**
    * The last name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
    */
    'lastName': string | null;
    'verification': IssuingCardholderIndividualVerification | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardIssuing",
            "baseName": "card_issuing",
            "type": "IssuingCardholderIndividualCardIssuing"
        },
        {
            "name": "dob",
            "baseName": "dob",
            "type": "IssuingCardholderIndividualDob1"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "IssuingCardholderIndividualVerification"
        }    ];

    static getAttributeTypeMap() {
        return IssuingCardholderIndividual1.attributeTypeMap;
    }
}
