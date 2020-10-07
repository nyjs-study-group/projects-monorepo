
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Util:Array Access Methods' } );

import {isArrayOrArrayBuffer} from './array-validation.methods';


/**
 * Given an array and an array of ids,
 * return a new array
 * @param arr { *[] }
 * @param ids { uint[] }
 * @param target { Array | ArrayBuffer }
 * @param none { uint[] } the value of none
 * for a given array ( see array types in matrices )
 * @returns {*[]}
 */
export const indexInto = ( arr, ids, target = [], none = undefined ) => {
  if ( !isArrayOrArrayBuffer( target ) ) return target;

  let c = ids.length;
  if ( c === 0 ) return [];
  if ( c === 1 ) return [ arr[ ids[ 0 ]]];

  let i = 0;
  let ri = 0;
  let value;

  // if there is no specified none, then use a faster method
  if ( none === undefined ) {
    for ( ; i !== c; i++ ) {
      target[ ri++ ] = arr[ ids[i]];
    }
    return target;
  }

  for ( ; i !== c; i++ ) {
    value = arr[ ids[i]];
    target[ ri++ ] = value === undefined ? none : value;
  }
  return target;
}

