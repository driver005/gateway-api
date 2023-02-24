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
import { OutboundPaymentsPaymentMethodDetailsFinancialAccount } from './outboundPaymentsPaymentMethodDetailsFinancialAccount';
import { OutboundPaymentsPaymentMethodDetailsUsBankAccount } from './outboundPaymentsPaymentMethodDetailsUsBankAccount';
import { TreasurySharedResourceBillingDetails } from './treasurySharedResourceBillingDetails';

/**
* 
*/
export class OutboundPaymentsPaymentMethodDetails {
    'billingDetails': TreasurySharedResourceBillingDetails;
    'financialAccount'?: OutboundPaymentsPaymentMethodDetailsFinancialAccount;
    /**
    * The type of the payment method used in the OutboundPayment.
    */
    'type': OutboundPaymentsPaymentMethodDetails.TypeEnum;
    'usBankAccount'?: OutboundPaymentsPaymentMethodDetailsUsBankAccount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingDetails",
            "baseName": "billing_details",
            "type": "TreasurySharedResourceBillingDetails"
        },
        {
            "name": "financialAccount",
            "baseName": "financial_account",
            "type": "OutboundPaymentsPaymentMethodDetailsFinancialAccount"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "OutboundPaymentsPaymentMethodDetails.TypeEnum"
        },
        {
            "name": "usBankAccount",
            "baseName": "us_bank_account",
            "type": "OutboundPaymentsPaymentMethodDetailsUsBankAccount"
        }    ];

    static getAttributeTypeMap() {
        return OutboundPaymentsPaymentMethodDetails.attributeTypeMap;
    }
}

export namespace OutboundPaymentsPaymentMethodDetails {
    export enum TypeEnum {
        FinancialAccount = <any> 'financial_account',
        UsBankAccount = <any> 'us_bank_account'
    }
}