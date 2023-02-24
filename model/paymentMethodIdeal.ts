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
export class PaymentMethodIdeal {
    /**
    * The customer\'s bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
    */
    'bank': PaymentMethodIdeal.BankEnum;
    /**
    * The Bank Identifier Code of the customer\'s bank, if the bank was provided.
    */
    'bic': PaymentMethodIdeal.BicEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bank",
            "baseName": "bank",
            "type": "PaymentMethodIdeal.BankEnum"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "PaymentMethodIdeal.BicEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodIdeal.attributeTypeMap;
    }
}

export namespace PaymentMethodIdeal {
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
