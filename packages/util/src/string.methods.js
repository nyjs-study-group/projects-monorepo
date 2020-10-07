
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import { assertIsString } from './assertions';

export const properCase = ( value ) => {
  assertIsString( value, `Cannot call properCase on a non string ${value}`);
  return value[ 0 ].toUpperCase() + value.slice( 1 );
}
