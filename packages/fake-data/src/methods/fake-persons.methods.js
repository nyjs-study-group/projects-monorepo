
import { v4 as uuid } from 'uuid';
import {randomIntegerList} from './util.methods';

const faker = require( 'faker' );

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
  const maxFriendConnections =
    personCount < 10
      ? personCount
      : Math.floor( personCount * ( personCount**-.1 ) );

  const friendConnections = [];

  const randomIntegerParams = {
    minLength: 0,
    maxLength: maxFriendConnections,
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

