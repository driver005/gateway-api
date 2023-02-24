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
import { TerminalReaderAction } from './terminalReaderAction';
import { TerminalReaderLocation } from './terminalReaderLocation';

/**
* A Reader represents a physical device for accepting payment details.  Related guide: [Connecting to a Reader](https://stripe.com/docs/terminal/payments/connect-reader).
*/
export class TerminalReader {
    'action': TerminalReaderAction | null;
    /**
    * The current software version of the reader.
    */
    'deviceSwVersion': string | null;
    /**
    * Type of reader, one of `bbpos_wisepad3`, `stripe_m2`, `bbpos_chipper2x`, `bbpos_wisepos_e`, `verifone_P400`, or `simulated_wisepos_e`.
    */
    'deviceType': TerminalReader.DeviceTypeEnum;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * The local IP address of the reader.
    */
    'ipAddress': string | null;
    /**
    * Custom label given to the reader for easier identification.
    */
    'label': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    'location': TerminalReaderLocation | null;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': TerminalReader.ObjectEnum;
    /**
    * Serial number of the reader.
    */
    'serialNumber': string;
    /**
    * The networking status of the reader.
    */
    'status': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "TerminalReaderAction"
        },
        {
            "name": "deviceSwVersion",
            "baseName": "device_sw_version",
            "type": "string"
        },
        {
            "name": "deviceType",
            "baseName": "device_type",
            "type": "TerminalReader.DeviceTypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "TerminalReaderLocation"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "TerminalReader.ObjectEnum"
        },
        {
            "name": "serialNumber",
            "baseName": "serial_number",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TerminalReader.attributeTypeMap;
    }
}

export namespace TerminalReader {
    export enum DeviceTypeEnum {
        BbposChipper2x = <any> 'bbpos_chipper2x',
        BbposWisepad3 = <any> 'bbpos_wisepad3',
        BbposWiseposE = <any> 'bbpos_wisepos_e',
        SimulatedWiseposE = <any> 'simulated_wisepos_e',
        StripeM2 = <any> 'stripe_m2',
        VerifoneP400 = <any> 'verifone_P400'
    }
    export enum ObjectEnum {
        TerminalReader = <any> 'terminal.reader'
    }
}