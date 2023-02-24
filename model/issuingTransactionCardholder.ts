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
import { IssuingCardholder } from './issuingCardholder';
import { IssuingCardholderAddress } from './issuingCardholderAddress';
import { IssuingCardholderCompany1 } from './issuingCardholderCompany1';
import { IssuingCardholderIndividual1 } from './issuingCardholderIndividual1';
import { IssuingCardholderRequirements } from './issuingCardholderRequirements';
import { IssuingCardholderSpendingControls } from './issuingCardholderSpendingControls';

/**
* The cardholder to whom this transaction belongs.
*/
export class IssuingTransactionCardholder {
    'billing': IssuingCardholderAddress;
    'company': IssuingCardholderCompany1 | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * The cardholder\'s email address.
    */
    'email': string | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'individual': IssuingCardholderIndividual1 | null;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * The cardholder\'s name. This will be printed on cards issued to them.
    */
    'name': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': IssuingTransactionCardholder.ObjectEnum;
    /**
    * The cardholder\'s phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied) for more details.
    */
    'phoneNumber': string | null;
    'requirements': IssuingCardholderRequirements;
    'spendingControls': IssuingCardholderSpendingControls | null;
    /**
    * Specifies whether to permit authorizations on this cardholder\'s cards.
    */
    'status': IssuingTransactionCardholder.StatusEnum;
    /**
    * One of `individual` or `company`.
    */
    'type': IssuingTransactionCardholder.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billing",
            "baseName": "billing",
            "type": "IssuingCardholderAddress"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "IssuingCardholderCompany1"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "individual",
            "baseName": "individual",
            "type": "IssuingCardholderIndividual1"
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "IssuingTransactionCardholder.ObjectEnum"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "IssuingCardholderRequirements"
        },
        {
            "name": "spendingControls",
            "baseName": "spending_controls",
            "type": "IssuingCardholderSpendingControls"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IssuingTransactionCardholder.StatusEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IssuingTransactionCardholder.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IssuingTransactionCardholder.attributeTypeMap;
    }
}

export namespace IssuingTransactionCardholder {
    export enum ObjectEnum {
        IssuingCardholder = <any> 'issuing.cardholder'
    }
    export enum StatusEnum {
        Active = <any> 'active',
        Blocked = <any> 'blocked',
        Inactive = <any> 'inactive'
    }
    export enum TypeEnum {
        Company = <any> 'company',
        Individual = <any> 'individual'
    }
}
