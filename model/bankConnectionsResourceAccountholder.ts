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
import { BankConnectionsResourceAccountholderAccount } from './bankConnectionsResourceAccountholderAccount';
import { BankConnectionsResourceAccountholderCustomer } from './bankConnectionsResourceAccountholderCustomer';

/**
* 
*/
export class BankConnectionsResourceAccountholder {
    'account'?: BankConnectionsResourceAccountholderAccount;
    'customer'?: BankConnectionsResourceAccountholderCustomer;
    /**
    * Type of account holder that this account belongs to.
    */
    'type': BankConnectionsResourceAccountholder.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "BankConnectionsResourceAccountholderAccount"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "BankConnectionsResourceAccountholderCustomer"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BankConnectionsResourceAccountholder.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BankConnectionsResourceAccountholder.attributeTypeMap;
    }
}

export namespace BankConnectionsResourceAccountholder {
    export enum TypeEnum {
        Account = <any> 'account',
        Customer = <any> 'customer'
    }
}
