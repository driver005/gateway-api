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
import { IssuingCard } from './issuingCard';
import { IssuingCardAuthorizationControls } from './issuingCardAuthorizationControls';
import { IssuingCardReplacementFor } from './issuingCardReplacementFor';
import { IssuingCardShipping1 } from './issuingCardShipping1';
import { IssuingCardWallets1 } from './issuingCardWallets1';
import { IssuingCardholder } from './issuingCardholder';

/**
* The latest card that replaces this card, if any.
*/
export class IssuingCardReplacedBy {
    /**
    * The brand of the card.
    */
    'brand': string;
    /**
    * The reason why the card was canceled.
    */
    'cancellationReason': IssuingCardReplacedBy.CancellationReasonEnum;
    'cardholder': IssuingCardholder;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Supported currencies are `usd` in the US, `eur` in the EU, and `gbp` in the UK.
    */
    'currency': string;
    /**
    * The card\'s CVC. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it\'s only available via the [\"Retrieve a card\" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via \"List all cards\" or any other endpoint.
    */
    'cvc'?: string;
    /**
    * The expiration month of the card.
    */
    'expMonth': number;
    /**
    * The expiration year of the card.
    */
    'expYear': number;
    /**
    * The financial account this card is attached to.
    */
    'financialAccount'?: string | null;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * The last 4 digits of the card number.
    */
    'last4': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * The full unredacted card number. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it\'s only available via the [\"Retrieve a card\" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via \"List all cards\" or any other endpoint.
    */
    'number'?: string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': IssuingCardReplacedBy.ObjectEnum;
    'replacedBy': IssuingCardReplacedBy | null;
    'replacementFor': IssuingCardReplacementFor | null;
    /**
    * The reason why the previous card needed to be replaced.
    */
    'replacementReason': IssuingCardReplacedBy.ReplacementReasonEnum;
    'shipping': IssuingCardShipping1 | null;
    'spendingControls': IssuingCardAuthorizationControls;
    /**
    * Whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`.
    */
    'status': IssuingCardReplacedBy.StatusEnum;
    /**
    * The type of the card.
    */
    'type': IssuingCardReplacedBy.TypeEnum;
    'wallets': IssuingCardWallets1 | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "cancellationReason",
            "baseName": "cancellation_reason",
            "type": "IssuingCardReplacedBy.CancellationReasonEnum"
        },
        {
            "name": "cardholder",
            "baseName": "cardholder",
            "type": "IssuingCardholder"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "cvc",
            "baseName": "cvc",
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
            "name": "financialAccount",
            "baseName": "financial_account",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
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
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "IssuingCardReplacedBy.ObjectEnum"
        },
        {
            "name": "replacedBy",
            "baseName": "replaced_by",
            "type": "IssuingCardReplacedBy"
        },
        {
            "name": "replacementFor",
            "baseName": "replacement_for",
            "type": "IssuingCardReplacementFor"
        },
        {
            "name": "replacementReason",
            "baseName": "replacement_reason",
            "type": "IssuingCardReplacedBy.ReplacementReasonEnum"
        },
        {
            "name": "shipping",
            "baseName": "shipping",
            "type": "IssuingCardShipping1"
        },
        {
            "name": "spendingControls",
            "baseName": "spending_controls",
            "type": "IssuingCardAuthorizationControls"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IssuingCardReplacedBy.StatusEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IssuingCardReplacedBy.TypeEnum"
        },
        {
            "name": "wallets",
            "baseName": "wallets",
            "type": "IssuingCardWallets1"
        }    ];

    static getAttributeTypeMap() {
        return IssuingCardReplacedBy.attributeTypeMap;
    }
}

export namespace IssuingCardReplacedBy {
    export enum CancellationReasonEnum {
        DesignRejected = <any> 'design_rejected',
        Lost = <any> 'lost',
        Stolen = <any> 'stolen'
    }
    export enum ObjectEnum {
        IssuingCard = <any> 'issuing.card'
    }
    export enum ReplacementReasonEnum {
        Damaged = <any> 'damaged',
        Expired = <any> 'expired',
        Lost = <any> 'lost',
        Stolen = <any> 'stolen'
    }
    export enum StatusEnum {
        Active = <any> 'active',
        Canceled = <any> 'canceled',
        Inactive = <any> 'inactive'
    }
    export enum TypeEnum {
        Physical = <any> 'physical',
        Virtual = <any> 'virtual'
    }
}
