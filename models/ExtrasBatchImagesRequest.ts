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
import type { FileData } from './FileData';
import {
    FileDataFromJSON,
    FileDataFromJSONTyped,
    FileDataToJSON,
} from './FileData';

/**
 * 
 * @export
 * @interface ExtrasBatchImagesRequest
 */
export interface ExtrasBatchImagesRequest {
    /**
     * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    resizeMode?: ExtrasBatchImagesRequestResizeModeEnum;
    /**
     * Should the backend return the generated image?
     * @type {boolean}
     * @memberof ExtrasBatchImagesRequest
     */
    showExtrasResults?: boolean;
    /**
     * Sets the visibility of GFPGAN, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    gfpganVisibility?: number;
    /**
     * Sets the visibility of CodeFormer, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    codeformerVisibility?: number;
    /**
     * Sets the weight of CodeFormer, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    codeformerWeight?: number;
    /**
     * By how much to upscale the image, only used when resize_mode=0.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    upscalingResize?: number;
    /**
     * Target width for the upscaler to hit. Only used when resize_mode=1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    upscalingResizeW?: number;
    /**
     * Target height for the upscaler to hit. Only used when resize_mode=1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    upscalingResizeH?: number;
    /**
     * Should the upscaler crop the image to fit in the chosen size?
     * @type {boolean}
     * @memberof ExtrasBatchImagesRequest
     */
    upscalingCrop?: boolean;
    /**
     * The name of the main upscaler to use, it has to be one of this list: 
     * @type {string}
     * @memberof ExtrasBatchImagesRequest
     */
    upscaler1?: string;
    /**
     * The name of the secondary upscaler to use, it has to be one of this list: 
     * @type {string}
     * @memberof ExtrasBatchImagesRequest
     */
    upscaler2?: string;
    /**
     * Sets the visibility of secondary upscaler, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    extrasUpscaler2Visibility?: number;
    /**
     * Should the upscaler run before restoring faces?
     * @type {boolean}
     * @memberof ExtrasBatchImagesRequest
     */
    upscaleFirst?: boolean;
    /**
     * List of images to work on. Must be Base64 strings
     * @type {Array<FileData>}
     * @memberof ExtrasBatchImagesRequest
     */
    imageList: Array<FileData>;
}


/**
 * @export
 */
export const ExtrasBatchImagesRequestResizeModeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;
export type ExtrasBatchImagesRequestResizeModeEnum = typeof ExtrasBatchImagesRequestResizeModeEnum[keyof typeof ExtrasBatchImagesRequestResizeModeEnum];


/**
 * Check if a given object implements the ExtrasBatchImagesRequest interface.
 */
export function instanceOfExtrasBatchImagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "imageList" in value;

    return isInstance;
}

export function ExtrasBatchImagesRequestFromJSON(json: any): ExtrasBatchImagesRequest {
    return ExtrasBatchImagesRequestFromJSONTyped(json, false);
}

export function ExtrasBatchImagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtrasBatchImagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resizeMode': !exists(json, 'resize_mode') ? undefined : json['resize_mode'],
        'showExtrasResults': !exists(json, 'show_extras_results') ? undefined : json['show_extras_results'],
        'gfpganVisibility': !exists(json, 'gfpgan_visibility') ? undefined : json['gfpgan_visibility'],
        'codeformerVisibility': !exists(json, 'codeformer_visibility') ? undefined : json['codeformer_visibility'],
        'codeformerWeight': !exists(json, 'codeformer_weight') ? undefined : json['codeformer_weight'],
        'upscalingResize': !exists(json, 'upscaling_resize') ? undefined : json['upscaling_resize'],
        'upscalingResizeW': !exists(json, 'upscaling_resize_w') ? undefined : json['upscaling_resize_w'],
        'upscalingResizeH': !exists(json, 'upscaling_resize_h') ? undefined : json['upscaling_resize_h'],
        'upscalingCrop': !exists(json, 'upscaling_crop') ? undefined : json['upscaling_crop'],
        'upscaler1': !exists(json, 'upscaler_1') ? undefined : json['upscaler_1'],
        'upscaler2': !exists(json, 'upscaler_2') ? undefined : json['upscaler_2'],
        'extrasUpscaler2Visibility': !exists(json, 'extras_upscaler_2_visibility') ? undefined : json['extras_upscaler_2_visibility'],
        'upscaleFirst': !exists(json, 'upscale_first') ? undefined : json['upscale_first'],
        'imageList': ((json['imageList'] as Array<any>).map(FileDataFromJSON)),
    };
}

export function ExtrasBatchImagesRequestToJSON(value?: ExtrasBatchImagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resize_mode': value.resizeMode,
        'show_extras_results': value.showExtrasResults,
        'gfpgan_visibility': value.gfpganVisibility,
        'codeformer_visibility': value.codeformerVisibility,
        'codeformer_weight': value.codeformerWeight,
        'upscaling_resize': value.upscalingResize,
        'upscaling_resize_w': value.upscalingResizeW,
        'upscaling_resize_h': value.upscalingResizeH,
        'upscaling_crop': value.upscalingCrop,
        'upscaler_1': value.upscaler1,
        'upscaler_2': value.upscaler2,
        'extras_upscaler_2_visibility': value.extrasUpscaler2Visibility,
        'upscale_first': value.upscaleFirst,
        'imageList': ((value.imageList as Array<any>).map(FileDataToJSON)),
    };
}

