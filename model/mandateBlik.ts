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
import { MandateOptionsOffSessionDetailsBlik } from './mandateOptionsOffSessionDetailsBlik';

/**
* 
*/
export class MandateBlik {
    /**
    * Date at which the mandate expires.
    */
    'expiresAfter': number | null;
    'offSession'?: MandateOptionsOffSessionDetailsBlik;
    /**
    * Type of the mandate.
    */
    'type': MandateBlik.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expiresAfter",
            "baseName": "expires_after",
            "type": "number"
        },
        {
            "name": "offSession",
            "baseName": "off_session",
            "type": "MandateOptionsOffSessionDetailsBlik"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "MandateBlik.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return MandateBlik.attributeTypeMap;
    }
}

export namespace MandateBlik {
    export enum TypeEnum {
        OffSession = <any> 'off_session',
        OnSession = <any> 'on_session'
    }
}
