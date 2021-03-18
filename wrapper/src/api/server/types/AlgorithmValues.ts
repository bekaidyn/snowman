/* tslint:disable */
/* eslint-disable */
/**
 * Snowman API
 * _This document describes the REST API of the snowman data matching benchmark tool._ Comparing data matching algorithms is still an unsolved topic in both industry and research.  With snowman, developers and researchers will be able to compare the performance of different data matching  solutions or improve new algorithms. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: snowman@groups.sap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlgorithmValuesSoftKPIs } from './';

/**
 * 
 * @export
 * @interface AlgorithmValues
 */
export interface AlgorithmValues {
    /**
     * 
     * @type {string}
     * @memberof AlgorithmValues
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AlgorithmValues
     */
    description?: string;
    /**
     * 
     * @type {AlgorithmValuesSoftKPIs}
     * @memberof AlgorithmValues
     */
    softKPIs?: AlgorithmValuesSoftKPIs;
}