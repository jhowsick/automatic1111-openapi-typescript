/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PNGInfoRequest
 */
export interface PNGInfoRequest {
    /**
     * The base64 encoded PNG image
     * @type {string}
     * @memberof PNGInfoRequest
     */
    image: string;
}

/**
 * Check if a given object implements the PNGInfoRequest interface.
 */
export function instanceOfPNGInfoRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "image" in value;

    return isInstance;
}

export function PNGInfoRequestFromJSON(json: any): PNGInfoRequest {
    return PNGInfoRequestFromJSONTyped(json, false);
}

export function PNGInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PNGInfoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': json['image'],
    };
}

export function PNGInfoRequestToJSON(value?: PNGInfoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': value.image,
    };
}
