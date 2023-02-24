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
import { TreasuryTransactionEntry } from './treasuryTransactionEntry';

/**
* A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints.
*/
export class TreasuryTransactionsResourceTransactionEntryList1 {
    /**
    * Details about each object.
    */
    'data': Array<TreasuryTransactionEntry>;
    /**
    * True if this list has another page of items after this one that can be fetched.
    */
    'hasMore': boolean;
    /**
    * String representing the object\'s type. Objects of the same type share the same value. Always has the value `list`.
    */
    'object': TreasuryTransactionsResourceTransactionEntryList1.ObjectEnum;
    /**
    * The URL where this list can be accessed.
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<TreasuryTransactionEntry>"
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "boolean"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "TreasuryTransactionsResourceTransactionEntryList1.ObjectEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryTransactionsResourceTransactionEntryList1.attributeTypeMap;
    }
}

export namespace TreasuryTransactionsResourceTransactionEntryList1 {
    export enum ObjectEnum {
        List = <any> 'list'
    }
}
