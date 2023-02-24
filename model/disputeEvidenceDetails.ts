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

/**
* 
*/
export class DisputeEvidenceDetails {
    /**
    * Date by which evidence must be submitted in order to successfully challenge dispute. Will be null if the customer\'s bank or credit card company doesn\'t allow a response for this particular dispute.
    */
    'dueBy': number | null;
    /**
    * Whether evidence has been staged for this dispute.
    */
    'hasEvidence': boolean;
    /**
    * Whether the last evidence submission was submitted past the due date. Defaults to `false` if no evidence submissions have occurred. If `true`, then delivery of the latest evidence is *not* guaranteed.
    */
    'pastDue': boolean;
    /**
    * The number of times evidence has been submitted. Typically, you may only submit evidence once.
    */
    'submissionCount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dueBy",
            "baseName": "due_by",
            "type": "number"
        },
        {
            "name": "hasEvidence",
            "baseName": "has_evidence",
            "type": "boolean"
        },
        {
            "name": "pastDue",
            "baseName": "past_due",
            "type": "boolean"
        },
        {
            "name": "submissionCount",
            "baseName": "submission_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DisputeEvidenceDetails.attributeTypeMap;
    }
}

