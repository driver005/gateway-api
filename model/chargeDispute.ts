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
import { BalanceTransaction } from './balanceTransaction';
import { Dispute } from './dispute';
import { DisputeCharge } from './disputeCharge';
import { DisputeEvidence } from './disputeEvidence';
import { DisputeEvidenceDetails } from './disputeEvidenceDetails';
import { DisputePaymentIntent } from './disputePaymentIntent';

/**
* Details about the dispute if the charge has been disputed.
*/
export class ChargeDispute {
    /**
    * Disputed amount. Usually the amount of the charge, but can differ (usually because of currency fluctuation or because only part of the order is disputed).
    */
    'amount': number;
    /**
    * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
    */
    'balanceTransactions': Array<BalanceTransaction>;
    'charge': DisputeCharge;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'evidence': DisputeEvidence;
    'evidenceDetails': DisputeEvidenceDetails;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * If true, it is still possible to refund the disputed payment. Once the payment has been fully refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute.
    */
    'isChargeRefundable': boolean;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * Network-dependent reason code for the dispute.
    */
    'networkReasonCode'?: string | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': ChargeDispute.ObjectEnum;
    'paymentIntent': DisputePaymentIntent | null;
    /**
    * Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Read more about [dispute reasons](https://stripe.com/docs/disputes/categories).
    */
    'reason': string;
    /**
    * Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, or `lost`.
    */
    'status': ChargeDispute.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "balanceTransactions",
            "baseName": "balance_transactions",
            "type": "Array<BalanceTransaction>"
        },
        {
            "name": "charge",
            "baseName": "charge",
            "type": "DisputeCharge"
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
            "name": "evidence",
            "baseName": "evidence",
            "type": "DisputeEvidence"
        },
        {
            "name": "evidenceDetails",
            "baseName": "evidence_details",
            "type": "DisputeEvidenceDetails"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isChargeRefundable",
            "baseName": "is_charge_refundable",
            "type": "boolean"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "networkReasonCode",
            "baseName": "network_reason_code",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "ChargeDispute.ObjectEnum"
        },
        {
            "name": "paymentIntent",
            "baseName": "payment_intent",
            "type": "DisputePaymentIntent"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ChargeDispute.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return ChargeDispute.attributeTypeMap;
    }
}

export namespace ChargeDispute {
    export enum ObjectEnum {
        Dispute = <any> 'dispute'
    }
    export enum StatusEnum {
        ChargeRefunded = <any> 'charge_refunded',
        Lost = <any> 'lost',
        NeedsResponse = <any> 'needs_response',
        UnderReview = <any> 'under_review',
        WarningClosed = <any> 'warning_closed',
        WarningNeedsResponse = <any> 'warning_needs_response',
        WarningUnderReview = <any> 'warning_under_review',
        Won = <any> 'won'
    }
}
