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
import { Address } from './address';
import { LegalEntityDob } from './legalEntityDob';
import { LegalEntityPersonVerification } from './legalEntityPersonVerification';
import { PersonAddressKana } from './personAddressKana';
import { PersonAddressKanji } from './personAddressKanji';
import { PersonFutureRequirements1 } from './personFutureRequirements1';
import { PersonRelationship } from './personRelationship';
import { PersonRequirements1 } from './personRequirements1';

/**
* This is an object representing a person associated with a Stripe account.  A platform cannot access a Standard or Express account\'s persons after the account starts onboarding, such as after generating an account link for the account. See the [Standard onboarding](https://stripe.com/docs/connect/standard-accounts) or [Express onboarding documentation](https://stripe.com/docs/connect/express-accounts) for information about platform pre-filling and account onboarding steps.  Related guide: [Handling Identity Verification with the API](https://stripe.com/docs/connect/identity-verification-api#person-information).
*/
export class Person {
    /**
    * The account the person is associated with.
    */
    'account'?: string;
    'address'?: Address;
    'addressKana'?: PersonAddressKana | null;
    'addressKanji'?: PersonAddressKanji | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'dob'?: LegalEntityDob;
    /**
    * The person\'s email address.
    */
    'email'?: string | null;
    /**
    * The person\'s first name.
    */
    'firstName'?: string | null;
    /**
    * The Kana variation of the person\'s first name (Japan only).
    */
    'firstNameKana'?: string | null;
    /**
    * The Kanji variation of the person\'s first name (Japan only).
    */
    'firstNameKanji'?: string | null;
    /**
    * A list of alternate names or aliases that the person is known by.
    */
    'fullNameAliases'?: Array<string>;
    'futureRequirements'?: PersonFutureRequirements1 | null;
    /**
    * The person\'s gender (International regulations require either \"male\" or \"female\").
    */
    'gender'?: string | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Whether the person\'s `id_number` was provided.
    */
    'idNumberProvided'?: boolean;
    /**
    * Whether the person\'s `id_number_secondary` was provided.
    */
    'idNumberSecondaryProvided'?: boolean;
    /**
    * The person\'s last name.
    */
    'lastName'?: string | null;
    /**
    * The Kana variation of the person\'s last name (Japan only).
    */
    'lastNameKana'?: string | null;
    /**
    * The Kanji variation of the person\'s last name (Japan only).
    */
    'lastNameKanji'?: string | null;
    /**
    * The person\'s maiden name.
    */
    'maidenName'?: string | null;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * The country where the person is a national.
    */
    'nationality'?: string | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': Person.ObjectEnum;
    /**
    * The person\'s phone number.
    */
    'phone'?: string | null;
    /**
    * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
    */
    'politicalExposure'?: Person.PoliticalExposureEnum;
    'registeredAddress'?: Address;
    'relationship'?: PersonRelationship;
    'requirements'?: PersonRequirements1 | null;
    /**
    * Whether the last four digits of the person\'s Social Security number have been provided (U.S. only).
    */
    'ssnLast4Provided'?: boolean;
    'verification'?: LegalEntityPersonVerification;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "addressKana",
            "baseName": "address_kana",
            "type": "PersonAddressKana"
        },
        {
            "name": "addressKanji",
            "baseName": "address_kanji",
            "type": "PersonAddressKanji"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "dob",
            "baseName": "dob",
            "type": "LegalEntityDob"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "firstNameKana",
            "baseName": "first_name_kana",
            "type": "string"
        },
        {
            "name": "firstNameKanji",
            "baseName": "first_name_kanji",
            "type": "string"
        },
        {
            "name": "fullNameAliases",
            "baseName": "full_name_aliases",
            "type": "Array<string>"
        },
        {
            "name": "futureRequirements",
            "baseName": "future_requirements",
            "type": "PersonFutureRequirements1"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "idNumberProvided",
            "baseName": "id_number_provided",
            "type": "boolean"
        },
        {
            "name": "idNumberSecondaryProvided",
            "baseName": "id_number_secondary_provided",
            "type": "boolean"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "lastNameKana",
            "baseName": "last_name_kana",
            "type": "string"
        },
        {
            "name": "lastNameKanji",
            "baseName": "last_name_kanji",
            "type": "string"
        },
        {
            "name": "maidenName",
            "baseName": "maiden_name",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "nationality",
            "baseName": "nationality",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "Person.ObjectEnum"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "politicalExposure",
            "baseName": "political_exposure",
            "type": "Person.PoliticalExposureEnum"
        },
        {
            "name": "registeredAddress",
            "baseName": "registered_address",
            "type": "Address"
        },
        {
            "name": "relationship",
            "baseName": "relationship",
            "type": "PersonRelationship"
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "PersonRequirements1"
        },
        {
            "name": "ssnLast4Provided",
            "baseName": "ssn_last_4_provided",
            "type": "boolean"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "LegalEntityPersonVerification"
        }    ];

    static getAttributeTypeMap() {
        return Person.attributeTypeMap;
    }
}

export namespace Person {
    export enum ObjectEnum {
        Person = <any> 'person'
    }
    export enum PoliticalExposureEnum {
        Existing = <any> 'existing',
        None = <any> 'none'
    }
}
