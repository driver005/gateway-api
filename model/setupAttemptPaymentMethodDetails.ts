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
import { SetupAttemptPaymentMethodDetailsBancontact } from './setupAttemptPaymentMethodDetailsBancontact';
import { SetupAttemptPaymentMethodDetailsCard } from './setupAttemptPaymentMethodDetailsCard';
import { SetupAttemptPaymentMethodDetailsCardPresent } from './setupAttemptPaymentMethodDetailsCardPresent';
import { SetupAttemptPaymentMethodDetailsIdeal } from './setupAttemptPaymentMethodDetailsIdeal';
import { SetupAttemptPaymentMethodDetailsSofort } from './setupAttemptPaymentMethodDetailsSofort';

/**
* 
*/
export class SetupAttemptPaymentMethodDetails {
    /**
    * 
    */
    'acssDebit'?: object;
    /**
    * 
    */
    'auBecsDebit'?: object;
    /**
    * 
    */
    'bacsDebit'?: object;
    'bancontact'?: SetupAttemptPaymentMethodDetailsBancontact;
    /**
    * 
    */
    'blik'?: object;
    /**
    * 
    */
    'boleto'?: object;
    'card'?: SetupAttemptPaymentMethodDetailsCard;
    'cardPresent'?: SetupAttemptPaymentMethodDetailsCardPresent;
    'ideal'?: SetupAttemptPaymentMethodDetailsIdeal;
    /**
    * 
    */
    'klarna'?: object;
    /**
    * 
    */
    'link'?: object;
    /**
    * 
    */
    'sepaDebit'?: object;
    'sofort'?: SetupAttemptPaymentMethodDetailsSofort;
    /**
    * The type of the payment method used in the SetupIntent (e.g., `card`). An additional hash is included on `payment_method_details` with a name matching this value. It contains confirmation-specific information for the payment method.
    */
    'type': string;
    /**
    * 
    */
    'usBankAccount'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acssDebit",
            "baseName": "acss_debit",
            "type": "object"
        },
        {
            "name": "auBecsDebit",
            "baseName": "au_becs_debit",
            "type": "object"
        },
        {
            "name": "bacsDebit",
            "baseName": "bacs_debit",
            "type": "object"
        },
        {
            "name": "bancontact",
            "baseName": "bancontact",
            "type": "SetupAttemptPaymentMethodDetailsBancontact"
        },
        {
            "name": "blik",
            "baseName": "blik",
            "type": "object"
        },
        {
            "name": "boleto",
            "baseName": "boleto",
            "type": "object"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "SetupAttemptPaymentMethodDetailsCard"
        },
        {
            "name": "cardPresent",
            "baseName": "card_present",
            "type": "SetupAttemptPaymentMethodDetailsCardPresent"
        },
        {
            "name": "ideal",
            "baseName": "ideal",
            "type": "SetupAttemptPaymentMethodDetailsIdeal"
        },
        {
            "name": "klarna",
            "baseName": "klarna",
            "type": "object"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "object"
        },
        {
            "name": "sepaDebit",
            "baseName": "sepa_debit",
            "type": "object"
        },
        {
            "name": "sofort",
            "baseName": "sofort",
            "type": "SetupAttemptPaymentMethodDetailsSofort"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "usBankAccount",
            "baseName": "us_bank_account",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return SetupAttemptPaymentMethodDetails.attributeTypeMap;
    }
}

