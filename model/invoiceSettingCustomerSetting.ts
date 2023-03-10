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
import { InvoiceSettingCustomField } from './invoiceSettingCustomField';
import { InvoiceSettingCustomerSettingDefaultPaymentMethod } from './invoiceSettingCustomerSettingDefaultPaymentMethod';
import { InvoiceSettingCustomerSettingRenderingOptions } from './invoiceSettingCustomerSettingRenderingOptions';

/**
* 
*/
export class InvoiceSettingCustomerSetting {
    /**
    * Default custom fields to be displayed on invoices for this customer.
    */
    'customFields': Array<InvoiceSettingCustomField> | null;
    'defaultPaymentMethod': InvoiceSettingCustomerSettingDefaultPaymentMethod | null;
    /**
    * Default footer to be displayed on invoices for this customer.
    */
    'footer': string | null;
    'renderingOptions': InvoiceSettingCustomerSettingRenderingOptions | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<InvoiceSettingCustomField>"
        },
        {
            "name": "defaultPaymentMethod",
            "baseName": "default_payment_method",
            "type": "InvoiceSettingCustomerSettingDefaultPaymentMethod"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "renderingOptions",
            "baseName": "rendering_options",
            "type": "InvoiceSettingCustomerSettingRenderingOptions"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceSettingCustomerSetting.attributeTypeMap;
    }
}

