
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Util:Array Generation Methods' } );

import {
  assert,
  assertIsUint,
} from '../assertions';

/**
 * return an array multiple elements of the same value.
 * @param count
 * @param value
 * @param target
 * @returns {*[]}
 */
export const filledArray = ( count, value, target = [] ) => {
  let i = 0;
  for ( ; i !== count; i++ ) {
    target[ i ] = value;
  }
  return target;
}


/**
 * Generate a range from start to end by increments
 * @param start
 * @param end
 * @param increment
 * @returns {[]}
 */
export const range = ( start, end, increment = 1 ) => {
  assertIsUint( start, `Range start is not a uint.`);
  assertIsUint( end, `Range end is not a uint.`);
  assert( end > start, `Range end must be greater than the start`);
  let ri = 0;
  let i = start;
  const range = [];
  for ( ; i < end; i+=increment ) {
    range[ ri++ ] = i;
  }
  return range;
}
