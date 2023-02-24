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
import { InvoicesPaymentMethodOptionsAcssDebit } from './invoicesPaymentMethodOptionsAcssDebit';
import { InvoicesPaymentMethodOptionsBancontact } from './invoicesPaymentMethodOptionsBancontact';
import { InvoicesPaymentMethodOptionsCard } from './invoicesPaymentMethodOptionsCard';
import { InvoicesPaymentMethodOptionsCustomerBalance } from './invoicesPaymentMethodOptionsCustomerBalance';
import { InvoicesPaymentMethodOptionsKonbini } from './invoicesPaymentMethodOptionsKonbini';
import { InvoicesPaymentMethodOptionsUsBankAccount } from './invoicesPaymentMethodOptionsUsBankAccount';

/**
* 
*/
export class InvoicesPaymentMethodOptions {
    'acssDebit': InvoicesPaymentMethodOptionsAcssDebit | null;
    'bancontact': InvoicesPaymentMethodOptionsBancontact | null;
    'card': InvoicesPaymentMethodOptionsCard | null;
    'customerBalance': InvoicesPaymentMethodOptionsCustomerBalance | null;
    'konbini': InvoicesPaymentMethodOptionsKonbini | null;
    'usBankAccount': InvoicesPaymentMethodOptionsUsBankAccount | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acssDebit",
            "baseName": "acss_debit",
            "type": "InvoicesPaymentMethodOptionsAcssDebit"
        },
        {
            "name": "bancontact",
            "baseName": "bancontact",
            "type": "InvoicesPaymentMethodOptionsBancontact"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "InvoicesPaymentMethodOptionsCard"
        },
        {
            "name": "customerBalance",
            "baseName": "customer_balance",
            "type": "InvoicesPaymentMethodOptionsCustomerBalance"
        },
        {
            "name": "konbini",
            "baseName": "konbini",
            "type": "InvoicesPaymentMethodOptionsKonbini"
        },
        {
            "name": "usBankAccount",
            "baseName": "us_bank_account",
            "type": "InvoicesPaymentMethodOptionsUsBankAccount"
        }    ];

    static getAttributeTypeMap() {
        return InvoicesPaymentMethodOptions.attributeTypeMap;
    }
}

