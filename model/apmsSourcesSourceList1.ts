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
import { PaymentSource } from './paymentSource';

/**
* The customer\'s payment sources, if any.
*/
export class ApmsSourcesSourceList1 {
    /**
    * Details about each object.
    */
    'data': Array<PaymentSource>;
    /**
    * True if this list has another page of items after this one that can be fetched.
    */
    'hasMore': boolean;
    /**
    * String representing the object\'s type. Objects of the same type share the same value. Always has the value `list`.
    */
    'object': ApmsSourcesSourceList1.ObjectEnum;
    /**
    * The URL where this list can be accessed.
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<PaymentSource>"
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "boolean"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "ApmsSourcesSourceList1.ObjectEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApmsSourcesSourceList1.attributeTypeMap;
    }
}

export namespace ApmsSourcesSourceList1 {
    export enum ObjectEnum {
        List = <any> 'list'
    }
}
