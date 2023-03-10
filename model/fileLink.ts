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
import { FileLinkFile } from './fileLinkFile';

/**
* To share the contents of a `File` object with non-Stripe users, you can create a `FileLink`. `FileLink`s contain a URL that can be used to retrieve the contents of the file without authentication.
*/
export class FileLink {
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Whether this link is already expired.
    */
    'expired': boolean;
    /**
    * Time at which the link expires.
    */
    'expiresAt': number | null;
    'file': FileLinkFile;
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
    'metadata': { [key: string]: string; };
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': FileLink.ObjectEnum;
    /**
    * The publicly accessible URL to download the file.
    */
    'url': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "FileLinkFile"
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
            "type": "FileLink.ObjectEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FileLink.attributeTypeMap;
    }
}

export namespace FileLink {
    export enum ObjectEnum {
        FileLink = <any> 'file_link'
    }
}
