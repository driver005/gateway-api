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
import { DisputeEvidenceCancellationPolicy } from './disputeEvidenceCancellationPolicy';
import { DisputeEvidenceCustomerCommunication } from './disputeEvidenceCustomerCommunication';
import { DisputeEvidenceCustomerSignature } from './disputeEvidenceCustomerSignature';
import { DisputeEvidenceDuplicateChargeDocumentation } from './disputeEvidenceDuplicateChargeDocumentation';
import { DisputeEvidenceReceipt } from './disputeEvidenceReceipt';
import { DisputeEvidenceRefundPolicy } from './disputeEvidenceRefundPolicy';
import { DisputeEvidenceServiceDocumentation } from './disputeEvidenceServiceDocumentation';
import { DisputeEvidenceShippingDocumentation } from './disputeEvidenceShippingDocumentation';
import { DisputeEvidenceUncategorizedFile } from './disputeEvidenceUncategorizedFile';

/**
* 
*/
export class DisputeEvidence {
    /**
    * Any server or activity logs showing proof that the customer accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.
    */
    'accessActivityLog': string | null;
    /**
    * The billing address provided by the customer.
    */
    'billingAddress': string | null;
    'cancellationPolicy': DisputeEvidenceCancellationPolicy | null;
    /**
    * An explanation of how and when the customer was shown your refund policy prior to purchase.
    */
    'cancellationPolicyDisclosure': string | null;
    /**
    * A justification for why the customer\'s subscription was not canceled.
    */
    'cancellationRebuttal': string | null;
    'customerCommunication': DisputeEvidenceCustomerCommunication | null;
    /**
    * The email address of the customer.
    */
    'customerEmailAddress': string | null;
    /**
    * The name of the customer.
    */
    'customerName': string | null;
    /**
    * The IP address that the customer used when making the purchase.
    */
    'customerPurchaseIp': string | null;
    'customerSignature': DisputeEvidenceCustomerSignature | null;
    'duplicateChargeDocumentation': DisputeEvidenceDuplicateChargeDocumentation | null;
    /**
    * An explanation of the difference between the disputed charge versus the prior charge that appears to be a duplicate.
    */
    'duplicateChargeExplanation': string | null;
    /**
    * The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
    */
    'duplicateChargeId': string | null;
    /**
    * A description of the product or service that was sold.
    */
    'productDescription': string | null;
    'receipt': DisputeEvidenceReceipt | null;
    'refundPolicy': DisputeEvidenceRefundPolicy | null;
    /**
    * Documentation demonstrating that the customer was shown your refund policy prior to purchase.
    */
    'refundPolicyDisclosure': string | null;
    /**
    * A justification for why the customer is not entitled to a refund.
    */
    'refundRefusalExplanation': string | null;
    /**
    * The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
    */
    'serviceDate': string | null;
    'serviceDocumentation': DisputeEvidenceServiceDocumentation | null;
    /**
    * The address to which a physical product was shipped. You should try to include as complete address information as possible.
    */
    'shippingAddress': string | null;
    /**
    * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, please separate them with commas.
    */
    'shippingCarrier': string | null;
    /**
    * The date on which a physical product began its route to the shipping address, in a clear human-readable format.
    */
    'shippingDate': string | null;
    'shippingDocumentation': DisputeEvidenceShippingDocumentation | null;
    /**
    * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
    */
    'shippingTrackingNumber': string | null;
    'uncategorizedFile': DisputeEvidenceUncategorizedFile | null;
    /**
    * Any additional evidence or statements.
    */
    'uncategorizedText': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessActivityLog",
            "baseName": "access_activity_log",
            "type": "string"
        },
        {
            "name": "billingAddress",
            "baseName": "billing_address",
            "type": "string"
        },
        {
            "name": "cancellationPolicy",
            "baseName": "cancellation_policy",
            "type": "DisputeEvidenceCancellationPolicy"
        },
        {
            "name": "cancellationPolicyDisclosure",
            "baseName": "cancellation_policy_disclosure",
            "type": "string"
        },
        {
            "name": "cancellationRebuttal",
            "baseName": "cancellation_rebuttal",
            "type": "string"
        },
        {
            "name": "customerCommunication",
            "baseName": "customer_communication",
            "type": "DisputeEvidenceCustomerCommunication"
        },
        {
            "name": "customerEmailAddress",
            "baseName": "customer_email_address",
            "type": "string"
        },
        {
            "name": "customerName",
            "baseName": "customer_name",
            "type": "string"
        },
        {
            "name": "customerPurchaseIp",
            "baseName": "customer_purchase_ip",
            "type": "string"
        },
        {
            "name": "customerSignature",
            "baseName": "customer_signature",
            "type": "DisputeEvidenceCustomerSignature"
        },
        {
            "name": "duplicateChargeDocumentation",
            "baseName": "duplicate_charge_documentation",
            "type": "DisputeEvidenceDuplicateChargeDocumentation"
        },
        {
            "name": "duplicateChargeExplanation",
            "baseName": "duplicate_charge_explanation",
            "type": "string"
        },
        {
            "name": "duplicateChargeId",
            "baseName": "duplicate_charge_id",
            "type": "string"
        },
        {
            "name": "productDescription",
            "baseName": "product_description",
            "type": "string"
        },
        {
            "name": "receipt",
            "baseName": "receipt",
            "type": "DisputeEvidenceReceipt"
        },
        {
            "name": "refundPolicy",
            "baseName": "refund_policy",
            "type": "DisputeEvidenceRefundPolicy"
        },
        {
            "name": "refundPolicyDisclosure",
            "baseName": "refund_policy_disclosure",
            "type": "string"
        },
        {
            "name": "refundRefusalExplanation",
            "baseName": "refund_refusal_explanation",
            "type": "string"
        },
        {
            "name": "serviceDate",
            "baseName": "service_date",
            "type": "string"
        },
        {
            "name": "serviceDocumentation",
            "baseName": "service_documentation",
            "type": "DisputeEvidenceServiceDocumentation"
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "string"
        },
        {
            "name": "shippingCarrier",
            "baseName": "shipping_carrier",
            "type": "string"
        },
        {
            "name": "shippingDate",
            "baseName": "shipping_date",
            "type": "string"
        },
        {
            "name": "shippingDocumentation",
            "baseName": "shipping_documentation",
            "type": "DisputeEvidenceShippingDocumentation"
        },
        {
            "name": "shippingTrackingNumber",
            "baseName": "shipping_tracking_number",
            "type": "string"
        },
        {
            "name": "uncategorizedFile",
            "baseName": "uncategorized_file",
            "type": "DisputeEvidenceUncategorizedFile"
        },
        {
            "name": "uncategorizedText",
            "baseName": "uncategorized_text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DisputeEvidence.attributeTypeMap;
    }
}

