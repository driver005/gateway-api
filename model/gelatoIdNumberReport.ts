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
import { GelatoIdNumberReportDob } from './gelatoIdNumberReportDob';
import { GelatoIdNumberReportError1 } from './gelatoIdNumberReportError1';

/**
* Result from an id_number check
*/
export class GelatoIdNumberReport {
    'dob': GelatoIdNumberReportDob | null;
    'error': GelatoIdNumberReportError1 | null;
    /**
    * First name.
    */
    'firstName': string | null;
    /**
    * ID number.
    */
    'idNumber': string | null;
    /**
    * Type of ID number.
    */
    'idNumberType': GelatoIdNumberReport.IdNumberTypeEnum;
    /**
    * Last name.
    */
    'lastName': string | null;
    /**
    * Status of this `id_number` check.
    */
    'status': GelatoIdNumberReport.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dob",
            "baseName": "dob",
            "type": "GelatoIdNumberReportDob"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "GelatoIdNumberReportError1"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "idNumber",
            "baseName": "id_number",
            "type": "string"
        },
        {
            "name": "idNumberType",
            "baseName": "id_number_type",
            "type": "GelatoIdNumberReport.IdNumberTypeEnum"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "GelatoIdNumberReport.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return GelatoIdNumberReport.attributeTypeMap;
    }
}

export namespace GelatoIdNumberReport {
    export enum IdNumberTypeEnum {
        BrCpf = <any> 'br_cpf',
        SgNric = <any> 'sg_nric',
        UsSsn = <any> 'us_ssn'
    }
    export enum StatusEnum {
        Unverified = <any> 'unverified',
        Verified = <any> 'verified'
    }
}