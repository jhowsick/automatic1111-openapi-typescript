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
import type { ControlnetResizeMode } from './ControlnetResizeMode';
import {
    ControlnetResizeModeFromJSON,
    ControlnetResizeModeFromJSONTyped,
    ControlnetResizeModeToJSON,
} from './ControlnetResizeMode';

/**
 * 
 * @export
 * @interface ControlNetUnitRequest
 */
export interface ControlNetUnitRequest {
    /**
     * 
     * @type {string}
     * @memberof ControlNetUnitRequest
     */
    inputImage?: string;
    /**
     * 
     * @type {string}
     * @memberof ControlNetUnitRequest
     */
    mask?: string;
    /**
     * 
     * @type {string}
     * @memberof ControlNetUnitRequest
     */
    module?: string;
    /**
     * 
     * @type {string}
     * @memberof ControlNetUnitRequest
     */
    model?: string;
    /**
     * 
     * @type {number}
     * @memberof ControlNetUnitRequest
     */
    weight?: number;
    /**
     * 
     * @type {ControlnetResizeMode}
     * @memberof ControlNetUnitRequest
     */
    resizeMode?: ControlnetResizeMode;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetUnitRequest
     */
    lowvram?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ControlNetUnitRequest
     */
    processorRes?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetUnitRequest
     */
    thresholdA?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetUnitRequest
     */
    thresholdB?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetUnitRequest
     */
    guidance?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetUnitRequest
     */
    guidanceStart?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetUnitRequest
     */
    guidanceEnd?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetUnitRequest
     */
    guessmode?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetUnitRequest
     */
    pixelPerfect?: boolean;
}

/**
 * Check if a given object implements the ControlNetUnitRequest interface.
 */
export function instanceOfControlNetUnitRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ControlNetUnitRequestFromJSON(json: any): ControlNetUnitRequest {
    return ControlNetUnitRequestFromJSONTyped(json, false);
}

export function ControlNetUnitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ControlNetUnitRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inputImage': !exists(json, 'input_image') ? undefined : json['input_image'],
        'mask': !exists(json, 'mask') ? undefined : json['mask'],
        'module': !exists(json, 'module') ? undefined : json['module'],
        'model': !exists(json, 'model') ? undefined : json['model'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
        'resizeMode': !exists(json, 'resize_mode') ? undefined : ControlnetResizeModeFromJSON(json['resize_mode']),
        'lowvram': !exists(json, 'lowvram') ? undefined : json['lowvram'],
        'processorRes': !exists(json, 'processor_res') ? undefined : json['processor_res'],
        'thresholdA': !exists(json, 'threshold_a') ? undefined : json['threshold_a'],
        'thresholdB': !exists(json, 'threshold_b') ? undefined : json['threshold_b'],
        'guidance': !exists(json, 'guidance') ? undefined : json['guidance'],
        'guidanceStart': !exists(json, 'guidance_start') ? undefined : json['guidance_start'],
        'guidanceEnd': !exists(json, 'guidance_end') ? undefined : json['guidance_end'],
        'guessmode': !exists(json, 'guessmode') ? undefined : json['guessmode'],
        'pixelPerfect': !exists(json, 'pixel_perfect') ? undefined : json['pixel_perfect'],
    };
}

export function ControlNetUnitRequestToJSON(value?: ControlNetUnitRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'input_image': value.inputImage,
        'mask': value.mask,
        'module': value.module,
        'model': value.model,
        'weight': value.weight,
        'resize_mode': ControlnetResizeModeToJSON(value.resizeMode),
        'lowvram': value.lowvram,
        'processor_res': value.processorRes,
        'threshold_a': value.thresholdA,
        'threshold_b': value.thresholdB,
        'guidance': value.guidance,
        'guidance_start': value.guidanceStart,
        'guidance_end': value.guidanceEnd,
        'guessmode': value.guessmode,
        'pixel_perfect': value.pixelPerfect,
    };
}

