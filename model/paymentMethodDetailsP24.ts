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
export class PaymentMethodDetailsP24 {
    /**
    * The customer\'s bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
    */
    'bank': PaymentMethodDetailsP24.BankEnum;
    /**
    * Unique reference for this Przelewy24 payment.
    */
    'reference': string | null;
    /**
    * Owner\'s verified full name. Values are verified or provided by Przelewy24 directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. Przelewy24 rarely provides this information so the attribute is usually empty.
    */
    'verifiedName': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bank",
            "baseName": "bank",
            "type": "PaymentMethodDetailsP24.BankEnum"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "verifiedName",
            "baseName": "verified_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsP24.attributeTypeMap;
    }
}

export namespace PaymentMethodDetailsP24 {
    export enum BankEnum {
        AliorBank = <any> 'alior_bank',
        BankMillennium = <any> 'bank_millennium',
        BankNowyBfgSa = <any> 'bank_nowy_bfg_sa',
        BankPekaoSa = <any> 'bank_pekao_sa',
        BankiSpbdzielcze = <any> 'banki_spbdzielcze',
        Blik = <any> 'blik',
        BnpParibas = <any> 'bnp_paribas',
        Boz = <any> 'boz',
        CitiHandlowy = <any> 'citi_handlowy',
        CreditAgricole = <any> 'credit_agricole',
        Envelobank = <any> 'envelobank',
        EtransferPocztowy24 = <any> 'etransfer_pocztowy24',
        GetinBank = <any> 'getin_bank',
        Ideabank = <any> 'ideabank',
        Ing = <any> 'ing',
        Inteligo = <any> 'inteligo',
        MbankMtransfer = <any> 'mbank_mtransfer',
        NestPrzelew = <any> 'nest_przelew',
        NoblePay = <any> 'noble_pay',
        PbacZIpko = <any> 'pbac_z_ipko',
        PlusBank = <any> 'plus_bank',
        SantanderPrzelew24 = <any> 'santander_przelew24',
        TmobileUsbugiBankowe = <any> 'tmobile_usbugi_bankowe',
        ToyotaBank = <any> 'toyota_bank',
        VolkswagenBank = <any> 'volkswagen_bank'
    }
}
