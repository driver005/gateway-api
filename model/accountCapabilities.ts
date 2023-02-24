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
export class AccountCapabilities {
    /**
    * The status of the Canadian pre-authorized debits payments capability of the account, or whether the account can directly process Canadian pre-authorized debits charges.
    */
    'acssDebitPayments'?: AccountCapabilities.AcssDebitPaymentsEnum;
    /**
    * The status of the Affirm capability of the account, or whether the account can directly process Affirm charges.
    */
    'affirmPayments'?: AccountCapabilities.AffirmPaymentsEnum;
    /**
    * The status of the Afterpay Clearpay capability of the account, or whether the account can directly process Afterpay Clearpay charges.
    */
    'afterpayClearpayPayments'?: AccountCapabilities.AfterpayClearpayPaymentsEnum;
    /**
    * The status of the BECS Direct Debit (AU) payments capability of the account, or whether the account can directly process BECS Direct Debit (AU) charges.
    */
    'auBecsDebitPayments'?: AccountCapabilities.AuBecsDebitPaymentsEnum;
    /**
    * The status of the Bacs Direct Debits payments capability of the account, or whether the account can directly process Bacs Direct Debits charges.
    */
    'bacsDebitPayments'?: AccountCapabilities.BacsDebitPaymentsEnum;
    /**
    * The status of the Bancontact payments capability of the account, or whether the account can directly process Bancontact charges.
    */
    'bancontactPayments'?: AccountCapabilities.BancontactPaymentsEnum;
    /**
    * The status of the customer_balance payments capability of the account, or whether the account can directly process customer_balance charges.
    */
    'bankTransferPayments'?: AccountCapabilities.BankTransferPaymentsEnum;
    /**
    * The status of the blik payments capability of the account, or whether the account can directly process blik charges.
    */
    'blikPayments'?: AccountCapabilities.BlikPaymentsEnum;
    /**
    * The status of the boleto payments capability of the account, or whether the account can directly process boleto charges.
    */
    'boletoPayments'?: AccountCapabilities.BoletoPaymentsEnum;
    /**
    * The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
    */
    'cardIssuing'?: AccountCapabilities.CardIssuingEnum;
    /**
    * The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
    */
    'cardPayments'?: AccountCapabilities.CardPaymentsEnum;
    /**
    * The status of the Cartes Bancaires payments capability of the account, or whether the account can directly process Cartes Bancaires card charges in EUR currency.
    */
    'cartesBancairesPayments'?: AccountCapabilities.CartesBancairesPaymentsEnum;
    /**
    * The status of the EPS payments capability of the account, or whether the account can directly process EPS charges.
    */
    'epsPayments'?: AccountCapabilities.EpsPaymentsEnum;
    /**
    * The status of the FPX payments capability of the account, or whether the account can directly process FPX charges.
    */
    'fpxPayments'?: AccountCapabilities.FpxPaymentsEnum;
    /**
    * The status of the giropay payments capability of the account, or whether the account can directly process giropay charges.
    */
    'giropayPayments'?: AccountCapabilities.GiropayPaymentsEnum;
    /**
    * The status of the GrabPay payments capability of the account, or whether the account can directly process GrabPay charges.
    */
    'grabpayPayments'?: AccountCapabilities.GrabpayPaymentsEnum;
    /**
    * The status of the iDEAL payments capability of the account, or whether the account can directly process iDEAL charges.
    */
    'idealPayments'?: AccountCapabilities.IdealPaymentsEnum;
    /**
    * The status of the india_international_payments capability of the account, or whether the account can process international charges (non INR) in India.
    */
    'indiaInternationalPayments'?: AccountCapabilities.IndiaInternationalPaymentsEnum;
    /**
    * The status of the JCB payments capability of the account, or whether the account (Japan only) can directly process JCB credit card charges in JPY currency.
    */
    'jcbPayments'?: AccountCapabilities.JcbPaymentsEnum;
    /**
    * The status of the Klarna payments capability of the account, or whether the account can directly process Klarna charges.
    */
    'klarnaPayments'?: AccountCapabilities.KlarnaPaymentsEnum;
    /**
    * The status of the konbini payments capability of the account, or whether the account can directly process konbini charges.
    */
    'konbiniPayments'?: AccountCapabilities.KonbiniPaymentsEnum;
    /**
    * The status of the legacy payments capability of the account.
    */
    'legacyPayments'?: AccountCapabilities.LegacyPaymentsEnum;
    /**
    * The status of the link_payments capability of the account, or whether the account can directly process Link charges.
    */
    'linkPayments'?: AccountCapabilities.LinkPaymentsEnum;
    /**
    * The status of the OXXO payments capability of the account, or whether the account can directly process OXXO charges.
    */
    'oxxoPayments'?: AccountCapabilities.OxxoPaymentsEnum;
    /**
    * The status of the P24 payments capability of the account, or whether the account can directly process P24 charges.
    */
    'p24Payments'?: AccountCapabilities.P24PaymentsEnum;
    /**
    * The status of the paynow payments capability of the account, or whether the account can directly process paynow charges.
    */
    'paynowPayments'?: AccountCapabilities.PaynowPaymentsEnum;
    /**
    * The status of the promptpay payments capability of the account, or whether the account can directly process promptpay charges.
    */
    'promptpayPayments'?: AccountCapabilities.PromptpayPaymentsEnum;
    /**
    * The status of the SEPA Direct Debits payments capability of the account, or whether the account can directly process SEPA Direct Debits charges.
    */
    'sepaDebitPayments'?: AccountCapabilities.SepaDebitPaymentsEnum;
    /**
    * The status of the Sofort payments capability of the account, or whether the account can directly process Sofort charges.
    */
    'sofortPayments'?: AccountCapabilities.SofortPaymentsEnum;
    /**
    * The status of the tax reporting 1099-K (US) capability of the account.
    */
    'taxReportingUs1099K'?: AccountCapabilities.TaxReportingUs1099KEnum;
    /**
    * The status of the tax reporting 1099-MISC (US) capability of the account.
    */
    'taxReportingUs1099Misc'?: AccountCapabilities.TaxReportingUs1099MiscEnum;
    /**
    * The status of the transfers capability of the account, or whether your platform can transfer funds to the account.
    */
    'transfers'?: AccountCapabilities.TransfersEnum;
    /**
    * The status of the banking capability, or whether the account can have bank accounts.
    */
    'treasury'?: AccountCapabilities.TreasuryEnum;
    /**
    * The status of the US bank account ACH payments capability of the account, or whether the account can directly process US bank account charges.
    */
    'usBankAccountAchPayments'?: AccountCapabilities.UsBankAccountAchPaymentsEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acssDebitPayments",
            "baseName": "acss_debit_payments",
            "type": "AccountCapabilities.AcssDebitPaymentsEnum"
        },
        {
            "name": "affirmPayments",
            "baseName": "affirm_payments",
            "type": "AccountCapabilities.AffirmPaymentsEnum"
        },
        {
            "name": "afterpayClearpayPayments",
            "baseName": "afterpay_clearpay_payments",
            "type": "AccountCapabilities.AfterpayClearpayPaymentsEnum"
        },
        {
            "name": "auBecsDebitPayments",
            "baseName": "au_becs_debit_payments",
            "type": "AccountCapabilities.AuBecsDebitPaymentsEnum"
        },
        {
            "name": "bacsDebitPayments",
            "baseName": "bacs_debit_payments",
            "type": "AccountCapabilities.BacsDebitPaymentsEnum"
        },
        {
            "name": "bancontactPayments",
            "baseName": "bancontact_payments",
            "type": "AccountCapabilities.BancontactPaymentsEnum"
        },
        {
            "name": "bankTransferPayments",
            "baseName": "bank_transfer_payments",
            "type": "AccountCapabilities.BankTransferPaymentsEnum"
        },
        {
            "name": "blikPayments",
            "baseName": "blik_payments",
            "type": "AccountCapabilities.BlikPaymentsEnum"
        },
        {
            "name": "boletoPayments",
            "baseName": "boleto_payments",
            "type": "AccountCapabilities.BoletoPaymentsEnum"
        },
        {
            "name": "cardIssuing",
            "baseName": "card_issuing",
            "type": "AccountCapabilities.CardIssuingEnum"
        },
        {
            "name": "cardPayments",
            "baseName": "card_payments",
            "type": "AccountCapabilities.CardPaymentsEnum"
        },
        {
            "name": "cartesBancairesPayments",
            "baseName": "cartes_bancaires_payments",
            "type": "AccountCapabilities.CartesBancairesPaymentsEnum"
        },
        {
            "name": "epsPayments",
            "baseName": "eps_payments",
            "type": "AccountCapabilities.EpsPaymentsEnum"
        },
        {
            "name": "fpxPayments",
            "baseName": "fpx_payments",
            "type": "AccountCapabilities.FpxPaymentsEnum"
        },
        {
            "name": "giropayPayments",
            "baseName": "giropay_payments",
            "type": "AccountCapabilities.GiropayPaymentsEnum"
        },
        {
            "name": "grabpayPayments",
            "baseName": "grabpay_payments",
            "type": "AccountCapabilities.GrabpayPaymentsEnum"
        },
        {
            "name": "idealPayments",
            "baseName": "ideal_payments",
            "type": "AccountCapabilities.IdealPaymentsEnum"
        },
        {
            "name": "indiaInternationalPayments",
            "baseName": "india_international_payments",
            "type": "AccountCapabilities.IndiaInternationalPaymentsEnum"
        },
        {
            "name": "jcbPayments",
            "baseName": "jcb_payments",
            "type": "AccountCapabilities.JcbPaymentsEnum"
        },
        {
            "name": "klarnaPayments",
            "baseName": "klarna_payments",
            "type": "AccountCapabilities.KlarnaPaymentsEnum"
        },
        {
            "name": "konbiniPayments",
            "baseName": "konbini_payments",
            "type": "AccountCapabilities.KonbiniPaymentsEnum"
        },
        {
            "name": "legacyPayments",
            "baseName": "legacy_payments",
            "type": "AccountCapabilities.LegacyPaymentsEnum"
        },
        {
            "name": "linkPayments",
            "baseName": "link_payments",
            "type": "AccountCapabilities.LinkPaymentsEnum"
        },
        {
            "name": "oxxoPayments",
            "baseName": "oxxo_payments",
            "type": "AccountCapabilities.OxxoPaymentsEnum"
        },
        {
            "name": "p24Payments",
            "baseName": "p24_payments",
            "type": "AccountCapabilities.P24PaymentsEnum"
        },
        {
            "name": "paynowPayments",
            "baseName": "paynow_payments",
            "type": "AccountCapabilities.PaynowPaymentsEnum"
        },
        {
            "name": "promptpayPayments",
            "baseName": "promptpay_payments",
            "type": "AccountCapabilities.PromptpayPaymentsEnum"
        },
        {
            "name": "sepaDebitPayments",
            "baseName": "sepa_debit_payments",
            "type": "AccountCapabilities.SepaDebitPaymentsEnum"
        },
        {
            "name": "sofortPayments",
            "baseName": "sofort_payments",
            "type": "AccountCapabilities.SofortPaymentsEnum"
        },
        {
            "name": "taxReportingUs1099K",
            "baseName": "tax_reporting_us_1099_k",
            "type": "AccountCapabilities.TaxReportingUs1099KEnum"
        },
        {
            "name": "taxReportingUs1099Misc",
            "baseName": "tax_reporting_us_1099_misc",
            "type": "AccountCapabilities.TaxReportingUs1099MiscEnum"
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "AccountCapabilities.TransfersEnum"
        },
        {
            "name": "treasury",
            "baseName": "treasury",
            "type": "AccountCapabilities.TreasuryEnum"
        },
        {
            "name": "usBankAccountAchPayments",
            "baseName": "us_bank_account_ach_payments",
            "type": "AccountCapabilities.UsBankAccountAchPaymentsEnum"
        }    ];

    static getAttributeTypeMap() {
        return AccountCapabilities.attributeTypeMap;
    }
}

export namespace AccountCapabilities {
    export enum AcssDebitPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum AffirmPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum AfterpayClearpayPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum AuBecsDebitPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum BacsDebitPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum BancontactPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum BankTransferPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum BlikPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum BoletoPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum CardIssuingEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum CardPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum CartesBancairesPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum EpsPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum FpxPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum GiropayPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum GrabpayPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum IdealPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum IndiaInternationalPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum JcbPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum KlarnaPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum KonbiniPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum LegacyPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum LinkPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum OxxoPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum P24PaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum PaynowPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum PromptpayPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum SepaDebitPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum SofortPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum TaxReportingUs1099KEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum TaxReportingUs1099MiscEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum TransfersEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum TreasuryEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
    export enum UsBankAccountAchPaymentsEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Pending = <any> 'pending'
    }
}