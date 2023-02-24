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
import { IssuingCardholderIdDocument } from './issuingCardholderIdDocument';
import { IssuingCardholderIdDocumentBack } from './issuingCardholderIdDocumentBack';
import { IssuingCardholderIdDocumentFront } from './issuingCardholderIdDocumentFront';

/**
* An identifying document, either a passport or local ID card.
*/
export class IssuingCardholderVerificationDocument {
    'back': IssuingCardholderIdDocumentBack | null;
    'front': IssuingCardholderIdDocumentFront | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "back",
            "baseName": "back",
            "type": "IssuingCardholderIdDocumentBack"
        },
        {
            "name": "front",
            "baseName": "front",
            "type": "IssuingCardholderIdDocumentFront"
        }    ];

    static getAttributeTypeMap() {
        return IssuingCardholderVerificationDocument.attributeTypeMap;
    }
}

