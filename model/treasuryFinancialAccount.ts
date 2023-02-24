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
import { TreasuryFinancialAccountFeatures } from './treasuryFinancialAccountFeatures';
import { TreasuryFinancialAccountPlatformRestrictions } from './treasuryFinancialAccountPlatformRestrictions';
import { TreasuryFinancialAccountsResourceBalance } from './treasuryFinancialAccountsResourceBalance';
import { TreasuryFinancialAccountsResourceFinancialAddress } from './treasuryFinancialAccountsResourceFinancialAddress';
import { TreasuryFinancialAccountsResourceStatusDetails } from './treasuryFinancialAccountsResourceStatusDetails';

/**
* Stripe Treasury provides users with a container for money called a FinancialAccount that is separate from their Payments balance. FinancialAccounts serve as the source and destination of Treasury’s money movement APIs.
*/
export class TreasuryFinancialAccount {
    /**
    * The array of paths to active Features in the Features hash.
    */
    'activeFeatures'?: Array<TreasuryFinancialAccount.ActiveFeaturesEnum>;
    'balance': TreasuryFinancialAccountsResourceBalance;
    /**
    * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
    */
    'country': string;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'features'?: TreasuryFinancialAccountFeatures;
    /**
    * The set of credentials that resolve to a FinancialAccount.
    */
    'financialAddresses': Array<TreasuryFinancialAccountsResourceFinancialAddress>;
    /**
    * Unique identifier for the object.
    */
    'id': string;
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
    'object': TreasuryFinancialAccount.ObjectEnum;
    /**
    * The array of paths to pending Features in the Features hash.
    */
    'pendingFeatures'?: Array<TreasuryFinancialAccount.PendingFeaturesEnum>;
    'platformRestrictions'?: TreasuryFinancialAccountPlatformRestrictions | null;
    /**
    * The array of paths to restricted Features in the Features hash.
    */
    'restrictedFeatures'?: Array<TreasuryFinancialAccount.RestrictedFeaturesEnum>;
    /**
    * The enum specifying what state the account is in.
    */
    'status': TreasuryFinancialAccount.StatusEnum;
    'statusDetails': TreasuryFinancialAccountsResourceStatusDetails;
    /**
    * The currencies the FinancialAccount can hold a balance in. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
    */
    'supportedCurrencies': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeFeatures",
            "baseName": "active_features",
            "type": "Array<TreasuryFinancialAccount.ActiveFeaturesEnum>"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "TreasuryFinancialAccountsResourceBalance"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "TreasuryFinancialAccountFeatures"
        },
        {
            "name": "financialAddresses",
            "baseName": "financial_addresses",
            "type": "Array<TreasuryFinancialAccountsResourceFinancialAddress>"
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "TreasuryFinancialAccount.ObjectEnum"
        },
        {
            "name": "pendingFeatures",
            "baseName": "pending_features",
            "type": "Array<TreasuryFinancialAccount.PendingFeaturesEnum>"
        },
        {
            "name": "platformRestrictions",
            "baseName": "platform_restrictions",
            "type": "TreasuryFinancialAccountPlatformRestrictions"
        },
        {
            "name": "restrictedFeatures",
            "baseName": "restricted_features",
            "type": "Array<TreasuryFinancialAccount.RestrictedFeaturesEnum>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TreasuryFinancialAccount.StatusEnum"
        },
        {
            "name": "statusDetails",
            "baseName": "status_details",
            "type": "TreasuryFinancialAccountsResourceStatusDetails"
        },
        {
            "name": "supportedCurrencies",
            "baseName": "supported_currencies",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return TreasuryFinancialAccount.attributeTypeMap;
    }
}

export namespace TreasuryFinancialAccount {
    export enum ActiveFeaturesEnum {
        CardIssuing = <any> 'card_issuing',
        DepositInsurance = <any> 'deposit_insurance',
        FinancialAddressesAba = <any> 'financial_addresses.aba',
        InboundTransfersAch = <any> 'inbound_transfers.ach',
        IntraStripeFlows = <any> 'intra_stripe_flows',
        OutboundPaymentsAch = <any> 'outbound_payments.ach',
        OutboundPaymentsUsDomesticWire = <any> 'outbound_payments.us_domestic_wire',
        OutboundTransfersAch = <any> 'outbound_transfers.ach',
        OutboundTransfersUsDomesticWire = <any> 'outbound_transfers.us_domestic_wire',
        RemoteDepositCapture = <any> 'remote_deposit_capture'
    }
    export enum ObjectEnum {
        TreasuryFinancialAccount = <any> 'treasury.financial_account'
    }
    export enum PendingFeaturesEnum {
        CardIssuing = <any> 'card_issuing',
        DepositInsurance = <any> 'deposit_insurance',
        FinancialAddressesAba = <any> 'financial_addresses.aba',
        InboundTransfersAch = <any> 'inbound_transfers.ach',
        IntraStripeFlows = <any> 'intra_stripe_flows',
        OutboundPaymentsAch = <any> 'outbound_payments.ach',
        OutboundPaymentsUsDomesticWire = <any> 'outbound_payments.us_domestic_wire',
        OutboundTransfersAch = <any> 'outbound_transfers.ach',
        OutboundTransfersUsDomesticWire = <any> 'outbound_transfers.us_domestic_wire',
        RemoteDepositCapture = <any> 'remote_deposit_capture'
    }
    export enum RestrictedFeaturesEnum {
        CardIssuing = <any> 'card_issuing',
        DepositInsurance = <any> 'deposit_insurance',
        FinancialAddressesAba = <any> 'financial_addresses.aba',
        InboundTransfersAch = <any> 'inbound_transfers.ach',
        IntraStripeFlows = <any> 'intra_stripe_flows',
        OutboundPaymentsAch = <any> 'outbound_payments.ach',
        OutboundPaymentsUsDomesticWire = <any> 'outbound_payments.us_domestic_wire',
        OutboundTransfersAch = <any> 'outbound_transfers.ach',
        OutboundTransfersUsDomesticWire = <any> 'outbound_transfers.us_domestic_wire',
        RemoteDepositCapture = <any> 'remote_deposit_capture'
    }
    export enum StatusEnum {
        Closed = <any> 'closed',
        Open = <any> 'open'
    }
}