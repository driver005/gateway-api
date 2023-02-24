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
export class SourceMandateNotificationSepaDebitData {
    /**
    * SEPA creditor ID.
    */
    'creditorIdentifier'?: string;
    /**
    * Last 4 digits of the account number associated with the debit.
    */
    'last4'?: string;
    /**
    * Mandate reference associated with the debit.
    */
    'mandateReference'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "creditorIdentifier",
            "baseName": "creditor_identifier",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "mandateReference",
            "baseName": "mandate_reference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceMandateNotificationSepaDebitData.attributeTypeMap;
    }
}

