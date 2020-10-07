
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import { assert } from './assert.methods';

const combineTypeKeys = new Set(
  [
    'append', 'prepend', 'reduce', 'preduce',
    ]);


export const assertIsCombineTypeKey =
  ( candidate, message = `${candidate} is not a combine type key` ) =>
    assert( combineTypeKeys.has( candidate ), message );
