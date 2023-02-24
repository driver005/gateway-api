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
* Sort Code Records contain U.K. bank account details per the sort code format.
*/
export class FundingInstructionsBankTransferSortCodeRecord {
    /**
    * The name of the person or business that owns the bank account
    */
    'accountHolderName': string;
    /**
    * The account number
    */
    'accountNumber': string;
    /**
    * The six-digit sort code
    */
    'sortCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderName",
            "baseName": "account_holder_name",
            "type": "string"
        },
        {
            "name": "accountNumber",
            "baseName": "account_number",
            "type": "string"
        },
        {
            "name": "sortCode",
            "baseName": "sort_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FundingInstructionsBankTransferSortCodeRecord.attributeTypeMap;
    }
}
