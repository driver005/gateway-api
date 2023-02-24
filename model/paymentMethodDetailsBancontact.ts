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
import { PaymentMethodDetailsBancontactGeneratedSepaDebit } from './paymentMethodDetailsBancontactGeneratedSepaDebit';
import { PaymentMethodDetailsBancontactGeneratedSepaDebitMandate } from './paymentMethodDetailsBancontactGeneratedSepaDebitMandate';

/**
* 
*/
export class PaymentMethodDetailsBancontact {
    /**
    * Bank code of bank associated with the bank account.
    */
    'bankCode': string | null;
    /**
    * Name of the bank associated with the bank account.
    */
    'bankName': string | null;
    /**
    * Bank Identifier Code of the bank associated with the bank account.
    */
    'bic': string | null;
    'generatedSepaDebit': PaymentMethodDetailsBancontactGeneratedSepaDebit | null;
    'generatedSepaDebitMandate': PaymentMethodDetailsBancontactGeneratedSepaDebitMandate | null;
    /**
    * Last four characters of the IBAN.
    */
    'ibanLast4': string | null;
    /**
    * Preferred language of the Bancontact authorization page that the customer is redirected to. Can be one of `en`, `de`, `fr`, or `nl`
    */
    'preferredLanguage': PaymentMethodDetailsBancontact.PreferredLanguageEnum;
    /**
    * Owner\'s verified full name. Values are verified or provided by Bancontact directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
    */
    'verifiedName': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankCode",
            "baseName": "bank_code",
            "type": "string"
        },
        {
            "name": "bankName",
            "baseName": "bank_name",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "generatedSepaDebit",
            "baseName": "generated_sepa_debit",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebit"
        },
        {
            "name": "generatedSepaDebitMandate",
            "baseName": "generated_sepa_debit_mandate",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate"
        },
        {
            "name": "ibanLast4",
            "baseName": "iban_last4",
            "type": "string"
        },
        {
            "name": "preferredLanguage",
            "baseName": "preferred_language",
            "type": "PaymentMethodDetailsBancontact.PreferredLanguageEnum"
        },
        {
            "name": "verifiedName",
            "baseName": "verified_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsBancontact.attributeTypeMap;
    }
}

export namespace PaymentMethodDetailsBancontact {
    export enum PreferredLanguageEnum {
        De = <any> 'de',
        En = <any> 'en',
        Fr = <any> 'fr',
        Nl = <any> 'nl'
    }
}
