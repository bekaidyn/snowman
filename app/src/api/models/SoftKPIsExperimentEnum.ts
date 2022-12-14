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

/**
 * 
 * @export
 * @enum {string}
 */
export enum SoftKPIsExperimentEnum {
    Expertise = 'expertise',
    HrAmount = 'hrAmount',
    ManhattanDistanceBasedEffort = 'manhattanDistanceBasedEffort',
    HrAmountWeightedEffort = 'hrAmountWeightedEffort',
    MultiplyEffort = 'multiplyEffort',
    ExpertiseWeightedEffort = 'expertiseWeightedEffort',
    Runtime = 'runtime'
}

export function SoftKPIsExperimentEnumFromJSON(json: any): SoftKPIsExperimentEnum {
    return SoftKPIsExperimentEnumFromJSONTyped(json, false);
}

export function SoftKPIsExperimentEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SoftKPIsExperimentEnum {
    return json as SoftKPIsExperimentEnum;
}

export function SoftKPIsExperimentEnumToJSON(value?: SoftKPIsExperimentEnum | null): any {
    return value as any;
}

