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
import { IssuingTransactionAmountDetails } from './issuingTransactionAmountDetails';

/**
* Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
*/
export class IssuingTransactionAmountDetails1 {
    /**
    * The fee charged by the ATM for the cash withdrawal.
    */
    'atmFee': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "atmFee",
            "baseName": "atm_fee",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IssuingTransactionAmountDetails1.attributeTypeMap;
    }
}
