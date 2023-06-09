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
 * @interface HypernetworkItem
 */
export interface HypernetworkItem {
    /**
     * 
     * @type {string}
     * @memberof HypernetworkItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof HypernetworkItem
     */
    path?: string;
}

/**
 * Check if a given object implements the HypernetworkItem interface.
 */
export function instanceOfHypernetworkItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function HypernetworkItemFromJSON(json: any): HypernetworkItem {
    return HypernetworkItemFromJSONTyped(json, false);
}

export function HypernetworkItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): HypernetworkItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function HypernetworkItemToJSON(value?: HypernetworkItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'path': value.path,
    };
}

