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
import { PaymentLinksResourceCustomFieldsDropdown1 } from './paymentLinksResourceCustomFieldsDropdown1';
import { PaymentLinksResourceCustomFieldsLabel } from './paymentLinksResourceCustomFieldsLabel';

/**
* 
*/
export class PaymentLinksResourceCustomFields {
    'dropdown': PaymentLinksResourceCustomFieldsDropdown1 | null;
    /**
    * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
    */
    'key': string;
    'label': PaymentLinksResourceCustomFieldsLabel;
    /**
    * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
    */
    'optional': boolean;
    /**
    * The type of the field.
    */
    'type': PaymentLinksResourceCustomFields.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dropdown",
            "baseName": "dropdown",
            "type": "PaymentLinksResourceCustomFieldsDropdown1"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "PaymentLinksResourceCustomFieldsLabel"
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentLinksResourceCustomFields.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentLinksResourceCustomFields.attributeTypeMap;
    }
}

export namespace PaymentLinksResourceCustomFields {
    export enum TypeEnum {
        Dropdown = <any> 'dropdown',
        Numeric = <any> 'numeric',
        Text = <any> 'text'
    }
}
