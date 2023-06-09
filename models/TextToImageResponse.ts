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
 * @interface TextToImageResponse
 */
export interface TextToImageResponse {
    /**
     * The generated image in base64 format.
     * @type {Array<string>}
     * @memberof TextToImageResponse
     */
    images?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof TextToImageResponse
     */
    parameters: object;
    /**
     * 
     * @type {string}
     * @memberof TextToImageResponse
     */
    info: string;
}

/**
 * Check if a given object implements the TextToImageResponse interface.
 */
export function instanceOfTextToImageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "parameters" in value;
    isInstance = isInstance && "info" in value;

    return isInstance;
}

export function TextToImageResponseFromJSON(json: any): TextToImageResponse {
    return TextToImageResponseFromJSONTyped(json, false);
}

export function TextToImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextToImageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'images': !exists(json, 'images') ? undefined : json['images'],
        'parameters': json['parameters'],
        'info': json['info'],
    };
}

export function TextToImageResponseToJSON(value?: TextToImageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'images': value.images,
        'parameters': value.parameters,
        'info': value.info,
    };
}

