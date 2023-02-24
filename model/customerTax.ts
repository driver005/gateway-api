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
import { CustomerTaxLocation1 } from './customerTaxLocation1';

/**
* 
*/
export class CustomerTax {
    /**
    * Surfaces if automatic tax computation is possible given the current customer location information.
    */
    'automaticTax': CustomerTax.AutomaticTaxEnum;
    /**
    * A recent IP address of the customer used for tax reporting and tax location inference.
    */
    'ipAddress': string | null;
    'location': CustomerTaxLocation1 | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "automaticTax",
            "baseName": "automatic_tax",
            "type": "CustomerTax.AutomaticTaxEnum"
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "CustomerTaxLocation1"
        }    ];

    static getAttributeTypeMap() {
        return CustomerTax.attributeTypeMap;
    }
}

export namespace CustomerTax {
    export enum AutomaticTaxEnum {
        Failed = <any> 'failed',
        NotCollecting = <any> 'not_collecting',
        Supported = <any> 'supported',
        UnrecognizedLocation = <any> 'unrecognized_location'
    }
}