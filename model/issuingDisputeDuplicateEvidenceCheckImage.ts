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
import { FileFileLinkList1 } from './fileFileLinkList1';
import { ModelFile } from './modelFile';

/**
* (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
*/
export class IssuingDisputeDuplicateEvidenceCheckImage {
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * The time at which the file expires and is no longer available in epoch seconds.
    */
    'expiresAt': number | null;
    /**
    * A filename for the file, suitable for saving to a filesystem.
    */
    'filename': string | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'links'?: FileFileLinkList1 | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': IssuingDisputeDuplicateEvidenceCheckImage.ObjectEnum;
    /**
    * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
    */
    'purpose': IssuingDisputeDuplicateEvidenceCheckImage.PurposeEnum;
    /**
    * The size in bytes of the file object.
    */
    'size': number;
    /**
    * A user friendly title for the document.
    */
    'title': string | null;
    /**
    * The type of the file returned (e.g., `csv`, `pdf`, `jpg`, or `png`).
    */
    'type': string | null;
    /**
    * The URL from which the file can be downloaded using your live secret API key.
    */
    'url': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "FileFileLinkList1"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "IssuingDisputeDuplicateEvidenceCheckImage.ObjectEnum"
        },
        {
            "name": "purpose",
            "baseName": "purpose",
            "type": "IssuingDisputeDuplicateEvidenceCheckImage.PurposeEnum"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IssuingDisputeDuplicateEvidenceCheckImage.attributeTypeMap;
    }
}

export namespace IssuingDisputeDuplicateEvidenceCheckImage {
    export enum ObjectEnum {
        File = <any> 'file'
    }
    export enum PurposeEnum {
        AccountRequirement = <any> 'account_requirement',
        AdditionalVerification = <any> 'additional_verification',
        BusinessIcon = <any> 'business_icon',
        BusinessLogo = <any> 'business_logo',
        CustomerSignature = <any> 'customer_signature',
        DisputeEvidence = <any> 'dispute_evidence',
        DocumentProviderIdentityDocument = <any> 'document_provider_identity_document',
        FinanceReportRun = <any> 'finance_report_run',
        IdentityDocument = <any> 'identity_document',
        IdentityDocumentDownloadable = <any> 'identity_document_downloadable',
        PciDocument = <any> 'pci_document',
        Selfie = <any> 'selfie',
        SigmaScheduledQuery = <any> 'sigma_scheduled_query',
        TaxDocumentUserUpload = <any> 'tax_document_user_upload',
        TerminalReaderSplashscreen = <any> 'terminal_reader_splashscreen'
    }
}
