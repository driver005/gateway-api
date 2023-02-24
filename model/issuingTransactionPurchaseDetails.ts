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
import { IssuingTransactionPurchaseDetailsFlight } from './issuingTransactionPurchaseDetailsFlight';
import { IssuingTransactionPurchaseDetailsFuel } from './issuingTransactionPurchaseDetailsFuel';
import { IssuingTransactionPurchaseDetailsLodging } from './issuingTransactionPurchaseDetailsLodging';
import { IssuingTransactionReceiptData } from './issuingTransactionReceiptData';

/**
* 
*/
export class IssuingTransactionPurchaseDetails {
    'flight': IssuingTransactionPurchaseDetailsFlight | null;
    'fuel': IssuingTransactionPurchaseDetailsFuel | null;
    'lodging': IssuingTransactionPurchaseDetailsLodging | null;
    /**
    * The line items in the purchase.
    */
    'receipt': Array<IssuingTransactionReceiptData> | null;
    /**
    * A merchant-specific order number.
    */
    'reference': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "flight",
            "baseName": "flight",
            "type": "IssuingTransactionPurchaseDetailsFlight"
        },
        {
            "name": "fuel",
            "baseName": "fuel",
            "type": "IssuingTransactionPurchaseDetailsFuel"
        },
        {
            "name": "lodging",
            "baseName": "lodging",
            "type": "IssuingTransactionPurchaseDetailsLodging"
        },
        {
            "name": "receipt",
            "baseName": "receipt",
            "type": "Array<IssuingTransactionReceiptData>"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IssuingTransactionPurchaseDetails.attributeTypeMap;
    }
}

