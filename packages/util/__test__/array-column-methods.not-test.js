/*
 * Copyright (c) Robert LaMarca 2020. All rights reserved.
 */

//
// import * as bunyan from 'bunyan';
// const log = bunyan.createLogger( { name: 'Test:Util:Array Methods' } );
//
// import { collectionFakeData } from '@mmdspy/collections/__test__/collection.fake.data';
// import {makeSortFunction, pivotToColumns, pivotToRows, sortColumnSet} from '../src/array-methods/array-column.methods';
//
// const { one, two, three, four, fourAndAHalf, five, six, homes } = collectionFakeData;
// const { cave, nest, shell } = homes;
//
// xdescribe( `Array Column Method Tests`,
//   () => {
//
//     const columnKeys = [
//       'age',
//       'bestie',
//       'mass',
//       'name',
//       'occupation'
//     ];
//
//     test(`should be able to pivot rows to a columnSet`,
//       () => {
//         const rows = [ one, two, three, four ];
//         const columnSet = pivotToColumns( rows, rows.length, columnKeys );
//         expect( typeof columnSet ).toBe( 'object');
//         expect( Object.keys( columnSet ) ).toEqual( columnKeys );
//
//         expect( Array.isArray( columnSet.name ) ).toBe( true );
//         expect( columnSet.name ).toEqual(
//           [
//             'Alfred E Newman',
//             'Ford Prefect',
//             'Rory Storm',
//             'Danielle Foussard',
//           ]
//         );
//         expect( columnSet.occupation ).toEqual(
//           [
//             'Madness',
//             'encyclopedist',
//             'rock star',
//             'thief',
//           ]
//         );
//         expect( columnSet.bestie ).toEqual(
//           [
//             'Ford Prefect',
//             'Rory Storm',
//             'Richard Starkey',
//             'John Michael Hayes',
//           ]
//         );
//         expect( columnSet.mass ).toEqual(
//           [
//             '4 stone',
//             '14 stone',
//             '15 stone',
//             '14 stone',
//           ]
//         );
//         expect( columnSet.age ).toEqual( [
//           42, 201, 82, 95,
//         ]);
//       }
//     );
//
//     test(`should be able to pivot columns to rows`,
//       () => {
//         const rows = [ one, two, three, four ];
//         const columnSet = pivotToColumns( rows, rows.length, columnKeys );
//         const rowsPivoted = pivotToRows( columnSet, 4 );
//         expect( rowsPivoted.length ).toBe( 4 );
//         expect( rowsPivoted ).toEqual( [ one, two, three, four ]);
//       }
//     );
//
//     test(`should be able to create a multi property sort`,
//       () => {
//         const rows = [ one, two, three, four, fourAndAHalf, five, six ];
//         const sortFunction = makeSortFunction( ['mass', 'name' ]);
//         const sortedRows = rows.sort( sortFunction );
//         expect( Array.isArray( sortedRows )).toBe( true );
//         expect( sortedRows ).toEqual( [
//           fourAndAHalf,
//           four,
//           two,
//           three,
//           five,
//           six,
//           one,
//         ])
//       }
//     );
//
//
//
//   }
// );
