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
import { TransformUsage } from './transformUsage';

/**
* Apply a transformation to the reported usage or set quantity before computing the amount billed. Cannot be combined with `tiers`.
*/
export class PlanTransformUsage {
    /**
    * Divide usage by this number.
    */
    'divideBy': number;
    /**
    * After division, either round the result `up` or `down`.
    */
    'round': PlanTransformUsage.RoundEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "divideBy",
            "baseName": "divide_by",
            "type": "number"
        },
        {
            "name": "round",
            "baseName": "round",
            "type": "PlanTransformUsage.RoundEnum"
        }    ];

    static getAttributeTypeMap() {
        return PlanTransformUsage.attributeTypeMap;
    }
}

export namespace PlanTransformUsage {
    export enum RoundEnum {
        Down = <any> 'down',
        Up = <any> 'up'
    }
}
