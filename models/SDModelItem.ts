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
 * @interface SDModelItem
 */
export interface SDModelItem {
    /**
     * 
     * @type {string}
     * @memberof SDModelItem
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof SDModelItem
     */
    modelName: string;
    /**
     * 
     * @type {string}
     * @memberof SDModelItem
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof SDModelItem
     */
    sha256?: string;
    /**
     * 
     * @type {string}
     * @memberof SDModelItem
     */
    filename: string;
    /**
     * 
     * @type {string}
     * @memberof SDModelItem
     */
    config?: string;
}

/**
 * Check if a given object implements the SDModelItem interface.
 */
export function instanceOfSDModelItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "modelName" in value;
    isInstance = isInstance && "filename" in value;

    return isInstance;
}

export function SDModelItemFromJSON(json: any): SDModelItem {
    return SDModelItemFromJSONTyped(json, false);
}

export function SDModelItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SDModelItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'modelName': json['model_name'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'sha256': !exists(json, 'sha256') ? undefined : json['sha256'],
        'filename': json['filename'],
        'config': !exists(json, 'config') ? undefined : json['config'],
    };
}

export function SDModelItemToJSON(value?: SDModelItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'model_name': value.modelName,
        'hash': value.hash,
        'sha256': value.sha256,
        'filename': value.filename,
        'config': value.config,
    };
}

