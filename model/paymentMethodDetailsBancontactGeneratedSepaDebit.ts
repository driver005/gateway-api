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
import { BillingDetails } from './billingDetails';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodAcssDebit } from './paymentMethodAcssDebit';
import { PaymentMethodAuBecsDebit } from './paymentMethodAuBecsDebit';
import { PaymentMethodBacsDebit } from './paymentMethodBacsDebit';
import { PaymentMethodBoleto } from './paymentMethodBoleto';
import { PaymentMethodCard } from './paymentMethodCard';
import { PaymentMethodCustomer } from './paymentMethodCustomer';
import { PaymentMethodEps } from './paymentMethodEps';
import { PaymentMethodFpx } from './paymentMethodFpx';
import { PaymentMethodIdeal } from './paymentMethodIdeal';
import { PaymentMethodKlarna } from './paymentMethodKlarna';
import { PaymentMethodLink } from './paymentMethodLink';
import { PaymentMethodP24 } from './paymentMethodP24';
import { PaymentMethodSepaDebit } from './paymentMethodSepaDebit';
import { PaymentMethodSofort } from './paymentMethodSofort';
import { PaymentMethodUsBankAccount } from './paymentMethodUsBankAccount';
import { RadarRadarOptions } from './radarRadarOptions';

/**
* The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
*/
export class PaymentMethodDetailsBancontactGeneratedSepaDebit {
    'acssDebit'?: PaymentMethodAcssDebit;
    /**
    * 
    */
    'affirm'?: object;
    /**
    * 
    */
    'afterpayClearpay'?: object;
    /**
    * 
    */
    'alipay'?: object;
    'auBecsDebit'?: PaymentMethodAuBecsDebit;
    'bacsDebit'?: PaymentMethodBacsDebit;
    /**
    * 
    */
    'bancontact'?: object;
    'billingDetails': BillingDetails;
    /**
    * 
    */
    'blik'?: object;
    'boleto'?: PaymentMethodBoleto;
    'card'?: PaymentMethodCard;
    /**
    * 
    */
    'cardPresent'?: object;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'customer': PaymentMethodCustomer | null;
    /**
    * 
    */
    'customerBalance'?: object;
    'eps'?: PaymentMethodEps;
    'fpx'?: PaymentMethodFpx;
    /**
    * 
    */
    'giropay'?: object;
    /**
    * 
    */
    'grabpay'?: object;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'ideal'?: PaymentMethodIdeal;
    /**
    * 
    */
    'interacPresent'?: object;
    'klarna'?: PaymentMethodKlarna;
    /**
    * 
    */
    'konbini'?: object;
    'link'?: PaymentMethodLink;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; } | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': PaymentMethodDetailsBancontactGeneratedSepaDebit.ObjectEnum;
    /**
    * 
    */
    'oxxo'?: object;
    'p24'?: PaymentMethodP24;
    /**
    * 
    */
    'paynow'?: object;
    /**
    * 
    */
    'pix'?: object;
    /**
    * 
    */
    'promptpay'?: object;
    'radarOptions'?: RadarRadarOptions;
    'sepaDebit'?: PaymentMethodSepaDebit;
    'sofort'?: PaymentMethodSofort;
    /**
    * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
    */
    'type': PaymentMethodDetailsBancontactGeneratedSepaDebit.TypeEnum;
    'usBankAccount'?: PaymentMethodUsBankAccount;
    /**
    * 
    */
    'wechatPay'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acssDebit",
            "baseName": "acss_debit",
            "type": "PaymentMethodAcssDebit"
        },
        {
            "name": "affirm",
            "baseName": "affirm",
            "type": "object"
        },
        {
            "name": "afterpayClearpay",
            "baseName": "afterpay_clearpay",
            "type": "object"
        },
        {
            "name": "alipay",
            "baseName": "alipay",
            "type": "object"
        },
        {
            "name": "auBecsDebit",
            "baseName": "au_becs_debit",
            "type": "PaymentMethodAuBecsDebit"
        },
        {
            "name": "bacsDebit",
            "baseName": "bacs_debit",
            "type": "PaymentMethodBacsDebit"
        },
        {
            "name": "bancontact",
            "baseName": "bancontact",
            "type": "object"
        },
        {
            "name": "billingDetails",
            "baseName": "billing_details",
            "type": "BillingDetails"
        },
        {
            "name": "blik",
            "baseName": "blik",
            "type": "object"
        },
        {
            "name": "boleto",
            "baseName": "boleto",
            "type": "PaymentMethodBoleto"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "PaymentMethodCard"
        },
        {
            "name": "cardPresent",
            "baseName": "card_present",
            "type": "object"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "PaymentMethodCustomer"
        },
        {
            "name": "customerBalance",
            "baseName": "customer_balance",
            "type": "object"
        },
        {
            "name": "eps",
            "baseName": "eps",
            "type": "PaymentMethodEps"
        },
        {
            "name": "fpx",
            "baseName": "fpx",
            "type": "PaymentMethodFpx"
        },
        {
            "name": "giropay",
            "baseName": "giropay",
            "type": "object"
        },
        {
            "name": "grabpay",
            "baseName": "grabpay",
            "type": "object"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "ideal",
            "baseName": "ideal",
            "type": "PaymentMethodIdeal"
        },
        {
            "name": "interacPresent",
            "baseName": "interac_present",
            "type": "object"
        },
        {
            "name": "klarna",
            "baseName": "klarna",
            "type": "PaymentMethodKlarna"
        },
        {
            "name": "konbini",
            "baseName": "konbini",
            "type": "object"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "PaymentMethodLink"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebit.ObjectEnum"
        },
        {
            "name": "oxxo",
            "baseName": "oxxo",
            "type": "object"
        },
        {
            "name": "p24",
            "baseName": "p24",
            "type": "PaymentMethodP24"
        },
        {
            "name": "paynow",
            "baseName": "paynow",
            "type": "object"
        },
        {
            "name": "pix",
            "baseName": "pix",
            "type": "object"
        },
        {
            "name": "promptpay",
            "baseName": "promptpay",
            "type": "object"
        },
        {
            "name": "radarOptions",
            "baseName": "radar_options",
            "type": "RadarRadarOptions"
        },
        {
            "name": "sepaDebit",
            "baseName": "sepa_debit",
            "type": "PaymentMethodSepaDebit"
        },
        {
            "name": "sofort",
            "baseName": "sofort",
            "type": "PaymentMethodSofort"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebit.TypeEnum"
        },
        {
            "name": "usBankAccount",
            "baseName": "us_bank_account",
            "type": "PaymentMethodUsBankAccount"
        },
        {
            "name": "wechatPay",
            "baseName": "wechat_pay",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsBancontactGeneratedSepaDebit.attributeTypeMap;
    }
}

export namespace PaymentMethodDetailsBancontactGeneratedSepaDebit {
    export enum ObjectEnum {
        PaymentMethod = <any> 'payment_method'
    }
    export enum TypeEnum {
        AcssDebit = <any> 'acss_debit',
        Affirm = <any> 'affirm',
        AfterpayClearpay = <any> 'afterpay_clearpay',
        Alipay = <any> 'alipay',
        AuBecsDebit = <any> 'au_becs_debit',
        BacsDebit = <any> 'bacs_debit',
        Bancontact = <any> 'bancontact',
        Blik = <any> 'blik',
        Boleto = <any> 'boleto',
        Card = <any> 'card',
        CardPresent = <any> 'card_present',
        CustomerBalance = <any> 'customer_balance',
        Eps = <any> 'eps',
        Fpx = <any> 'fpx',
        Giropay = <any> 'giropay',
        Grabpay = <any> 'grabpay',
        Ideal = <any> 'ideal',
        InteracPresent = <any> 'interac_present',
        Klarna = <any> 'klarna',
        Konbini = <any> 'konbini',
        Link = <any> 'link',
        Oxxo = <any> 'oxxo',
        P24 = <any> 'p24',
        Paynow = <any> 'paynow',
        Pix = <any> 'pix',
        Promptpay = <any> 'promptpay',
        SepaDebit = <any> 'sepa_debit',
        Sofort = <any> 'sofort',
        UsBankAccount = <any> 'us_bank_account',
        WechatPay = <any> 'wechat_pay'
    }
}
