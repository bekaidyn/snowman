/* tslint:disable */
/* eslint-disable */
/**
 * Snowman API
 * _This document describes the REST API of the snowman data matching benchmark tool._  Comparing data matching algorithms is still an unsolved topic in both industry and research.  With snowman, developers and researchers will be able to compare the performance of different data matching  solutions or improve new algorithms. 
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface ExperimentIntersection
 */
export interface ExperimentIntersection {
    /**
     * 
     * @type {Array<string>}
     * @memberof ExperimentIntersection
     */
    header: Array<string>;
    /**
     * 
     * @type {Array<Array<Array<string>>>}
     * @memberof ExperimentIntersection
     */
    data: Array<Array<Array<string>>>;
}

export function ExperimentIntersectionFromJSON(json: any): ExperimentIntersection {
    return ExperimentIntersectionFromJSONTyped(json, false);
}

export function ExperimentIntersectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExperimentIntersection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'header': json['header'],
        'data': json['data'],
    };
}

export function ExperimentIntersectionToJSON(value?: ExperimentIntersection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'header': value.header,
        'data': value.data,
    };
}


