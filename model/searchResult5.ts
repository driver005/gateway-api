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
import { Product } from './product';

/**
* 
*/
export class SearchResult5 {
    'data': Array<Product>;
    'hasMore': boolean;
    'nextPage': string | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': SearchResult5.ObjectEnum;
    /**
    * The total number of objects that match the query, only accurate up to 10,000.
    */
    'totalCount'?: number;
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Product>"
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "boolean"
        },
        {
            "name": "nextPage",
            "baseName": "next_page",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "SearchResult5.ObjectEnum"
        },
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SearchResult5.attributeTypeMap;
    }
}

export namespace SearchResult5 {
    export enum ObjectEnum {
        SearchResult = <any> 'search_result'
    }
}
