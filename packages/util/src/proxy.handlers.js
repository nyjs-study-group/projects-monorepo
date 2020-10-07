
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Util: Proxy Handlers' } );

export const proxyToOriginSubmitHandler = {
  get: function( target, command ) {
    if ( command in target ) {
      return target[ command ];
    }
    return target.__up__( command );
  }
}

export const proxyToChildOrOriginSubmitHandler = {
  get: function( target, command ) {
    if ( command in target ) {
      return target[command];
    }

    const items = target.items();
    const c = items.length;
    if ( c === 0 ) return target.__up__( command );

    if ( command in items[ 0 ] ) {
      return target._run( command );
    }

    return target.__up__( command );

  }
}
