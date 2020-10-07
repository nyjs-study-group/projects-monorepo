
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

export const objectify
  = ( value ) => typeof value === 'object' && value !== null ? value : !value ? {} : { value };

/**
 * untested
 * @param keys
 * @param object
 * @returns {{}|*}
 */
export const filterObjectByKeys = ( keys, object ) => {
  if ( keys === true ) return object;
  const result = {};
  const c = keys.length;
  let i = 0;
  let key;
  for ( ; i !== c; i++ ) {
    key = keys[ i ];
    result[ key ] = object[ key ]
  }
  return result;
}

export const trueKeys = ( object ) =>
  Object.keys( object ).filter( key => object[ key ] === true );
