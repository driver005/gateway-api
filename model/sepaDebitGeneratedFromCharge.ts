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
import { AlternateStatementDescriptors } from './alternateStatementDescriptors';
import { BillingDetails } from './billingDetails';
import { Charge } from './charge';
import { ChargeApplication } from './chargeApplication';
import { ChargeApplicationFee } from './chargeApplicationFee';
import { ChargeBalanceTransaction } from './chargeBalanceTransaction';
import { ChargeCustomer } from './chargeCustomer';
import { ChargeDestination } from './chargeDestination';
import { ChargeDispute } from './chargeDispute';
import { ChargeFailureBalanceTransaction } from './chargeFailureBalanceTransaction';
import { ChargeFraudDetails1 } from './chargeFraudDetails1';
import { ChargeInvoice } from './chargeInvoice';
import { ChargeOnBehalfOf } from './chargeOnBehalfOf';
import { ChargeOutcome1 } from './chargeOutcome1';
import { ChargePaymentIntent } from './chargePaymentIntent';
import { ChargePaymentMethodDetails } from './chargePaymentMethodDetails';
import { ChargeReview } from './chargeReview';
import { ChargeShipping } from './chargeShipping';
import { ChargeSource } from './chargeSource';
import { ChargeSourceTransfer } from './chargeSourceTransfer';
import { ChargeTransfer } from './chargeTransfer';
import { ChargeTransferData1 } from './chargeTransferData1';
import { Level3 } from './level3';
import { RadarRadarOptions } from './radarRadarOptions';
import { RefundList1 } from './refundList1';

/**
* The ID of the Charge that generated this PaymentMethod, if any.
*/
export class SepaDebitGeneratedFromCharge {
    'alternateStatementDescriptors'?: AlternateStatementDescriptors;
    /**
    * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ??100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
    */
    'amount': number;
    /**
    * Amount in %s captured (can be less than the amount attribute on the charge if a partial capture was made).
    */
    'amountCaptured': number;
    /**
    * Amount in %s refunded (can be less than the amount attribute on the charge if a partial refund was issued).
    */
    'amountRefunded': number;
    'application': ChargeApplication | null;
    'applicationFee': ChargeApplicationFee | null;
    /**
    * The amount of the application fee (if any) requested for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details.
    */
    'applicationFeeAmount': number | null;
    /**
    * Authorization code on the charge.
    */
    'authorizationCode'?: string;
    'balanceTransaction': ChargeBalanceTransaction | null;
    'billingDetails': BillingDetails;
    /**
    * The full statement descriptor that is passed to card networks, and that is displayed on your customers\' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined.
    */
    'calculatedStatementDescriptor': string | null;
    /**
    * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
    */
    'captured': boolean;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'customer': ChargeCustomer | null;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description': string | null;
    'destination': ChargeDestination | null;
    'dispute': ChargeDispute | null;
    /**
    * Whether the charge has been disputed.
    */
    'disputed': boolean;
    'failureBalanceTransaction': ChargeFailureBalanceTransaction | null;
    /**
    * Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/error-codes) for a list of codes).
    */
    'failureCode': string | null;
    /**
    * Message to user further explaining reason for charge failure if available.
    */
    'failureMessage': string | null;
    'fraudDetails': ChargeFraudDetails1 | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'invoice': ChargeInvoice | null;
    'level3'?: Level3;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': SepaDebitGeneratedFromCharge.ObjectEnum;
    'onBehalfOf': ChargeOnBehalfOf | null;
    'outcome': ChargeOutcome1 | null;
    /**
    * `true` if the charge succeeded, or was successfully authorized for later capture.
    */
    'paid': boolean;
    'paymentIntent': ChargePaymentIntent | null;
    /**
    * ID of the payment method used in this charge.
    */
    'paymentMethod': string | null;
    'paymentMethodDetails': ChargePaymentMethodDetails | null;
    'radarOptions'?: RadarRadarOptions;
    /**
    * This is the email address that the receipt for this charge was sent to.
    */
    'receiptEmail': string | null;
    /**
    * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
    */
    'receiptNumber': string | null;
    /**
    * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
    */
    'receiptUrl': string | null;
    /**
    * Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
    */
    'refunded': boolean;
    'refunds': RefundList1 | null;
    'review': ChargeReview | null;
    'shipping': ChargeShipping | null;
    'source': ChargeSource | null;
    'sourceTransfer': ChargeSourceTransfer | null;
    /**
    * For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers??? statements. Must contain at least one letter, maximum 22 characters.
    */
    'statementDescriptor': string | null;
    /**
    * Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that???s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
    */
    'statementDescriptorSuffix': string | null;
    /**
    * The status of the payment is either `succeeded`, `pending`, or `failed`.
    */
    'status': SepaDebitGeneratedFromCharge.StatusEnum;
    'transfer'?: ChargeTransfer;
    'transferData': ChargeTransferData1 | null;
    /**
    * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.
    */
    'transferGroup': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alternateStatementDescriptors",
            "baseName": "alternate_statement_descriptors",
            "type": "AlternateStatementDescriptors"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountCaptured",
            "baseName": "amount_captured",
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
            "type": "ChargeApplication"
        },
        {
            "name": "applicationFee",
            "baseName": "application_fee",
            "type": "ChargeApplicationFee"
        },
        {
            "name": "applicationFeeAmount",
            "baseName": "application_fee_amount",
            "type": "number"
        },
        {
            "name": "authorizationCode",
            "baseName": "authorization_code",
            "type": "string"
        },
        {
            "name": "balanceTransaction",
            "baseName": "balance_transaction",
            "type": "ChargeBalanceTransaction"
        },
        {
            "name": "billingDetails",
            "baseName": "billing_details",
            "type": "BillingDetails"
        },
        {
            "name": "calculatedStatementDescriptor",
            "baseName": "calculated_statement_descriptor",
            "type": "string"
        },
        {
            "name": "captured",
            "baseName": "captured",
            "type": "boolean"
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
            "name": "customer",
            "baseName": "customer",
            "type": "ChargeCustomer"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "ChargeDestination"
        },
        {
            "name": "dispute",
            "baseName": "dispute",
            "type": "ChargeDispute"
        },
        {
            "name": "disputed",
            "baseName": "disputed",
            "type": "boolean"
        },
        {
            "name": "failureBalanceTransaction",
            "baseName": "failure_balance_transaction",
            "type": "ChargeFailureBalanceTransaction"
        },
        {
            "name": "failureCode",
            "baseName": "failure_code",
            "type": "string"
        },
        {
            "name": "failureMessage",
            "baseName": "failure_message",
            "type": "string"
        },
        {
            "name": "fraudDetails",
            "baseName": "fraud_details",
            "type": "ChargeFraudDetails1"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "ChargeInvoice"
        },
        {
            "name": "level3",
            "baseName": "level3",
            "type": "Level3"
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
            "name": "object",
            "baseName": "object",
            "type": "SepaDebitGeneratedFromCharge.ObjectEnum"
        },
        {
            "name": "onBehalfOf",
            "baseName": "on_behalf_of",
            "type": "ChargeOnBehalfOf"
        },
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "ChargeOutcome1"
        },
        {
            "name": "paid",
            "baseName": "paid",
            "type": "boolean"
        },
        {
            "name": "paymentIntent",
            "baseName": "payment_intent",
            "type": "ChargePaymentIntent"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "string"
        },
        {
            "name": "paymentMethodDetails",
            "baseName": "payment_method_details",
            "type": "ChargePaymentMethodDetails"
        },
        {
            "name": "radarOptions",
            "baseName": "radar_options",
            "type": "RadarRadarOptions"
        },
        {
            "name": "receiptEmail",
            "baseName": "receipt_email",
            "type": "string"
        },
        {
            "name": "receiptNumber",
            "baseName": "receipt_number",
            "type": "string"
        },
        {
            "name": "receiptUrl",
            "baseName": "receipt_url",
            "type": "string"
        },
        {
            "name": "refunded",
            "baseName": "refunded",
            "type": "boolean"
        },
        {
            "name": "refunds",
            "baseName": "refunds",
            "type": "RefundList1"
        },
        {
            "name": "review",
            "baseName": "review",
            "type": "ChargeReview"
        },
        {
            "name": "shipping",
            "baseName": "shipping",
            "type": "ChargeShipping"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "ChargeSource"
        },
        {
            "name": "sourceTransfer",
            "baseName": "source_transfer",
            "type": "ChargeSourceTransfer"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "statementDescriptorSuffix",
            "baseName": "statement_descriptor_suffix",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SepaDebitGeneratedFromCharge.StatusEnum"
        },
        {
            "name": "transfer",
            "baseName": "transfer",
            "type": "ChargeTransfer"
        },
        {
            "name": "transferData",
            "baseName": "transfer_data",
            "type": "ChargeTransferData1"
        },
        {
            "name": "transferGroup",
            "baseName": "transfer_group",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SepaDebitGeneratedFromCharge.attributeTypeMap;
    }
}

export namespace SepaDebitGeneratedFromCharge {
    export enum ObjectEnum {
        Charge = <any> 'charge'
    }
    export enum StatusEnum {
        Failed = <any> 'failed',
        Pending = <any> 'pending',
        Succeeded = <any> 'succeeded'
    }
}
