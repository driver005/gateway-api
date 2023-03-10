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
import { IssuingDisputeCanceledEvidenceAdditionalDocumentation } from './issuingDisputeCanceledEvidenceAdditionalDocumentation';

/**
* 
*/
export class IssuingDisputeFraudulentEvidence {
    'additionalDocumentation': IssuingDisputeCanceledEvidenceAdditionalDocumentation | null;
    /**
    * Explanation of why the cardholder is disputing this transaction.
    */
    'explanation': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalDocumentation",
            "baseName": "additional_documentation",
            "type": "IssuingDisputeCanceledEvidenceAdditionalDocumentation"
        },
        {
            "name": "explanation",
            "baseName": "explanation",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IssuingDisputeFraudulentEvidence.attributeTypeMap;
    }
}

