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
 * @interface PromptStyleItem
 */
export interface PromptStyleItem {
    /**
     * 
     * @type {string}
     * @memberof PromptStyleItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PromptStyleItem
     */
    prompt?: string;
    /**
     * 
     * @type {string}
     * @memberof PromptStyleItem
     */
    negativePrompt?: string;
}

/**
 * Check if a given object implements the PromptStyleItem interface.
 */
export function instanceOfPromptStyleItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function PromptStyleItemFromJSON(json: any): PromptStyleItem {
    return PromptStyleItemFromJSONTyped(json, false);
}

export function PromptStyleItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromptStyleItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'prompt': !exists(json, 'prompt') ? undefined : json['prompt'],
        'negativePrompt': !exists(json, 'negative_prompt') ? undefined : json['negative_prompt'],
    };
}

export function PromptStyleItemToJSON(value?: PromptStyleItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'prompt': value.prompt,
        'negative_prompt': value.negativePrompt,
    };
}

