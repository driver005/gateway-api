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
import { InboundTransfers } from './inboundTransfers';
import { InboundTransfersPaymentMethodDetailsUsBankAccount } from './inboundTransfersPaymentMethodDetailsUsBankAccount';
import { TreasurySharedResourceBillingDetails } from './treasurySharedResourceBillingDetails';

/**
* Details about the PaymentMethod for an InboundTransfer.
*/
export class TreasuryInboundTransferOriginPaymentMethodDetails {
    'billingDetails': TreasurySharedResourceBillingDetails;
    /**
    * The type of the payment method used in the InboundTransfer.
    */
    'type': TreasuryInboundTransferOriginPaymentMethodDetails.TypeEnum;
    'usBankAccount'?: InboundTransfersPaymentMethodDetailsUsBankAccount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingDetails",
            "baseName": "billing_details",
            "type": "TreasurySharedResourceBillingDetails"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TreasuryInboundTransferOriginPaymentMethodDetails.TypeEnum"
        },
        {
            "name": "usBankAccount",
            "baseName": "us_bank_account",
            "type": "InboundTransfersPaymentMethodDetailsUsBankAccount"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryInboundTransferOriginPaymentMethodDetails.attributeTypeMap;
    }
}

export namespace TreasuryInboundTransferOriginPaymentMethodDetails {
    export enum TypeEnum {
        UsBankAccount = <any> 'us_bank_account'
    }
}
