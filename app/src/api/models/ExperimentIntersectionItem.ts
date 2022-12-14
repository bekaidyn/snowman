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
import {
    ExperimentConfigItem,
    ExperimentConfigItemFromJSON,
    ExperimentConfigItemFromJSONTyped,
    ExperimentConfigItemToJSON,
    ExperimentConfigItemSimilarity,
    ExperimentConfigItemSimilarityFromJSON,
    ExperimentConfigItemSimilarityFromJSONTyped,
    ExperimentConfigItemSimilarityToJSON,
    ExperimentIntersectionItemAllOf,
    ExperimentIntersectionItemAllOfFromJSON,
    ExperimentIntersectionItemAllOfFromJSONTyped,
    ExperimentIntersectionItemAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ExperimentIntersectionItem
 */
export interface ExperimentIntersectionItem {
    /**
     * 
     * @type {number}
     * @memberof ExperimentIntersectionItem
     */
    experimentId: number;
    /**
     * 
     * @type {ExperimentConfigItemSimilarity}
     * @memberof ExperimentIntersectionItem
     */
    similarity?: ExperimentConfigItemSimilarity;
    /**
     * 
     * @type {boolean}
     * @memberof ExperimentIntersectionItem
     */
    predictedCondition: boolean;
}

export function ExperimentIntersectionItemFromJSON(json: any): ExperimentIntersectionItem {
    return ExperimentIntersectionItemFromJSONTyped(json, false);
}

export function ExperimentIntersectionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExperimentIntersectionItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'experimentId': json['experimentId'],
        'similarity': !exists(json, 'similarity') ? undefined : ExperimentConfigItemSimilarityFromJSON(json['similarity']),
        'predictedCondition': json['predictedCondition'],
    };
}

export function ExperimentIntersectionItemToJSON(value?: ExperimentIntersectionItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'experimentId': value.experimentId,
        'similarity': ExperimentConfigItemSimilarityToJSON(value.similarity),
        'predictedCondition': value.predictedCondition,
    };
}


