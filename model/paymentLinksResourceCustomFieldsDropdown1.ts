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
import { PaymentLinksResourceCustomFieldsDropdown } from './paymentLinksResourceCustomFieldsDropdown';
import { PaymentLinksResourceCustomFieldsDropdownOption } from './paymentLinksResourceCustomFieldsDropdownOption';

/**
* Configuration for `type=dropdown` fields.
*/
export class PaymentLinksResourceCustomFieldsDropdown1 {
    /**
    * The options available for the customer to select. Up to 200 options allowed.
    */
    'options': Array<PaymentLinksResourceCustomFieldsDropdownOption>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<PaymentLinksResourceCustomFieldsDropdownOption>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentLinksResourceCustomFieldsDropdown1.attributeTypeMap;
    }
}

