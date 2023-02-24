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
import { FeeRefundBalanceTransaction } from './feeRefundBalanceTransaction';
import { TransferReversalDestinationPaymentRefund } from './transferReversalDestinationPaymentRefund';
import { TransferReversalSourceRefund } from './transferReversalSourceRefund';
import { TransferReversalTransfer } from './transferReversalTransfer';

/**
* [Stripe Connect](https://stripe.com/docs/connect) platforms can reverse transfers made to a connected account, either entirely or partially, and can also specify whether to refund any related application fees. Transfer reversals add to the platform\'s balance and subtract from the destination account\'s balance.  Reversing a transfer that was made for a [destination charge](/docs/connect/destination-charges) is allowed only up to the amount of the charge. It is possible to reverse a [transfer_group](https://stripe.com/docs/connect/charges-transfers#transfer-options) transfer only if the destination account has enough balance to cover the reversal.  Related guide: [Reversing Transfers](https://stripe.com/docs/connect/charges-transfers#reversing-transfers).
*/
export class TransferReversal {
    /**
    * Amount, in %s.
    */
    'amount': number;
    'balanceTransaction': FeeRefundBalanceTransaction | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'destinationPaymentRefund': TransferReversalDestinationPaymentRefund | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; } | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': TransferReversal.ObjectEnum;
    'sourceRefund': TransferReversalSourceRefund | null;
    'transfer': TransferReversalTransfer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "balanceTransaction",
            "baseName": "balance_transaction",
            "type": "FeeRefundBalanceTransaction"
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
            "name": "destinationPaymentRefund",
            "baseName": "destination_payment_refund",
            "type": "TransferReversalDestinationPaymentRefund"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "TransferReversal.ObjectEnum"
        },
        {
            "name": "sourceRefund",
            "baseName": "source_refund",
            "type": "TransferReversalSourceRefund"
        },
        {
            "name": "transfer",
            "baseName": "transfer",
            "type": "TransferReversalTransfer"
        }    ];

    static getAttributeTypeMap() {
        return TransferReversal.attributeTypeMap;
    }
}

export namespace TransferReversal {
    export enum ObjectEnum {
        TransferReversal = <any> 'transfer_reversal'
    }
}
