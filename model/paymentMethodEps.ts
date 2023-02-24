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
export class PaymentMethodEps {
    /**
    * The customer\'s bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `deutsche_bank_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
    */
    'bank': PaymentMethodEps.BankEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bank",
            "baseName": "bank",
            "type": "PaymentMethodEps.BankEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodEps.attributeTypeMap;
    }
}

export namespace PaymentMethodEps {
    export enum BankEnum {
        ArzteUndApothekerBank = <any> 'arzte_und_apotheker_bank',
        AustrianAnadiBankAg = <any> 'austrian_anadi_bank_ag',
        BankAustria = <any> 'bank_austria',
        BankhausCarlSpangler = <any> 'bankhaus_carl_spangler',
        BankhausSchelhammerUndSchatteraAg = <any> 'bankhaus_schelhammer_und_schattera_ag',
        BawagPskAg = <any> 'bawag_psk_ag',
        BksBankAg = <any> 'bks_bank_ag',
        BrullKallmusBankAg = <any> 'brull_kallmus_bank_ag',
        BtvVierLanderBank = <any> 'btv_vier_lander_bank',
        CapitalBankGraweGruppeAg = <any> 'capital_bank_grawe_gruppe_ag',
        DeutscheBankAg = <any> 'deutsche_bank_ag',
        Dolomitenbank = <any> 'dolomitenbank',
        EasybankAg = <any> 'easybank_ag',
        ErsteBankUndSparkassen = <any> 'erste_bank_und_sparkassen',
        HypoAlpeadriabankInternationalAg = <any> 'hypo_alpeadriabank_international_ag',
        HypoBankBurgenlandAktiengesellschaft = <any> 'hypo_bank_burgenland_aktiengesellschaft',
        HypoNoeLbFurNiederosterreichUWien = <any> 'hypo_noe_lb_fur_niederosterreich_u_wien',
        HypoOberosterreichSalzburgSteiermark = <any> 'hypo_oberosterreich_salzburg_steiermark',
        HypoTirolBankAg = <any> 'hypo_tirol_bank_ag',
        HypoVorarlbergBankAg = <any> 'hypo_vorarlberg_bank_ag',
        MarchfelderBank = <any> 'marchfelder_bank',
        OberbankAg = <any> 'oberbank_ag',
        RaiffeisenBankengruppeOsterreich = <any> 'raiffeisen_bankengruppe_osterreich',
        SchoellerbankAg = <any> 'schoellerbank_ag',
        SpardaBankWien = <any> 'sparda_bank_wien',
        VolksbankGruppe = <any> 'volksbank_gruppe',
        VolkskreditbankAg = <any> 'volkskreditbank_ag',
        VrBankBraunau = <any> 'vr_bank_braunau'
    }
}