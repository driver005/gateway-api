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
import { Card } from './card';

/**
* Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. A token representing this information is returned to your server to use. You should use our [recommended payments integrations](https://stripe.com/docs/payments) to perform this process client-side. This ensures that no sensitive card data touches your server, and allows your integration to operate in a PCI-compliant way.  If you cannot use client-side tokenization, you can also create tokens using the API with either your publishable or secret API key. Keep in mind that if your integration uses this method, you are responsible for any PCI compliance that may be required, and you must keep your secret API key safe. Unlike with client-side tokenization, your customer\'s information is not sent directly to Stripe, so we cannot determine how it is handled or stored.  Tokens cannot be stored or used more than once. To store card or bank account information for later use, you can create [Customer](https://stripe.com/docs/api#customers) objects or [Custom accounts](https://stripe.com/docs/api#external_accounts). Note that [Radar](https://stripe.com/docs/radar), our integrated solution for automatic fraud protection, performs best with integrations that use client-side tokenization.  Related guide: [Accept a payment](https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token)
*/
export class Token {
    'bankAccount'?: BankAccount;
    'card'?: Card;
    /**
    * IP address of the client that generated the token.
    */
    'clientIp': string | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': Token.ObjectEnum;
    /**
    * Type of the token: `account`, `bank_account`, `card`, or `pii`.
    */
    'type': string;
    /**
    * Whether this token has already been used (tokens can be used only once).
    */
    'used': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankAccount",
            "baseName": "bank_account",
            "type": "BankAccount"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        },
        {
            "name": "clientIp",
            "baseName": "client_ip",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "Token.ObjectEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "used",
            "baseName": "used",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Token.attributeTypeMap;
    }
}

export namespace Token {
    export enum ObjectEnum {
        Token = <any> 'token'
    }
}
