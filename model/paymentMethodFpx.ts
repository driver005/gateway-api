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
export class PaymentMethodFpx {
    /**
    * Account holder type, if provided. Can be one of `individual` or `company`.
    */
    'accountHolderType': PaymentMethodFpx.AccountHolderTypeEnum;
    /**
    * The customer\'s bank, if provided. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
    */
    'bank': PaymentMethodFpx.BankEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderType",
            "baseName": "account_holder_type",
            "type": "PaymentMethodFpx.AccountHolderTypeEnum"
        },
        {
            "name": "bank",
            "baseName": "bank",
            "type": "PaymentMethodFpx.BankEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodFpx.attributeTypeMap;
    }
}

export namespace PaymentMethodFpx {
    export enum AccountHolderTypeEnum {
        Company = <any> 'company',
        Individual = <any> 'individual'
    }
    export enum BankEnum {
        AffinBank = <any> 'affin_bank',
        Agrobank = <any> 'agrobank',
        AllianceBank = <any> 'alliance_bank',
        Ambank = <any> 'ambank',
        BankIslam = <any> 'bank_islam',
        BankMuamalat = <any> 'bank_muamalat',
        BankOfChina = <any> 'bank_of_china',
        BankRakyat = <any> 'bank_rakyat',
        Bsn = <any> 'bsn',
        Cimb = <any> 'cimb',
        DeutscheBank = <any> 'deutsche_bank',
        HongLeongBank = <any> 'hong_leong_bank',
        Hsbc = <any> 'hsbc',
        Kfh = <any> 'kfh',
        Maybank2e = <any> 'maybank2e',
        Maybank2u = <any> 'maybank2u',
        Ocbc = <any> 'ocbc',
        PbEnterprise = <any> 'pb_enterprise',
        PublicBank = <any> 'public_bank',
        Rhb = <any> 'rhb',
        StandardChartered = <any> 'standard_chartered',
        Uob = <any> 'uob'
    }
}
