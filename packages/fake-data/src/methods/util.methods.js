
export const randomIntegerWithinRange = ( min, max ) =>
  Math.floor( ( Math.random() * ( max - min ) + min ) );


export const randomIntegerList =
  ({ minLength, maxLength, minValue, maxValue, uniqueValues = false }) => {

  const numbers = [];
  let i = 0;
  const c = randomIntegerWithinRange(minLength, maxLength);
  for ( ; i !== c; i++) {
    numbers[i] = randomIntegerWithinRange( minValue, maxValue );
  }
  return uniqueValues === true ? [ ...( new Set( numbers )) ] : numbers;
}

export const extractRandomItemFromListAndSplice = list => {
  const i = randomIntegerWithinRange( 0, list.length );
  const item = list.splice( i, 1 );
  return list;
}
