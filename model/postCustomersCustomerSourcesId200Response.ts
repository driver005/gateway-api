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
import { BankAccount } from './bankAccount';
import { BankAccountAccount } from './bankAccountAccount';
import { Card } from './card';
import { Source } from './source';
import { SourceCodeVerificationFlow } from './sourceCodeVerificationFlow';
import { SourceOrder } from './sourceOrder';
import { SourceOwner1 } from './sourceOwner1';
import { SourceReceiverFlow } from './sourceReceiverFlow';
import { SourceRedirectFlow } from './sourceRedirectFlow';
import { SourceTypeAchCreditTransfer } from './sourceTypeAchCreditTransfer';
import { SourceTypeAchDebit } from './sourceTypeAchDebit';
import { SourceTypeAcssDebit } from './sourceTypeAcssDebit';
import { SourceTypeAlipay } from './sourceTypeAlipay';
import { SourceTypeAuBecsDebit } from './sourceTypeAuBecsDebit';
import { SourceTypeBancontact } from './sourceTypeBancontact';
import { SourceTypeCard } from './sourceTypeCard';
import { SourceTypeCardPresent } from './sourceTypeCardPresent';
import { SourceTypeEps } from './sourceTypeEps';
import { SourceTypeGiropay } from './sourceTypeGiropay';
import { SourceTypeIdeal } from './sourceTypeIdeal';
import { SourceTypeKlarna } from './sourceTypeKlarna';
import { SourceTypeMultibanco } from './sourceTypeMultibanco';
import { SourceTypeP24 } from './sourceTypeP24';
import { SourceTypeSepaCreditTransfer } from './sourceTypeSepaCreditTransfer';
import { SourceTypeSepaDebit } from './sourceTypeSepaDebit';
import { SourceTypeSofort } from './sourceTypeSofort';
import { SourceTypeThreeDSecure } from './sourceTypeThreeDSecure';
import { SourceTypeWechat } from './sourceTypeWechat';

export class PostCustomersCustomerSourcesId200Response {
    'account'?: BankAccountAccount | null;
    /**
    * City/District/Suburb/Town/Village.
    */
    'addressCity': string | null;
    /**
    * Billing address country, if provided when creating card.
    */
    'addressCountry': string | null;
    /**
    * Address line 1 (Street address/PO Box/Company name).
    */
    'addressLine1': string | null;
    /**
    * If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
    */
    'addressLine1Check': string | null;
    /**
    * Address line 2 (Apartment/Suite/Unit/Building).
    */
    'addressLine2': string | null;
    /**
    * State/County/Province/Region.
    */
    'addressState': string | null;
    /**
    * ZIP or postal code.
    */
    'addressZip': string | null;
    /**
    * If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
    */
    'addressZipCheck': string | null;
    /**
    * A set of available payout methods for this bank account. Only values from this set should be passed as the `method` when creating a payout.
    */
    'availablePayoutMethods'?: Array<PostCustomersCustomerSourcesId200Response.AvailablePayoutMethodsEnum>;
    /**
    * Card brand. Can be `American Express`, `Diners Club`, `Discover`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
    */
    'brand': string;
    /**
    * Two-letter ISO code representing the country the bank account is located in.
    */
    'country': string;
    /**
    * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
    */
    'currency': string | null;
    /**
    * The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
    */
    'customer'?: string;
    /**
    * If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. A result of unchecked indicates that CVC was provided but hasn\'t been checked yet. Checks are typically performed when attaching a card to a Customer object, or when creating a charge. For more details, see [Check if a card is valid without a charge](https://support.stripe.com/questions/check-if-a-card-is-valid-without-a-charge).
    */
    'cvcCheck': string | null;
    /**
    * Whether this bank account is the default external account for its currency.
    */
    'defaultForCurrency'?: boolean | null;
    /**
    * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
    */
    'description'?: string;
    /**
    * (For tokenized numbers only.) The last four digits of the device account number.
    */
    'dynamicLast4': string | null;
    /**
    * Two-digit number representing the card\'s expiration month.
    */
    'expMonth': number;
    /**
    * Four-digit number representing the card\'s expiration year.
    */
    'expYear': number;
    /**
    * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
    */
    'fingerprint': string | null;
    /**
    * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
    */
    'funding': string;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
    */
    'iin'?: string;
    /**
    * The name of the card\'s issuing bank. (For internal use only and not typically available in standard API requests.)
    */
    'issuer'?: string;
    /**
    * The last four digits of the bank account number.
    */
    'last4': string;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; } | null;
    /**
    * Cardholder name.
    */
    'name': string | null;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': PostCustomersCustomerSourcesId200Response.ObjectEnum;
    /**
    * The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
    */
    'status': string;
    /**
    * If the card number is tokenized, this is the method that was used. Can be `android_pay` (includes Google Pay), `apple_pay`, `masterpass`, `visa_checkout`, or null.
    */
    'tokenizationMethod': string | null;
    /**
    * The name of the person or business that owns the bank account.
    */
    'accountHolderName': string | null;
    /**
    * The type of entity that holds the account. This can be either `individual` or `company`.
    */
    'accountHolderType': string | null;
    /**
    * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
    */
    'accountType': string | null;
    /**
    * Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
    */
    'bankName': string | null;
    /**
    * The routing transit number for the bank account.
    */
    'routingNumber': string | null;
    'achCreditTransfer'?: SourceTypeAchCreditTransfer;
    'achDebit'?: SourceTypeAchDebit;
    'acssDebit'?: SourceTypeAcssDebit;
    'alipay'?: SourceTypeAlipay;
    /**
    * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
    */
    'amount': number | null;
    'auBecsDebit'?: SourceTypeAuBecsDebit;
    'bancontact'?: SourceTypeBancontact;
    'card'?: SourceTypeCard;
    'cardPresent'?: SourceTypeCardPresent;
    /**
    * The client secret of the source. Used for client-side retrieval using a publishable key.
    */
    'clientSecret': string;
    'codeVerification'?: SourceCodeVerificationFlow;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'eps'?: SourceTypeEps;
    /**
    * The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
    */
    'flow': string;
    'giropay'?: SourceTypeGiropay;
    'ideal'?: SourceTypeIdeal;
    'klarna'?: SourceTypeKlarna;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    'multibanco'?: SourceTypeMultibanco;
    'owner': SourceOwner1 | null;
    'p24'?: SourceTypeP24;
    'receiver'?: SourceReceiverFlow;
    'redirect'?: SourceRedirectFlow;
    'sepaCreditTransfer'?: SourceTypeSepaCreditTransfer;
    'sepaDebit'?: SourceTypeSepaDebit;
    'sofort'?: SourceTypeSofort;
    'sourceOrder'?: SourceOrder;
    /**
    * Extra information about a source. This will appear on your customer\'s statement every time you charge the source.
    */
    'statementDescriptor': string | null;
    'threeDSecure'?: SourceTypeThreeDSecure;
    /**
    * The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
    */
    'type': PostCustomersCustomerSourcesId200Response.TypeEnum;
    /**
    * Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned.
    */
    'usage': string | null;
    'wechat'?: SourceTypeWechat;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "BankAccountAccount"
        },
        {
            "name": "addressCity",
            "baseName": "address_city",
            "type": "string"
        },
        {
            "name": "addressCountry",
            "baseName": "address_country",
            "type": "string"
        },
        {
            "name": "addressLine1",
            "baseName": "address_line1",
            "type": "string"
        },
        {
            "name": "addressLine1Check",
            "baseName": "address_line1_check",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "address_line2",
            "type": "string"
        },
        {
            "name": "addressState",
            "baseName": "address_state",
            "type": "string"
        },
        {
            "name": "addressZip",
            "baseName": "address_zip",
            "type": "string"
        },
        {
            "name": "addressZipCheck",
            "baseName": "address_zip_check",
            "type": "string"
        },
        {
            "name": "availablePayoutMethods",
            "baseName": "available_payout_methods",
            "type": "Array<PostCustomersCustomerSourcesId200Response.AvailablePayoutMethodsEnum>"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string"
        },
        {
            "name": "cvcCheck",
            "baseName": "cvc_check",
            "type": "string"
        },
        {
            "name": "defaultForCurrency",
            "baseName": "default_for_currency",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "dynamicLast4",
            "baseName": "dynamic_last4",
            "type": "string"
        },
        {
            "name": "expMonth",
            "baseName": "exp_month",
            "type": "number"
        },
        {
            "name": "expYear",
            "baseName": "exp_year",
            "type": "number"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "funding",
            "baseName": "funding",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "iin",
            "baseName": "iin",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "PostCustomersCustomerSourcesId200Response.ObjectEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "tokenizationMethod",
            "baseName": "tokenization_method",
            "type": "string"
        },
        {
            "name": "accountHolderName",
            "baseName": "account_holder_name",
            "type": "string"
        },
        {
            "name": "accountHolderType",
            "baseName": "account_holder_type",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "string"
        },
        {
            "name": "bankName",
            "baseName": "bank_name",
            "type": "string"
        },
        {
            "name": "routingNumber",
            "baseName": "routing_number",
            "type": "string"
        },
        {
            "name": "achCreditTransfer",
            "baseName": "ach_credit_transfer",
            "type": "SourceTypeAchCreditTransfer"
        },
        {
            "name": "achDebit",
            "baseName": "ach_debit",
            "type": "SourceTypeAchDebit"
        },
        {
            "name": "acssDebit",
            "baseName": "acss_debit",
            "type": "SourceTypeAcssDebit"
        },
        {
            "name": "alipay",
            "baseName": "alipay",
            "type": "SourceTypeAlipay"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "auBecsDebit",
            "baseName": "au_becs_debit",
            "type": "SourceTypeAuBecsDebit"
        },
        {
            "name": "bancontact",
            "baseName": "bancontact",
            "type": "SourceTypeBancontact"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "SourceTypeCard"
        },
        {
            "name": "cardPresent",
            "baseName": "card_present",
            "type": "SourceTypeCardPresent"
        },
        {
            "name": "clientSecret",
            "baseName": "client_secret",
            "type": "string"
        },
        {
            "name": "codeVerification",
            "baseName": "code_verification",
            "type": "SourceCodeVerificationFlow"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "eps",
            "baseName": "eps",
            "type": "SourceTypeEps"
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "string"
        },
        {
            "name": "giropay",
            "baseName": "giropay",
            "type": "SourceTypeGiropay"
        },
        {
            "name": "ideal",
            "baseName": "ideal",
            "type": "SourceTypeIdeal"
        },
        {
            "name": "klarna",
            "baseName": "klarna",
            "type": "SourceTypeKlarna"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "multibanco",
            "baseName": "multibanco",
            "type": "SourceTypeMultibanco"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "SourceOwner1"
        },
        {
            "name": "p24",
            "baseName": "p24",
            "type": "SourceTypeP24"
        },
        {
            "name": "receiver",
            "baseName": "receiver",
            "type": "SourceReceiverFlow"
        },
        {
            "name": "redirect",
            "baseName": "redirect",
            "type": "SourceRedirectFlow"
        },
        {
            "name": "sepaCreditTransfer",
            "baseName": "sepa_credit_transfer",
            "type": "SourceTypeSepaCreditTransfer"
        },
        {
            "name": "sepaDebit",
            "baseName": "sepa_debit",
            "type": "SourceTypeSepaDebit"
        },
        {
            "name": "sofort",
            "baseName": "sofort",
            "type": "SourceTypeSofort"
        },
        {
            "name": "sourceOrder",
            "baseName": "source_order",
            "type": "SourceOrder"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "threeDSecure",
            "baseName": "three_d_secure",
            "type": "SourceTypeThreeDSecure"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PostCustomersCustomerSourcesId200Response.TypeEnum"
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "string"
        },
        {
            "name": "wechat",
            "baseName": "wechat",
            "type": "SourceTypeWechat"
        }    ];

    static getAttributeTypeMap() {
        return PostCustomersCustomerSourcesId200Response.attributeTypeMap;
    }
}

export namespace PostCustomersCustomerSourcesId200Response {
    export enum AvailablePayoutMethodsEnum {
        Instant = <any> 'instant',
        Standard = <any> 'standard'
    }
    export enum ObjectEnum {
        Source = <any> 'source'
    }
    export enum TypeEnum {
        AchCreditTransfer = <any> 'ach_credit_transfer',
        AchDebit = <any> 'ach_debit',
        AcssDebit = <any> 'acss_debit',
        Alipay = <any> 'alipay',
        AuBecsDebit = <any> 'au_becs_debit',
        Bancontact = <any> 'bancontact',
        Card = <any> 'card',
        CardPresent = <any> 'card_present',
        Eps = <any> 'eps',
        Giropay = <any> 'giropay',
        Ideal = <any> 'ideal',
        Klarna = <any> 'klarna',
        Multibanco = <any> 'multibanco',
        P24 = <any> 'p24',
        SepaCreditTransfer = <any> 'sepa_credit_transfer',
        SepaDebit = <any> 'sepa_debit',
        Sofort = <any> 'sofort',
        ThreeDSecure = <any> 'three_d_secure',
        Wechat = <any> 'wechat'
    }
}