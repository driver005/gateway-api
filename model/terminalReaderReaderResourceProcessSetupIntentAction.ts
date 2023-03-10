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
import { TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent } from './terminalReaderReaderResourceProcessSetupIntentActionSetupIntent';

/**
* Represents a reader action to process a setup intent
*/
export class TerminalReaderReaderResourceProcessSetupIntentAction {
    /**
    * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
    */
    'generatedCard'?: string;
    'setupIntent': TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "generatedCard",
            "baseName": "generated_card",
            "type": "string"
        },
        {
            "name": "setupIntent",
            "baseName": "setup_intent",
            "type": "TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent"
        }    ];

    static getAttributeTypeMap() {
        return TerminalReaderReaderResourceProcessSetupIntentAction.attributeTypeMap;
    }
}

