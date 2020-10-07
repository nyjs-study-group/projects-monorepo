
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Util:Array Validation Methods' } );

/**
 * returns true if candidate is an array buffer
 * @param candidate
 * @returns {boolean}
 */
export const isArrayBuffer = ( candidate ) =>
  candidate instanceof (new Uint16Array()).constructor.prototype.__proto__.constructor

/**
 * returns true if candidate is array buffer or array.
 * @param candidate
 * @returns {arg is any[]|boolean}
 */
export const isArrayOrArrayBuffer = ( candidate ) =>
  Array.isArray( candidate ) ||
  candidate instanceof (new Uint16Array()).constructor.prototype.__proto__.constructor


