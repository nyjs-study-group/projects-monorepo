
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

export const lowerCaseIfString = ( value ) =>
  typeof value === 'string' ? value.toLowerCase() : value;

export const isUid = ( candidate ) =>
  typeof candidate === 'string' && candidate.length === 36;

export const isNumber = ( candidate ) =>
  typeof candidate === 'number';

export const isInt = ( candidate ) =>
  Number.isInteger( candidate );

export const isUint = ( candidate ) =>
  Number.isInteger( candidate ) && candidate > -1;

export const isBool = ( candidate ) =>
  typeof candidate === 'boolean';

export const isObject = ( candidate ) =>
  typeof candidate === 'object';

export const checkType = ( candidate, type ) =>
  candidate instanceof type;

export const isString = ( candidate ) =>
  typeof candidate === 'string';

export const isStringOrSymbol = ( candidate ) =>
  typeof candidate === 'string' || typeof  candidate === 'symbol';

export const isFunction = candidate =>
  typeof candidate === 'function';


