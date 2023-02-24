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
import { PaymentIntentNextActionKonbiniLawson } from './paymentIntentNextActionKonbiniLawson';

/**
* Lawson instruction details.
*/
export class PaymentIntentNextActionKonbiniStoresLawson {
    /**
    * The confirmation number.
    */
    'confirmationNumber'?: string;
    /**
    * The payment code.
    */
    'paymentCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "confirmationNumber",
            "baseName": "confirmation_number",
            "type": "string"
        },
        {
            "name": "paymentCode",
            "baseName": "payment_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentIntentNextActionKonbiniStoresLawson.attributeTypeMap;
    }
}

