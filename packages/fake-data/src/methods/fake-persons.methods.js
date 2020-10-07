
import { v4 as uuid } from 'uuid';
import {randomIntegerList} from './util.methods';

const faker = require( 'faker' );

// const randomIntegerList
//   = require('./util.methods').randomIntegerList;


export const generatePersons = ( count ) => {
  const { name } = faker;

  const persons = [];
  let i = 0;
  let gender;

  for ( ; i !== count; i++ ) {
    gender =  i%2 === 0 ? 'male' : 'female';
    persons[ i ] = {
      firstName: name.firstName( gender ),
      lastName: name.lastName( gender ),
      username: uuid(),
      password: uuid(),
      middleName: name.firstName( gender ),
      age: Math.floor( Math.random() * 100 ),
      occupation: name.jobTitle(),
      mass: Math.floor( Math.random() * 300 + 20 ),
    }
  }
  return persons;
}

export const generateFriendConnections = ( personCount ) => {
  const maxFriendConnections = Math.floor( personCount * .8 );
  const friendConnections = [];

  const randomIntegerParams = {
    minLength: 0,
    maxLength: Math.ceil( personCount * .5 ),
    minValue: 0,
    maxValue: personCount,
  }

  let i = 0;
  for ( ; i !== personCount; i++ ) {
    friendConnections[ i ]
      = randomIntegerList(
          randomIntegerParams
        );
  }
  return friendConnections;
}


export const generatePersonAddressConnections = ( personCount, addressesCount ) => {
  const maxAddressConnections = addressesCount < 10 ? 5 : 10;
  const addressConnections = [];

  const randomIntegerParams = {
    minLength: 0,
    maxLength: maxAddressConnections,
    minValue: 0,
    maxValue: addressesCount,
  }

  let i = 0;
  for ( ; i !== personCount; i++ ) {
    addressConnections[ i ]
      = randomIntegerList(
          randomIntegerParams
        );
  }
  return addressConnections;
}

