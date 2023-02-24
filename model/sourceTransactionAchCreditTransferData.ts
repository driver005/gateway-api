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
export class SourceTransactionAchCreditTransferData {
    /**
    * Customer data associated with the transfer.
    */
    'customerData'?: string;
    /**
    * Bank account fingerprint associated with the transfer.
    */
    'fingerprint'?: string;
    /**
    * Last 4 digits of the account number associated with the transfer.
    */
    'last4'?: string;
    /**
    * Routing number associated with the transfer.
    */
    'routingNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customerData",
            "baseName": "customer_data",
            "type": "string"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "routingNumber",
            "baseName": "routing_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceTransactionAchCreditTransferData.attributeTypeMap;
    }
}
