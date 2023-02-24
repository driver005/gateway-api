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
import { ApplicationFee } from './applicationFee';
import { ApplicationFeeAccount } from './applicationFeeAccount';
import { ApplicationFeeApplication } from './applicationFeeApplication';
import { ApplicationFeeBalanceTransaction } from './applicationFeeBalanceTransaction';
import { ApplicationFeeCharge } from './applicationFeeCharge';
import { ApplicationFeeOriginatingTransaction } from './applicationFeeOriginatingTransaction';
import { FeeRefundList1 } from './feeRefundList1';

/**
* ID of the application fee that was refunded.
*/
export class FeeRefundFee {
    'account': ApplicationFeeAccount;
    /**
    * Amount earned, in %s.
    */
    'amount': number;
    /**
    * Amount in %s refunded (can be less than the amount attribute on the fee if a partial refund was issued)
    */
    'amountRefunded': number;
    'application': ApplicationFeeApplication;
    'balanceTransaction': ApplicationFeeBalanceTransaction | null;
    'charge': ApplicationFeeCharge;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': FeeRefundFee.ObjectEnum;
    'originatingTransaction': ApplicationFeeOriginatingTransaction | null;
    /**
    * Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
    */
    'refunded': boolean;
    'refunds': FeeRefundList1;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "ApplicationFeeAccount"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountRefunded",
            "baseName": "amount_refunded",
            "type": "number"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationFeeApplication"
        },
        {
            "name": "balanceTransaction",
            "baseName": "balance_transaction",
            "type": "ApplicationFeeBalanceTransaction"
        },
        {
            "name": "charge",
            "baseName": "charge",
            "type": "ApplicationFeeCharge"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "FeeRefundFee.ObjectEnum"
        },
        {
            "name": "originatingTransaction",
            "baseName": "originating_transaction",
            "type": "ApplicationFeeOriginatingTransaction"
        },
        {
            "name": "refunded",
            "baseName": "refunded",
            "type": "boolean"
        },
        {
            "name": "refunds",
            "baseName": "refunds",
            "type": "FeeRefundList1"
        }    ];

    static getAttributeTypeMap() {
        return FeeRefundFee.attributeTypeMap;
    }
}

export namespace FeeRefundFee {
    export enum ObjectEnum {
        ApplicationFee = <any> 'application_fee'
    }
}
