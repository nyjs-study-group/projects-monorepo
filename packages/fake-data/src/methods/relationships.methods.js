
import { range } from '@nyjs-projects-monorepo/util';

import {
  extractRandomItemFromListAndSplice,
  randomIntegerList,
  randomIntegerWithinRange,
} from './util.methods';

/**
 * Generates random one to one connections between two arrays.
 * @param sourceCount The length of a source array
 * @param targetCount the length of a target array.
 * @param options
 * @returns {[int]} an array of integers with length = sourceCount
 * The integers in this array are indexes
 */
export const generateOneToOneConnections =
  ( sourceCount, targetCount, options = { unique: false } ) => {

  const targetList = range( 0, targetCount );

  const randomGenerator = !!options.unique
    ? extractRandomItemFromListAndSplice( targetList )
    : () => randomIntegerWithinRange( 0, targetCount );

  const connections = [];
  let i = 0;
  for ( ; i !== sourceCount; i++ ) {
    connections[ i++ ] = randomGenerator();
  }
  return connections;
}

export const generateOneToManyConnections =
  ( sourceCount, targetCount, options = { unique: false } ) => {

  const randomIntegerArgs = {
    minLength: 0,
    maxLength: Math.floor( targetCount ) * .1,
    minValue: 0,
    maxValue: targetCount,
    ...options,
  }

  const connections = [];
  let i = 0;
  for ( ; i !== sourceCount; i++ ) {
    connections[ i++ ] = randomIntegerList( randomIntegerArgs )
  }
  return connections;
}
