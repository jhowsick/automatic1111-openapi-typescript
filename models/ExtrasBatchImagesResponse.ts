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
 * @interface ExtrasBatchImagesResponse
 */
export interface ExtrasBatchImagesResponse {
    /**
     * A series of HTML tags containing the process info.
     * @type {string}
     * @memberof ExtrasBatchImagesResponse
     */
    htmlInfo: string;
    /**
     * The generated images in base64 format.
     * @type {Array<string>}
     * @memberof ExtrasBatchImagesResponse
     */
    images: Array<string>;
}

/**
 * Check if a given object implements the ExtrasBatchImagesResponse interface.
 */
export function instanceOfExtrasBatchImagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "htmlInfo" in value;
    isInstance = isInstance && "images" in value;

    return isInstance;
}

export function ExtrasBatchImagesResponseFromJSON(json: any): ExtrasBatchImagesResponse {
    return ExtrasBatchImagesResponseFromJSONTyped(json, false);
}

export function ExtrasBatchImagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtrasBatchImagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'htmlInfo': json['html_info'],
        'images': json['images'],
    };
}

export function ExtrasBatchImagesResponseToJSON(value?: ExtrasBatchImagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'html_info': value.htmlInfo,
        'images': value.images,
    };
}

