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

import {
    SimilarityThresholdFunctionDefinition,
} from './';

/**
 * 
 * @export
 * @interface SimilarityThresholdFunctionUnaryOperator
 */
export interface SimilarityThresholdFunctionUnaryOperator {
    /**
     * 
     * @type {SimilarityThresholdFunctionDefinition}
     * @memberof SimilarityThresholdFunctionUnaryOperator
     */
    func: SimilarityThresholdFunctionDefinition;
    /**
     * 
     * @type {string}
     * @memberof SimilarityThresholdFunctionUnaryOperator
     */
    operator: SimilarityThresholdFunctionUnaryOperatorOperatorEnum;
}

/**
* @export
* @enum {string}
*/
export enum SimilarityThresholdFunctionUnaryOperatorOperatorEnum {
    Acos = 'ACOS',
    Acosh = 'ACOSH',
    Asin = 'ASIN',
    Asinh = 'ASINH',
    Atan = 'ATAN',
    Atanh = 'ATANH',
    Ceil = 'CEIL',
    Ceiling = 'CEILING',
    Cos = 'COS',
    Cosh = 'COSH',
    Degrees = 'DEGREES',
    Exp = 'EXP',
    Floor = 'FLOOR',
    Ln = 'LN',
    Log = 'LOG',
    Log10 = 'LOG10',
    Log2 = 'LOG2',
    Radians = 'RADIANS',
    Sin = 'SIN',
    Sinh = 'SINH',
    Sqrt = 'SQRT',
    Tan = 'TAN',
    Tanh = 'TANH',
    Trunc = 'TRUNC'
}