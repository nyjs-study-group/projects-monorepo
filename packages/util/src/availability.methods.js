
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import union from 'lodash.union';

export const availableClassKeys = ( Klass, readOnly ) =>
  union( readOnly, Object.getOwnPropertyNames( Klass ) );
