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
import { CreditNoteLineItemParamsTaxRates } from './creditNoteLineItemParamsTaxRates';

export class CreditNoteLineItemParams {
    /**
    * The line item amount to credit. Only valid when `type` is `invoice_line_item`.
    */
    'amount'?: number;
    /**
    * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
    */
    'description'?: string;
    /**
    * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
    */
    'invoiceLineItem'?: string;
    /**
    * The line item quantity to credit.
    */
    'quantity'?: number;
    'taxRates'?: CreditNoteLineItemParamsTaxRates;
    /**
    * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
    */
    'type': CreditNoteLineItemParams.TypeEnum;
    /**
    * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
    */
    'unitAmount'?: number;
    /**
    * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
    */
    'unitAmountDecimal'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "invoiceLineItem",
            "baseName": "invoice_line_item",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "taxRates",
            "baseName": "tax_rates",
            "type": "CreditNoteLineItemParamsTaxRates"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreditNoteLineItemParams.TypeEnum"
        },
        {
            "name": "unitAmount",
            "baseName": "unit_amount",
            "type": "number"
        },
        {
            "name": "unitAmountDecimal",
            "baseName": "unit_amount_decimal",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreditNoteLineItemParams.attributeTypeMap;
    }
}

export namespace CreditNoteLineItemParams {
    export enum TypeEnum {
        CustomLineItem = <any> 'custom_line_item',
        InvoiceLineItem = <any> 'invoice_line_item'
    }
}