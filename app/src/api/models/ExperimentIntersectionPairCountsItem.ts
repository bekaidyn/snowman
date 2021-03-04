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
import {
    ExperimentIntersectionPairCountsExperiments,
    ExperimentIntersectionPairCountsExperimentsFromJSON,
    ExperimentIntersectionPairCountsExperimentsFromJSONTyped,
    ExperimentIntersectionPairCountsExperimentsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ExperimentIntersectionPairCountsItem
 */
export interface ExperimentIntersectionPairCountsItem {
    /**
     * 
     * @type {Array<ExperimentIntersectionPairCountsExperiments>}
     * @memberof ExperimentIntersectionPairCountsItem
     */
    experiments: Array<ExperimentIntersectionPairCountsExperiments>;
    /**
     * 
     * @type {number}
     * @memberof ExperimentIntersectionPairCountsItem
     */
    pairCount: number;
}

export function ExperimentIntersectionPairCountsItemFromJSON(json: any): ExperimentIntersectionPairCountsItem {
    return ExperimentIntersectionPairCountsItemFromJSONTyped(json, false);
}

export function ExperimentIntersectionPairCountsItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExperimentIntersectionPairCountsItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'experiments': ((json['experiments'] as Array<any>).map(ExperimentIntersectionPairCountsExperimentsFromJSON)),
        'pairCount': json['pairCount'],
    };
}

export function ExperimentIntersectionPairCountsItemToJSON(value?: ExperimentIntersectionPairCountsItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'experiments': ((value.experiments as Array<any>).map(ExperimentIntersectionPairCountsExperimentsToJSON)),
        'pairCount': value.pairCount,
    };
}


