
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Utilr: Assert Native Types' } );

import { assert } from './assert.methods';

export const assertIsArray =
  ( candidate, message = `Type is not an array`) =>
    assert( Array.isArray( candidate ) , message );

export const assertIsBoolean =
  ( candidate, message = `Type is not a boolean`) =>
    assert( typeof candidate === 'boolean', message );

export const assertIsFunction =
  ( candidate, message = `Type is not an function`) =>
    assert( typeof candidate === 'function' , message );

export const assertIsNumber =
  ( candidate, message = `Type is not a number`) =>
    assert( typeof candidate === 'number' , message );

export const assertIsInt =
  ( candidate, message = `Type is not an integer`) =>
    assert( Number.isInteger( candidate ), message );

export const assertIsUint =
  ( candidate, message = `Type is not an integer`) =>
    assert(Number.isInteger(candidate) && candidate > -1, message);

export const assertIsObject =
  ( candidate, message = `Type is not an object`) =>
    assert( typeof candidate === 'object' , message );

export const assertIsString =
  ( candidate, message = `Type is not a string`) =>
    assert(typeof candidate === 'string', message);

export const assertIsSymbol =
  ( candidate, message = `Type is not an symbol`) =>
    assert( typeof candidate === 'symbol' , message );

export const assertIsStringOrSymbol =
  ( candidate, message = `Type is not an string or a symbol`) =>
    assert( typeof candidate === 'string' || typeof candidate === 'symbol', message );



