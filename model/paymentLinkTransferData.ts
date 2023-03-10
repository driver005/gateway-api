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
import { PaymentLinksResourceTransferData } from './paymentLinksResourceTransferData';
import { PaymentLinksResourceTransferDataDestination } from './paymentLinksResourceTransferDataDestination';

/**
* The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
*/
export class PaymentLinkTransferData {
    /**
    * The amount in %s that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
    */
    'amount': number | null;
    'destination': PaymentLinksResourceTransferDataDestination;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "PaymentLinksResourceTransferDataDestination"
        }    ];

    static getAttributeTypeMap() {
        return PaymentLinkTransferData.attributeTypeMap;
    }
}

