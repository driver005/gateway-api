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
export class PaymentMethodDetailsCardPresentReceipt {
    /**
    * The type of account being debited or credited
    */
    'accountType'?: PaymentMethodDetailsCardPresentReceipt.AccountTypeEnum;
    /**
    * EMV tag 9F26, cryptogram generated by the integrated circuit chip.
    */
    'applicationCryptogram': string | null;
    /**
    * Mnenomic of the Application Identifier.
    */
    'applicationPreferredName': string | null;
    /**
    * Identifier for this transaction.
    */
    'authorizationCode': string | null;
    /**
    * EMV tag 8A. A code returned by the card issuer.
    */
    'authorizationResponseCode': string | null;
    /**
    * How the cardholder verified ownership of the card.
    */
    'cardholderVerificationMethod': string | null;
    /**
    * EMV tag 84. Similar to the application identifier stored on the integrated circuit chip.
    */
    'dedicatedFileName': string | null;
    /**
    * The outcome of a series of EMV functions performed by the card reader.
    */
    'terminalVerificationResults': string | null;
    /**
    * An indication of various EMV functions performed during the transaction.
    */
    'transactionStatusInformation': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "PaymentMethodDetailsCardPresentReceipt.AccountTypeEnum"
        },
        {
            "name": "applicationCryptogram",
            "baseName": "application_cryptogram",
            "type": "string"
        },
        {
            "name": "applicationPreferredName",
            "baseName": "application_preferred_name",
            "type": "string"
        },
        {
            "name": "authorizationCode",
            "baseName": "authorization_code",
            "type": "string"
        },
        {
            "name": "authorizationResponseCode",
            "baseName": "authorization_response_code",
            "type": "string"
        },
        {
            "name": "cardholderVerificationMethod",
            "baseName": "cardholder_verification_method",
            "type": "string"
        },
        {
            "name": "dedicatedFileName",
            "baseName": "dedicated_file_name",
            "type": "string"
        },
        {
            "name": "terminalVerificationResults",
            "baseName": "terminal_verification_results",
            "type": "string"
        },
        {
            "name": "transactionStatusInformation",
            "baseName": "transaction_status_information",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsCardPresentReceipt.attributeTypeMap;
    }
}

export namespace PaymentMethodDetailsCardPresentReceipt {
    export enum AccountTypeEnum {
        Checking = <any> 'checking',
        Credit = <any> 'credit',
        Prepaid = <any> 'prepaid',
        Unknown = <any> 'unknown'
    }
}
