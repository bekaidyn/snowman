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
    SimilarityThresholdFunctionValuesAllOf,
    SimilarityThresholdFunctionValuesAllOfFromJSON,
    SimilarityThresholdFunctionValuesAllOfFromJSONTyped,
    SimilarityThresholdFunctionValuesAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface SimilarityThresholdFunctionValues
 */
export interface SimilarityThresholdFunctionValues {
    /**
     * 
     * @type {string}
     * @memberof SimilarityThresholdFunctionValues
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof SimilarityThresholdFunctionValues
     */
    experimentId: number;
    /**
     * 
     * @type {SimilarityThresholdFunctionDefinition}
     * @memberof SimilarityThresholdFunctionValues
     */
    definition: SimilarityThresholdFunctionDefinition;
}

export function SimilarityThresholdFunctionValuesFromJSON(json: any): SimilarityThresholdFunctionValues {
    return SimilarityThresholdFunctionValuesFromJSONTyped(json, false);
}

export function SimilarityThresholdFunctionValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimilarityThresholdFunctionValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'experimentId': json['experimentId'],
        'definition': SimilarityThresholdFunctionDefinitionFromJSON(json['definition']),
    };
}

export function SimilarityThresholdFunctionValuesToJSON(value?: SimilarityThresholdFunctionValues | null): any {
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


