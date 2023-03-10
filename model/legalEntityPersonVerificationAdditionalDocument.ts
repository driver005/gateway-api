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
import { LegalEntityPersonVerificationDocument } from './legalEntityPersonVerificationDocument';
import { LegalEntityPersonVerificationDocumentBack } from './legalEntityPersonVerificationDocumentBack';
import { LegalEntityPersonVerificationDocumentFront } from './legalEntityPersonVerificationDocumentFront';

/**
* A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
*/
export class LegalEntityPersonVerificationAdditionalDocument {
    'back': LegalEntityPersonVerificationDocumentBack | null;
    /**
    * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say \"Identity document is too unclear to read\".
    */
    'details': string | null;
    /**
    * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
    */
    'detailsCode': string | null;
    'front': LegalEntityPersonVerificationDocumentFront | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "back",
            "baseName": "back",
            "type": "LegalEntityPersonVerificationDocumentBack"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "string"
        },
        {
            "name": "detailsCode",
            "baseName": "details_code",
            "type": "string"
        },
        {
            "name": "front",
            "baseName": "front",
            "type": "LegalEntityPersonVerificationDocumentFront"
        }    ];

    static getAttributeTypeMap() {
        return LegalEntityPersonVerificationAdditionalDocument.attributeTypeMap;
    }
}

