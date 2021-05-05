/* tslint:disable */
/* eslint-disable */
/**
 * Snowman API
 * _This document describes the REST API of the snowman data matching benchmark tool._ Comparing data matching algorithms is still an unsolved topic in both industry and research. With snowman, developers and researchers will be able to compare the performance of different data matching solutions or improve new algorithms. 
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
    SimilarityThresholdFunctionDefinition,
    SimilarityThresholdFunctionDefinitionFromJSON,
    SimilarityThresholdFunctionDefinitionFromJSONTyped,
    SimilarityThresholdFunctionDefinitionToJSON,
} from './';

/**
 * 
 * @export
 * @interface SimilarityThresholdFunctionValuesAllOf
 */
export interface SimilarityThresholdFunctionValuesAllOf {
    /**
     * 
     * @type {string}
     * @memberof SimilarityThresholdFunctionValuesAllOf
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof SimilarityThresholdFunctionValuesAllOf
     */
    experimentId: number;
    /**
     * 
     * @type {SimilarityThresholdFunctionDefinition}
     * @memberof SimilarityThresholdFunctionValuesAllOf
     */
    definition: SimilarityThresholdFunctionDefinition;
}

export function SimilarityThresholdFunctionValuesAllOfFromJSON(json: any): SimilarityThresholdFunctionValuesAllOf {
    return SimilarityThresholdFunctionValuesAllOfFromJSONTyped(json, false);
}

export function SimilarityThresholdFunctionValuesAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimilarityThresholdFunctionValuesAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'experimentId': json['experimentId'],
        'definition': SimilarityThresholdFunctionDefinitionFromJSON(json['definition']),
    };
}

export function SimilarityThresholdFunctionValuesAllOfToJSON(value?: SimilarityThresholdFunctionValuesAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'experimentId': value.experimentId,
        'definition': SimilarityThresholdFunctionDefinitionToJSON(value.definition),
    };
}


