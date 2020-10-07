
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Util:Arrayify Methods' } );

import {
  isArrayOrArrayBuffer } from './array-validation.methods';

/**
 * if an value is not an array or an array buffer
 * an array is returned with the value as the first element.
 * @param data
 * @returns {*|*[]}
 */
export const arrayify = data =>
  isArrayOrArrayBuffer( data ) ? data : [ data ];

/**
 * if item is a set, return an array.
 * @param data
 * @returns {*[]|*}
 */
export const arrayifyIfSet = data =>
  data instanceof Set ? [ ...data ] : arrayify( data );


/**
 * same as above but handles null and undefined such that
 * these become an empty array.
 * @param data
 * @returns {*[]|*}
 */
export const arrayifyIfSetNoNull = data =>
  data instanceof Set ? [ ...data ] : arrayifyNoNull( data );


/**
 * If value is null or undefined, return an empty array
 * else arrayify the value
 * @param data
 * @returns {*[]|*}
 */
export const arrayifyNoNull = data =>
  data === undefined || data === null
    ? []
    : arrayify( data );

/**
 *
 * @param data
 * @returns {*[]|[*]}
 */
export const arrayifyNoNullExceptBuffer = data =>
  data === undefined || data === null
    ? []
    : arrayify( data );

/**
 * if an array or array buffer only contains a single element,
 * return the single element
 * @param data
 * @returns {*}
 */
export const unArrayifyIfOneItem = data =>
  !isArrayOrArrayBuffer( data ) || data.length > 1
    ? data
    : data[ 0 ];
