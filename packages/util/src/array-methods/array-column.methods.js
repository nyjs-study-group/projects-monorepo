
/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Util:Array Columnn Methods' } );

import {
  assertIsArray,
  assertIsString,
} from '../assertions';


export const getMaxLength = ( columnsSet ) => {
  const keys = ( Object.keys( columnsSet ));
  return _getMaxLength( columnsSet, keys );
}

const _getMaxLength = ( columnsSet, keys ) => {
  const c = keys.length;
  let len = 0;
  let i = 0;
  let cc;
  for ( ; i !== c; i++ ) {
    cc = columnsSet[ keys[ i ] ];
    if ( cc > len ) len = cc;
  }
  return len;
}

export const pivotToRows = ( columnsSet, rowCount = -1, _default = null ) => {
  const keys = Object.keys( columnsSet );
  if ( rowCount === -1 ) {
    rowCount = _getMaxLength( columnsSet, keys );
  }

  let column;
  const rows = [];
  let row;

  let i = 0;
  let ki = 0;
  let kc = keys.length;
  let key;

  for ( ; ki !== kc; ki++ ) {
    key = keys[ ki ];
    column = columnsSet[ key ];
    i = 0;
    if ( ki === 0 ) {
      for ( ; i !== rowCount; i++ ) {
        rows[ i ] = { [key]: column[ i ] }
      }
    } else {
      for ( ; i !== rowCount; i++ ) {
        rows[ i ][ key ] = column[ i ];
      }
    }
  }

  return rows;
}

export const pivotToColumns = ( rowSet, rowCount, columnKeys ) => {
  const columnSet = {};

  let i = 0;
  let ci = 0;
  let cc = columnKeys.length;
  let row;
  let key;

  for ( ; ci !== cc; ci++ ) {
    columnSet[ columnKeys[ ci ] ] = [];
  }
  ci = 0;

  for ( ; i !== rowCount; i++ ) {
    ci = 0;
    row = rowSet[ i ];
    for ( ; ci !== cc; ci++ ) {
      key = columnKeys[ ci ];
      columnSet[ key ][ i ] = row[ key ];
    }
  }

  return columnSet;
}

export const makeSortFunction = ( propertyKeys ) => {
  const kc = propertyKeys.length;
  let i = 0;
  return function ( a, b ) {
    i = 0;
    let r;
    let aV, bV;
    for ( ; i !== kc; i++ ) {
      aV = a[ propertyKeys[ i ]];
      bV = b[ propertyKeys[ i ]];
      r = aV < bV ? -1 : aV > bV ? 1 : 0;
      if ( r !== 0 ) return r;
    }
    return r;
  }
}

export const sortRows = ( columnKeys, rowSet ) => {
  const sortFunction = makeSortFunction( columnKeys );
  rowSet.sort( sortFunction );
  return rowSet;
}

export const sortColumnSet = ( columnKeys, columnsSet, rowCount = -1 ) => {
  const rowSet =
    sortRows( columnKeys, pivotToRows( columnsSet, rowCount ) )

  return pivotToColumns( rowSet, rowSet.length, columnKeys );
}

export const getColumnFromRows = ( columnKey, rowSet ) => {
  const c = rowSet.length;
  let i = 0;
  const column = [];
  for ( ; i !== c; i++ ) {
    column[ i ] = rowSet[ i ][ columnKey ];
  }
  return column;
}

export const filterByProperties = ( data, properties, useExact = true ) => {
  const keys = Object.keys( properties );
  const c = keys.length;
  let i = 0;
  let key;
  let filteredData = [ ...data ]
  for ( ; i !== c ; i++ ) {
    key = keys[ i ];
    filteredData
      = ( !!useExact ? filterByExact : filterByLike  )(
        filteredData, key, properties[ key ]
      )
  }
  return filteredData;
}

export const filterByExact = ( data, filterKey, filterValue ) => {
  assertIsArray( data, `Cannot filter a non-array` );
  const c = data.length;
  let i = 0;
  let fi = 0;
  const filteredData = [];
  for ( ; i !== c; i++ ) {
    if ( data[ i ][ filterKey ] === filterValue ) {
      filteredData[ fi++ ] = data[ i ]
    }
  }
  return filteredData;
}

export const filterByLike = ( data, filterKey, filterValue ) => {
  assertIsArray( data, `Cannot filter a non-array` );
  assertIsString( filterValue, `Cannot filter by like on a non-string`);

  const c = data.length;
  let i = 0;
  let fi = 0;
  const filteredData = [];
  for ( ; i !== c; i++ ) {
    if ( !!data[ i ][ filterKey ].includes( filterValue ) ) {
      filteredData[ fi++ ] = data[ i ]
    }
  }
  return filteredData;
}

export const mergeColumnData = ( ...columns ) => {
  const cc = columns.length;
  let ci = 0;
  let maxRows = 0;
  for ( ; ci !== cc; ci++ ) {
    if ( columns[ ci ].length > maxRows ) maxRows = columns[ ci ].length;
  }

  let ri = 0;
  const mergedColumns = [];
  for ( ; ri !== maxRows; ri++ ) {
    mergedColumns[ ri ] = Object.assign( {}, ...columns );
  }
  return mergedColumns;
}
export const mergeColumnObjects = ( columnA, columnB = [], columnBKey = null ) => {
  const rc = columnA.length > columnB.length ? columnA.length : columnB.length;
  let ri = 0;
  const newColumn = [];
  if ( columnBKey === null ) {
    for ( ; ri !== rc; ri++ ) {
      newColumn[ ri ] = { ...columnA, ...columnB }
    }
  } else {
    for ( ; ri !== rc; ri++ ) {
      newColumn[ ri ] = {  ...columnA[ ri ], [columnBKey]: columnB[ ri ] }
    }
  }
  return newColumn;
}
