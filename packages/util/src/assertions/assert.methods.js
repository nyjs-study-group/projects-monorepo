
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

export const assert = ( cond, message, logger = false ) => {
  if ( cond === false ) {
    if ( logger === false ) {
      throw new Error( message );
    }
    logger.warn( message );
  }
};


