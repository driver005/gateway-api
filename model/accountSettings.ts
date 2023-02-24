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
import { AccountBacsDebitPaymentsSettings } from './accountBacsDebitPaymentsSettings';
import { AccountBrandingSettings } from './accountBrandingSettings';
import { AccountCardIssuingSettings } from './accountCardIssuingSettings';
import { AccountCardPaymentsSettings } from './accountCardPaymentsSettings';
import { AccountDashboardSettings } from './accountDashboardSettings';
import { AccountPaymentsSettings } from './accountPaymentsSettings';
import { AccountPayoutSettings } from './accountPayoutSettings';
import { AccountSepaDebitPaymentsSettings } from './accountSepaDebitPaymentsSettings';
import { AccountTreasurySettings } from './accountTreasurySettings';

/**
* 
*/
export class AccountSettings {
    'bacsDebitPayments'?: AccountBacsDebitPaymentsSettings;
    'branding': AccountBrandingSettings;
    'cardIssuing'?: AccountCardIssuingSettings;
    'cardPayments': AccountCardPaymentsSettings;
    'dashboard': AccountDashboardSettings;
    'payments': AccountPaymentsSettings;
    'payouts'?: AccountPayoutSettings;
    'sepaDebitPayments'?: AccountSepaDebitPaymentsSettings;
    'treasury'?: AccountTreasurySettings;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bacsDebitPayments",
            "baseName": "bacs_debit_payments",
            "type": "AccountBacsDebitPaymentsSettings"
        },
        {
            "name": "branding",
            "baseName": "branding",
            "type": "AccountBrandingSettings"
        },
        {
            "name": "cardIssuing",
            "baseName": "card_issuing",
            "type": "AccountCardIssuingSettings"
        },
        {
            "name": "cardPayments",
            "baseName": "card_payments",
            "type": "AccountCardPaymentsSettings"
        },
        {
            "name": "dashboard",
            "baseName": "dashboard",
            "type": "AccountDashboardSettings"
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "AccountPaymentsSettings"
        },
        {
            "name": "payouts",
            "baseName": "payouts",
            "type": "AccountPayoutSettings"
        },
        {
            "name": "sepaDebitPayments",
            "baseName": "sepa_debit_payments",
            "type": "AccountSepaDebitPaymentsSettings"
        },
        {
            "name": "treasury",
            "baseName": "treasury",
            "type": "AccountTreasurySettings"
        }    ];

    static getAttributeTypeMap() {
        return AccountSettings.attributeTypeMap;
    }
}

