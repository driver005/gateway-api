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
import { FundingInstructionsBankTransfer } from './fundingInstructionsBankTransfer';

/**
* Each customer has a [`balance`](https://stripe.com/docs/api/customers/object#customer_object-balance) that is automatically applied to future invoices and payments using the `customer_balance` payment method. Customers can fund this balance by initiating a bank transfer to any account in the `financial_addresses` field. Related guide: [Customer Balance - Funding Instructions](https://stripe.com/docs/payments/customer-balance/funding-instructions) to learn more
*/
export class FundingInstructions {
    'bankTransfer': FundingInstructionsBankTransfer;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * The `funding_type` of the returned instructions
    */
    'fundingType': FundingInstructions.FundingTypeEnum;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': FundingInstructions.ObjectEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankTransfer",
            "baseName": "bank_transfer",
            "type": "FundingInstructionsBankTransfer"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "fundingType",
            "baseName": "funding_type",
            "type": "FundingInstructions.FundingTypeEnum"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "FundingInstructions.ObjectEnum"
        }    ];

    static getAttributeTypeMap() {
        return FundingInstructions.attributeTypeMap;
    }
}

export namespace FundingInstructions {
    export enum FundingTypeEnum {
        BankTransfer = <any> 'bank_transfer'
    }
    export enum ObjectEnum {
        FundingInstructions = <any> 'funding_instructions'
    }
}
