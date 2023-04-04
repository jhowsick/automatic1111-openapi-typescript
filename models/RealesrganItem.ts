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
 * @interface RealesrganItem
 */
export interface RealesrganItem {
    /**
     * 
     * @type {string}
     * @memberof RealesrganItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RealesrganItem
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof RealesrganItem
     */
    scale?: number;
}

/**
 * Check if a given object implements the RealesrganItem interface.
 */
export function instanceOfRealesrganItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function RealesrganItemFromJSON(json: any): RealesrganItem {
    return RealesrganItemFromJSONTyped(json, false);
}

export function RealesrganItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): RealesrganItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'scale': !exists(json, 'scale') ? undefined : json['scale'],
    };
}

export function RealesrganItemToJSON(value?: RealesrganItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'path': value.path,
        'scale': value.scale,
    };
}
