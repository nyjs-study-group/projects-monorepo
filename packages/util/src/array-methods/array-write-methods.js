
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Util:Array Write Methods' } );

import {assert, assertIsUint} from '../assertions';

import { isArrayOrArrayBuffer } from './array-validation.methods';
import {arrayify} from './arrayify.methods';

/**
 * Returns a new array of length = count.
 * If the new count > the original array, the new array
 * is a clone of the original array concatenated with
 * a new array of length = count - originalArray.length
 * where all elements are set to the value passed in as
 * the value argument.
 * @param target
 * @param count
 * @param value
 * @param TargetType
 * @returns {*|*[][]}
 */
export const extendArrayWithValue = ( target, count, value, TargetType = Array ) => {
  const c = target.length;
  return c === count
    ? target
    : c > count
      ? target.slice( 0, c )
      : writeValueOverSlice( c, count, value, new TargetType( ...target ));
}

/**
 * given an array, write the same value across a slice of its elements.
 * @param start
 * @param end
 * @param value
 * @param target
 * @returns {*[]}
 */
export const writeValueOverSlice = ( start, end, value, target = [] ) => {
   assertIsUint( start );
   assertIsUint( end );
   assert( end > start, 'Invalid Slice!');
   let i = start;
   for ( ; i !== end; i++ ) {
     target[ i ] = value;
   }
   return target;
}

