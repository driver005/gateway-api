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
import { LegalEntityCompanyAddressKana } from './legalEntityCompanyAddressKana';
import { LegalEntityCompanyAddressKanji } from './legalEntityCompanyAddressKanji';
import { LegalEntityCompanyOwnershipDeclaration } from './legalEntityCompanyOwnershipDeclaration';
import { LegalEntityCompanyVerification1 } from './legalEntityCompanyVerification1';

/**
* 
*/
export class LegalEntityCompany {
    'address'?: Address;
    'addressKana'?: LegalEntityCompanyAddressKana | null;
    'addressKanji'?: LegalEntityCompanyAddressKanji | null;
    /**
    * Whether the company\'s directors have been provided. This Boolean will be `true` if you\'ve manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided).
    */
    'directorsProvided'?: boolean;
    /**
    * Whether the company\'s executives have been provided. This Boolean will be `true` if you\'ve manually indicated that all executives are provided via [the `executives_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-executives_provided), or if Stripe determined that sufficient executives were provided.
    */
    'executivesProvided'?: boolean;
    /**
    * The company\'s legal name.
    */
    'name'?: string | null;
    /**
    * The Kana variation of the company\'s legal name (Japan only).
    */
    'nameKana'?: string | null;
    /**
    * The Kanji variation of the company\'s legal name (Japan only).
    */
    'nameKanji'?: string | null;
    /**
    * Whether the company\'s owners have been provided. This Boolean will be `true` if you\'ve manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that sufficient owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together).
    */
    'ownersProvided'?: boolean;
    'ownershipDeclaration'?: LegalEntityCompanyOwnershipDeclaration | null;
    /**
    * The company\'s phone number (used for verification).
    */
    'phone'?: string | null;
    /**
    * The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
    */
    'structure'?: LegalEntityCompany.StructureEnum;
    /**
    * Whether the company\'s business ID number was provided.
    */
    'taxIdProvided'?: boolean;
    /**
    * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
    */
    'taxIdRegistrar'?: string;
    /**
    * Whether the company\'s business VAT number was provided.
    */
    'vatIdProvided'?: boolean;
    'verification'?: LegalEntityCompanyVerification1 | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "addressKana",
            "baseName": "address_kana",
            "type": "LegalEntityCompanyAddressKana"
        },
        {
            "name": "addressKanji",
            "baseName": "address_kanji",
            "type": "LegalEntityCompanyAddressKanji"
        },
        {
            "name": "directorsProvided",
            "baseName": "directors_provided",
            "type": "boolean"
        },
        {
            "name": "executivesProvided",
            "baseName": "executives_provided",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nameKana",
            "baseName": "name_kana",
            "type": "string"
        },
        {
            "name": "nameKanji",
            "baseName": "name_kanji",
            "type": "string"
        },
        {
            "name": "ownersProvided",
            "baseName": "owners_provided",
            "type": "boolean"
        },
        {
            "name": "ownershipDeclaration",
            "baseName": "ownership_declaration",
            "type": "LegalEntityCompanyOwnershipDeclaration"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "structure",
            "baseName": "structure",
            "type": "LegalEntityCompany.StructureEnum"
        },
        {
            "name": "taxIdProvided",
            "baseName": "tax_id_provided",
            "type": "boolean"
        },
        {
            "name": "taxIdRegistrar",
            "baseName": "tax_id_registrar",
            "type": "string"
        },
        {
            "name": "vatIdProvided",
            "baseName": "vat_id_provided",
            "type": "boolean"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "LegalEntityCompanyVerification1"
        }    ];

    static getAttributeTypeMap() {
        return LegalEntityCompany.attributeTypeMap;
    }
}

export namespace LegalEntityCompany {
    export enum StructureEnum {
        FreeZoneEstablishment = <any> 'free_zone_establishment',
        FreeZoneLlc = <any> 'free_zone_llc',
        GovernmentInstrumentality = <any> 'government_instrumentality',
        GovernmentalUnit = <any> 'governmental_unit',
        IncorporatedNonProfit = <any> 'incorporated_non_profit',
        LimitedLiabilityPartnership = <any> 'limited_liability_partnership',
        Llc = <any> 'llc',
        MultiMemberLlc = <any> 'multi_member_llc',
        PrivateCompany = <any> 'private_company',
        PrivateCorporation = <any> 'private_corporation',
        PrivatePartnership = <any> 'private_partnership',
        PublicCompany = <any> 'public_company',
        PublicCorporation = <any> 'public_corporation',
        PublicPartnership = <any> 'public_partnership',
        SingleMemberLlc = <any> 'single_member_llc',
        SoleEstablishment = <any> 'sole_establishment',
        SoleProprietorship = <any> 'sole_proprietorship',
        TaxExemptGovernmentInstrumentality = <any> 'tax_exempt_government_instrumentality',
        UnincorporatedAssociation = <any> 'unincorporated_association',
        UnincorporatedNonProfit = <any> 'unincorporated_non_profit'
    }
}
