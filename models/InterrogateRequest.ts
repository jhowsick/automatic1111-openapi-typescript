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
 * @interface InterrogateRequest
 */
export interface InterrogateRequest {
    /**
     * Image to work on, must be a Base64 string containing the image's data.
     * @type {string}
     * @memberof InterrogateRequest
     */
    image?: string;
    /**
     * The interrogate model used.
     * @type {string}
     * @memberof InterrogateRequest
     */
    model?: string;
}

/**
 * Check if a given object implements the InterrogateRequest interface.
 */
export function instanceOfInterrogateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InterrogateRequestFromJSON(json: any): InterrogateRequest {
    return InterrogateRequestFromJSONTyped(json, false);
}

export function InterrogateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterrogateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': !exists(json, 'image') ? undefined : json['image'],
        'model': !exists(json, 'model') ? undefined : json['model'],
    };
}

export function InterrogateRequestToJSON(value?: InterrogateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': value.image,
        'model': value.model,
    };
}
