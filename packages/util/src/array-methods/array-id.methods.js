
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Util:Array Id Methods' } );

import { isArrayOrArrayBuffer } from './array-validation.methods';


/**
 *
 * @param start
 * @param end
 * @param max
 * @returns {[]}
 */
export const idRangeFromSliceParams = ( start, end, max ) => {
  if ( end > max || end < start ) end = max;
  let i = start;
  let ii = 0;
  const ids = [];
  for ( ; i !== end; i++ ) {
    ids[ ii++ ] = i;
  }
  return ids;
}


/**
 * Given an array of ids, if the first id === -1,
 * return ids[ 1 ] and ids[ 2 ] as the start and
 * end ( optional ) arguments for a slice.
 *
 * If the first id !== -1, return false.
 * @param ids
 * @returns {boolean|*}
 */
export const processIdsAsSlice = ( ids ) => {
  if ( !isArrayOrArrayBuffer( ids )) return false;

  if ( ids[ 0 ] !== -1 ) return false;

  return ids.slice(1);
}
