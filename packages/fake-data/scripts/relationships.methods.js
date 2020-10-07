
import {
  extractRandomItemFromListAndSplice,
  randomIntegerList,
  randomIntegerWithinRange,
} from './util.methods';

export const generateOneToOneConnections =
  ( sourceCount, targetCount, options = { unique: false } ) => {



  const randomGenerator = !!options.unique
    ? extractRandomItemFromListAndSplice()
    : () => randomIntegerWithinRange( 0, targetCount );

  const connections = [];
  let i = 0;
  for ( ; i !== sourceCount; i++ ) {
    connections[ i++ ] = randomIntegerWithinRange( 0, targetCount );
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

const generateUniqueOneToOneConnections = ( sourceCount, targetCount ) => {

}
