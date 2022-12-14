/* tslint:disable */
/* eslint-disable */
/**
 * Snowman API
 * _This document describes the REST API of the snowman data matching benchmark tool._ Comparing data matching algorithms is still an unsolved topic in both industry and research. With snowman, developers and researchers will be able to compare the performance of different data matching solutions or improve new algorithms. 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: snowman@groups.sap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DiagramCoordinates
 */
export interface DiagramCoordinates {
    /**
     * 
     * @type {number}
     * @memberof DiagramCoordinates
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof DiagramCoordinates
     */
    y: number;
    /**
     * 
     * @type {number}
     * @memberof DiagramCoordinates
     */
    funcId?: number;
    /**
     * 
     * @type {number}
     * @memberof DiagramCoordinates
     */
    experimentId?: number;
    /**
     * 
     * @type {number}
     * @memberof DiagramCoordinates
     */
    threshold?: number;
}

export function DiagramCoordinatesFromJSON(json: any): DiagramCoordinates {
    return DiagramCoordinatesFromJSONTyped(json, false);
}

export function DiagramCoordinatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagramCoordinates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
        'funcId': !exists(json, 'funcId') ? undefined : json['funcId'],
        'experimentId': !exists(json, 'experimentId') ? undefined : json['experimentId'],
        'threshold': !exists(json, 'threshold') ? undefined : json['threshold'],
    };
}

export function DiagramCoordinatesToJSON(value?: DiagramCoordinates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'x': value.x,
        'y': value.y,
        'funcId': value.funcId,
        'experimentId': value.experimentId,
        'threshold': value.threshold,
    };
}


