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
 * @interface QuicksettingsHint
 */
export interface QuicksettingsHint {
    /**
     * 
     * @type {string}
     * @memberof QuicksettingsHint
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof QuicksettingsHint
     */
    label: string;
}

/**
 * Check if a given object implements the QuicksettingsHint interface.
 */
export function instanceOfQuicksettingsHint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "label" in value;

    return isInstance;
}

export function QuicksettingsHintFromJSON(json: any): QuicksettingsHint {
    return QuicksettingsHintFromJSONTyped(json, false);
}

export function QuicksettingsHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuicksettingsHint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'label': json['label'],
    };
}

export function QuicksettingsHintToJSON(value?: QuicksettingsHint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'label': value.label,
    };
}
