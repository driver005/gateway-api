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
import { SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit } from './setupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit';
import { SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate } from './setupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate';

/**
* 
*/
export class SetupAttemptPaymentMethodDetailsIdeal {
    /**
    * The customer\'s bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
    */
    'bank': SetupAttemptPaymentMethodDetailsIdeal.BankEnum;
    /**
    * The Bank Identifier Code of the customer\'s bank.
    */
    'bic': SetupAttemptPaymentMethodDetailsIdeal.BicEnum;
    'generatedSepaDebit': SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit | null;
    'generatedSepaDebitMandate': SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate | null;
    /**
    * Last four characters of the IBAN.
    */
    'ibanLast4': string | null;
    /**
    * Owner\'s verified full name. Values are verified or provided by iDEAL directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
    */
    'verifiedName': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bank",
            "baseName": "bank",
            "type": "SetupAttemptPaymentMethodDetailsIdeal.BankEnum"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "SetupAttemptPaymentMethodDetailsIdeal.BicEnum"
        },
        {
            "name": "generatedSepaDebit",
            "baseName": "generated_sepa_debit",
            "type": "SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit"
        },
        {
            "name": "generatedSepaDebitMandate",
            "baseName": "generated_sepa_debit_mandate",
            "type": "SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate"
        },
        {
            "name": "ibanLast4",
            "baseName": "iban_last4",
            "type": "string"
        },
        {
            "name": "verifiedName",
            "baseName": "verified_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SetupAttemptPaymentMethodDetailsIdeal.attributeTypeMap;
    }
}

export namespace SetupAttemptPaymentMethodDetailsIdeal {
    export enum BankEnum {
        AbnAmro = <any> 'abn_amro',
        AsnBank = <any> 'asn_bank',
        Bunq = <any> 'bunq',
        Handelsbanken = <any> 'handelsbanken',
        Ing = <any> 'ing',
        Knab = <any> 'knab',
        Moneyou = <any> 'moneyou',
        Rabobank = <any> 'rabobank',
        Regiobank = <any> 'regiobank',
        Revolut = <any> 'revolut',
        SnsBank = <any> 'sns_bank',
        TriodosBank = <any> 'triodos_bank',
        VanLanschot = <any> 'van_lanschot',
        Yoursafe = <any> 'yoursafe'
    }
    export enum BicEnum {
        Abnanl2A = <any> 'ABNANL2A',
        Asnbnl21 = <any> 'ASNBNL21',
        Bitsnl2A = <any> 'BITSNL2A',
        Bunqnl2A = <any> 'BUNQNL2A',
        Fvlbnl22 = <any> 'FVLBNL22',
        Handnl2A = <any> 'HANDNL2A',
        Ingbnl2A = <any> 'INGBNL2A',
        Knabnl2H = <any> 'KNABNL2H',
        Moyonl21 = <any> 'MOYONL21',
        Rabonl2U = <any> 'RABONL2U',
        Rbrbnl21 = <any> 'RBRBNL21',
        Revolt21 = <any> 'REVOLT21',
        Snsbnl2A = <any> 'SNSBNL2A',
        Trionl2U = <any> 'TRIONL2U'
    }
}
