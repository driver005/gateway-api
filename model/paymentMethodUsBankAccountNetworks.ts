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
import { UsBankAccountNetworks } from './usBankAccountNetworks';

/**
* Contains information about US bank account networks that can be used.
*/
export class PaymentMethodUsBankAccountNetworks {
    /**
    * The preferred network.
    */
    'preferred': string | null;
    /**
    * All supported networks.
    */
    'supported': Array<PaymentMethodUsBankAccountNetworks.SupportedEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preferred",
            "baseName": "preferred",
            "type": "string"
        },
        {
            "name": "supported",
            "baseName": "supported",
            "type": "Array<PaymentMethodUsBankAccountNetworks.SupportedEnum>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodUsBankAccountNetworks.attributeTypeMap;
    }
}

export namespace PaymentMethodUsBankAccountNetworks {
    export enum SupportedEnum {
        Ach = <any> 'ach',
        UsDomesticWire = <any> 'us_domestic_wire'
    }
}