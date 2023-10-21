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
import type { Request } from './Request';
import {
    RequestFromJSON,
    RequestFromJSONTyped,
    RequestToJSON,
} from './Request';

/**
 * 
 * @export
 * @interface PredictBody
 */
export interface PredictBody {
    /**
     * 
     * @type {string}
     * @memberof PredictBody
     */
    sessionHash?: string;
    /**
     * 
     * @type {string}
     * @memberof PredictBody
     */
    eventId?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof PredictBody
     */
    data: Array<any>;
    /**
     * 
     * @type {any}
     * @memberof PredictBody
     */
    eventData?: any | null;
    /**
     * 
     * @type {number}
     * @memberof PredictBody
     */
    fnIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PredictBody
     */
    batched?: boolean;
    /**
     * 
     * @type {Request}
     * @memberof PredictBody
     */
    request?: Request;
}

/**
 * Check if a given object implements the PredictBody interface.
 */
export function instanceOfPredictBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PredictBodyFromJSON(json: any): PredictBody {
    return PredictBodyFromJSONTyped(json, false);
}

export function PredictBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionHash': !exists(json, 'session_hash') ? undefined : json['session_hash'],
        'eventId': !exists(json, 'event_id') ? undefined : json['event_id'],
        'data': json['data'],
        'eventData': !exists(json, 'event_data') ? undefined : json['event_data'],
        'fnIndex': !exists(json, 'fn_index') ? undefined : json['fn_index'],
        'batched': !exists(json, 'batched') ? undefined : json['batched'],
        'request': !exists(json, 'request') ? undefined : RequestFromJSON(json['request']),
    };
}

export function PredictBodyToJSON(value?: PredictBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'session_hash': value.sessionHash,
        'event_id': value.eventId,
        'data': value.data,
        'event_data': value.eventData,
        'fn_index': value.fnIndex,
        'batched': value.batched,
        'request': RequestToJSON(value.request),
    };
}

