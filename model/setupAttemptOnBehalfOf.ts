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
import { Account } from './account';
import { AccountBusinessProfile1 } from './accountBusinessProfile1';
import { AccountCapabilities } from './accountCapabilities';
import { AccountFutureRequirements } from './accountFutureRequirements';
import { AccountRequirements } from './accountRequirements';
import { AccountSettings1 } from './accountSettings1';
import { AccountTosAcceptance } from './accountTosAcceptance';
import { AccountUnificationAccountController } from './accountUnificationAccountController';
import { ExternalAccountList1 } from './externalAccountList1';
import { LegalEntityCompany } from './legalEntityCompany';
import { Person } from './person';

/**
* The value of [on_behalf_of](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation.
*/
export class SetupAttemptOnBehalfOf {
    'businessProfile'?: AccountBusinessProfile1 | null;
    /**
    * The business type.
    */
    'businessType'?: SetupAttemptOnBehalfOf.BusinessTypeEnum;
    'capabilities'?: AccountCapabilities;
    /**
    * Whether the account can create live charges.
    */
    'chargesEnabled'?: boolean;
    'company'?: LegalEntityCompany;
    'controller'?: AccountUnificationAccountController;
    /**
    * The account\'s country.
    */
    'country'?: string;
    /**
    * Time at which the account was connected. Measured in seconds since the Unix epoch.
    */
    'created'?: number;
    /**
    * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account\'s country](https://stripe.com/docs/payouts).
    */
    'defaultCurrency'?: string;
    /**
    * Whether account details have been submitted. Standard accounts cannot receive payouts before this is true.
    */
    'detailsSubmitted'?: boolean;
    /**
    * An email address associated with the account. You can treat this as metadata: it is not used for authentication or messaging account holders.
    */
    'email'?: string | null;
    'externalAccounts'?: ExternalAccountList1;
    'futureRequirements'?: AccountFutureRequirements;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'individual'?: Person;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': SetupAttemptOnBehalfOf.ObjectEnum;
    /**
    * Whether Stripe can send payouts to this account.
    */
    'payoutsEnabled'?: boolean;
    'requirements'?: AccountRequirements;
    'settings'?: AccountSettings1 | null;
    'tosAcceptance'?: AccountTosAcceptance;
    /**
    * The Stripe account type. Can be `standard`, `express`, or `custom`.
    */
    'type'?: SetupAttemptOnBehalfOf.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "businessProfile",
            "baseName": "business_profile",
            "type": "AccountBusinessProfile1"
        },
        {
            "name": "businessType",
            "baseName": "business_type",
            "type": "SetupAttemptOnBehalfOf.BusinessTypeEnum"
        },
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "AccountCapabilities"
        },
        {
            "name": "chargesEnabled",
            "baseName": "charges_enabled",
            "type": "boolean"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "LegalEntityCompany"
        },
        {
            "name": "controller",
            "baseName": "controller",
            "type": "AccountUnificationAccountController"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "defaultCurrency",
            "baseName": "default_currency",
            "type": "string"
        },
        {
            "name": "detailsSubmitted",
            "baseName": "details_submitted",
            "type": "boolean"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "externalAccounts",
            "baseName": "external_accounts",
            "type": "ExternalAccountList1"
        },
        {
            "name": "futureRequirements",
            "baseName": "future_requirements",
            "type": "AccountFutureRequirements"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "individual",
            "baseName": "individual",
            "type": "Person"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "SetupAttemptOnBehalfOf.ObjectEnum"
        },
        {
            "name": "payoutsEnabled",
            "baseName": "payouts_enabled",
            "type": "boolean"
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "AccountRequirements"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "AccountSettings1"
        },
        {
            "name": "tosAcceptance",
            "baseName": "tos_acceptance",
            "type": "AccountTosAcceptance"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SetupAttemptOnBehalfOf.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return SetupAttemptOnBehalfOf.attributeTypeMap;
    }
}

export namespace SetupAttemptOnBehalfOf {
    export enum BusinessTypeEnum {
        Company = <any> 'company',
        GovernmentEntity = <any> 'government_entity',
        Individual = <any> 'individual',
        NonProfit = <any> 'non_profit'
    }
    export enum ObjectEnum {
        Account = <any> 'account'
    }
    export enum TypeEnum {
        Custom = <any> 'custom',
        Express = <any> 'express',
        Standard = <any> 'standard'
    }
}
