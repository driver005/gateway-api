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

export class SourceTypeAcssDebit {
    'bankAddressCity'?: string | null;
    'bankAddressLine1'?: string | null;
    'bankAddressLine2'?: string | null;
    'bankAddressPostalCode'?: string | null;
    'bankName'?: string | null;
    'category'?: string | null;
    'country'?: string | null;
    'fingerprint'?: string | null;
    'last4'?: string | null;
    'routingNumber'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankAddressCity",
            "baseName": "bank_address_city",
            "type": "string"
        },
        {
            "name": "bankAddressLine1",
            "baseName": "bank_address_line_1",
            "type": "string"
        },
        {
            "name": "bankAddressLine2",
            "baseName": "bank_address_line_2",
            "type": "string"
        },
        {
            "name": "bankAddressPostalCode",
            "baseName": "bank_address_postal_code",
            "type": "string"
        },
        {
            "name": "bankName",
            "baseName": "bank_name",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "routingNumber",
            "baseName": "routing_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceTypeAcssDebit.attributeTypeMap;
    }
}
