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
* Balance information for the FinancialAccount
*/
export class TreasuryFinancialAccountsResourceBalance {
    /**
    * Funds the user can spend right now.
    */
    'cash': { [key: string]: number; };
    /**
    * Funds not spendable yet, but will become available at a later time.
    */
    'inboundPending': { [key: string]: number; };
    /**
    * Funds in the account, but not spendable because they are being held for pending outbound flows.
    */
    'outboundPending': { [key: string]: number; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cash",
            "baseName": "cash",
            "type": "{ [key: string]: number; }"
        },
        {
            "name": "inboundPending",
            "baseName": "inbound_pending",
            "type": "{ [key: string]: number; }"
        },
        {
            "name": "outboundPending",
            "baseName": "outbound_pending",
            "type": "{ [key: string]: number; }"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryFinancialAccountsResourceBalance.attributeTypeMap;
    }
}

