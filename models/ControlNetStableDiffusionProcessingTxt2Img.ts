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
import type { ControlNetUnitRequest } from './ControlNetUnitRequest';
import {
    ControlNetUnitRequestFromJSON,
    ControlNetUnitRequestFromJSONTyped,
    ControlNetUnitRequestToJSON,
} from './ControlNetUnitRequest';

/**
 * 
 * @export
 * @interface ControlNetStableDiffusionProcessingTxt2Img
 */
export interface ControlNetStableDiffusionProcessingTxt2Img {
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    enableHr?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    denoisingStrength?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    firstphaseWidth?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    firstphaseHeight?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    hrScale?: number;
    /**
     * 
     * @type {string}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    hrUpscaler?: string;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    hrSecondPassSteps?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    hrResizeX?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    hrResizeY?: number;
    /**
     * 
     * @type {string}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    prompt?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    styles?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    seed?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    subseed?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    subseedStrength?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    seedResizeFromH?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    seedResizeFromW?: number;
    /**
     * 
     * @type {string}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    samplerName?: string;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    batchSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    nIter?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    steps?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    cfgScale?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    height?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    restoreFaces?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    tiling?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    doNotSaveSamples?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    doNotSaveGrid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    negativePrompt?: string;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    eta?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    sChurn?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    sTmax?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    sTmin?: number;
    /**
     * 
     * @type {number}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    sNoise?: number;
    /**
     * 
     * @type {object}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    overrideSettings?: object;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    overrideSettingsRestoreAfterwards?: boolean;
    /**
     * 
     * @type {Array<any>}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    scriptArgs?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    samplerIndex?: string;
    /**
     * 
     * @type {string}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    scriptName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    sendImages?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    saveImages?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    alwaysonScripts?: object;
    /**
     * ControlNet Processing Units
     * @type {Array<ControlNetUnitRequest>}
     * @memberof ControlNetStableDiffusionProcessingTxt2Img
     */
    controlnetUnits?: Array<ControlNetUnitRequest>;
}

/**
 * Check if a given object implements the ControlNetStableDiffusionProcessingTxt2Img interface.
 */
export function instanceOfControlNetStableDiffusionProcessingTxt2Img(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ControlNetStableDiffusionProcessingTxt2ImgFromJSON(json: any): ControlNetStableDiffusionProcessingTxt2Img {
    return ControlNetStableDiffusionProcessingTxt2ImgFromJSONTyped(json, false);
}

export function ControlNetStableDiffusionProcessingTxt2ImgFromJSONTyped(json: any, ignoreDiscriminator: boolean): ControlNetStableDiffusionProcessingTxt2Img {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enableHr': !exists(json, 'enable_hr') ? undefined : json['enable_hr'],
        'denoisingStrength': !exists(json, 'denoising_strength') ? undefined : json['denoising_strength'],
        'firstphaseWidth': !exists(json, 'firstphase_width') ? undefined : json['firstphase_width'],
        'firstphaseHeight': !exists(json, 'firstphase_height') ? undefined : json['firstphase_height'],
        'hrScale': !exists(json, 'hr_scale') ? undefined : json['hr_scale'],
        'hrUpscaler': !exists(json, 'hr_upscaler') ? undefined : json['hr_upscaler'],
        'hrSecondPassSteps': !exists(json, 'hr_second_pass_steps') ? undefined : json['hr_second_pass_steps'],
        'hrResizeX': !exists(json, 'hr_resize_x') ? undefined : json['hr_resize_x'],
        'hrResizeY': !exists(json, 'hr_resize_y') ? undefined : json['hr_resize_y'],
        'prompt': !exists(json, 'prompt') ? undefined : json['prompt'],
        'styles': !exists(json, 'styles') ? undefined : json['styles'],
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'subseed': !exists(json, 'subseed') ? undefined : json['subseed'],
        'subseedStrength': !exists(json, 'subseed_strength') ? undefined : json['subseed_strength'],
        'seedResizeFromH': !exists(json, 'seed_resize_from_h') ? undefined : json['seed_resize_from_h'],
        'seedResizeFromW': !exists(json, 'seed_resize_from_w') ? undefined : json['seed_resize_from_w'],
        'samplerName': !exists(json, 'sampler_name') ? undefined : json['sampler_name'],
        'batchSize': !exists(json, 'batch_size') ? undefined : json['batch_size'],
        'nIter': !exists(json, 'n_iter') ? undefined : json['n_iter'],
        'steps': !exists(json, 'steps') ? undefined : json['steps'],
        'cfgScale': !exists(json, 'cfg_scale') ? undefined : json['cfg_scale'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'restoreFaces': !exists(json, 'restore_faces') ? undefined : json['restore_faces'],
        'tiling': !exists(json, 'tiling') ? undefined : json['tiling'],
        'doNotSaveSamples': !exists(json, 'do_not_save_samples') ? undefined : json['do_not_save_samples'],
        'doNotSaveGrid': !exists(json, 'do_not_save_grid') ? undefined : json['do_not_save_grid'],
        'negativePrompt': !exists(json, 'negative_prompt') ? undefined : json['negative_prompt'],
        'eta': !exists(json, 'eta') ? undefined : json['eta'],
        'sChurn': !exists(json, 's_churn') ? undefined : json['s_churn'],
        'sTmax': !exists(json, 's_tmax') ? undefined : json['s_tmax'],
        'sTmin': !exists(json, 's_tmin') ? undefined : json['s_tmin'],
        'sNoise': !exists(json, 's_noise') ? undefined : json['s_noise'],
        'overrideSettings': !exists(json, 'override_settings') ? undefined : json['override_settings'],
        'overrideSettingsRestoreAfterwards': !exists(json, 'override_settings_restore_afterwards') ? undefined : json['override_settings_restore_afterwards'],
        'scriptArgs': !exists(json, 'script_args') ? undefined : json['script_args'],
        'samplerIndex': !exists(json, 'sampler_index') ? undefined : json['sampler_index'],
        'scriptName': !exists(json, 'script_name') ? undefined : json['script_name'],
        'sendImages': !exists(json, 'send_images') ? undefined : json['send_images'],
        'saveImages': !exists(json, 'save_images') ? undefined : json['save_images'],
        'alwaysonScripts': !exists(json, 'alwayson_scripts') ? undefined : json['alwayson_scripts'],
        'controlnetUnits': !exists(json, 'controlnet_units') ? undefined : ((json['controlnet_units'] as Array<any>).map(ControlNetUnitRequestFromJSON)),
    };
}

export function ControlNetStableDiffusionProcessingTxt2ImgToJSON(value?: ControlNetStableDiffusionProcessingTxt2Img | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enable_hr': value.enableHr,
        'denoising_strength': value.denoisingStrength,
        'firstphase_width': value.firstphaseWidth,
        'firstphase_height': value.firstphaseHeight,
        'hr_scale': value.hrScale,
        'hr_upscaler': value.hrUpscaler,
        'hr_second_pass_steps': value.hrSecondPassSteps,
        'hr_resize_x': value.hrResizeX,
        'hr_resize_y': value.hrResizeY,
        'prompt': value.prompt,
        'styles': value.styles,
        'seed': value.seed,
        'subseed': value.subseed,
        'subseed_strength': value.subseedStrength,
        'seed_resize_from_h': value.seedResizeFromH,
        'seed_resize_from_w': value.seedResizeFromW,
        'sampler_name': value.samplerName,
        'batch_size': value.batchSize,
        'n_iter': value.nIter,
        'steps': value.steps,
        'cfg_scale': value.cfgScale,
        'width': value.width,
        'height': value.height,
        'restore_faces': value.restoreFaces,
        'tiling': value.tiling,
        'do_not_save_samples': value.doNotSaveSamples,
        'do_not_save_grid': value.doNotSaveGrid,
        'negative_prompt': value.negativePrompt,
        'eta': value.eta,
        's_churn': value.sChurn,
        's_tmax': value.sTmax,
        's_tmin': value.sTmin,
        's_noise': value.sNoise,
        'override_settings': value.overrideSettings,
        'override_settings_restore_afterwards': value.overrideSettingsRestoreAfterwards,
        'script_args': value.scriptArgs,
        'sampler_index': value.samplerIndex,
        'script_name': value.scriptName,
        'send_images': value.sendImages,
        'save_images': value.saveImages,
        'alwayson_scripts': value.alwaysonScripts,
        'controlnet_units': value.controlnetUnits === undefined ? undefined : ((value.controlnetUnits as Array<any>).map(ControlNetUnitRequestToJSON)),
    };
}

