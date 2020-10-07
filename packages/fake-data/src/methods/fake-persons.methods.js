
import { v4 as uuid } from 'uuid';

const faker = require( 'faker' );
const fs = require('fs');
const path = require('path');

const generateRandomIntegerList
  = require('./util.methods').generateRandomIntegerList;

const PROJECT_PATH = process.cwd();
const DATA_PATH = path.resolve( PROJECT_PATH, 'packages', 'fake-data', 'data');

const PERSON_COUNT = 500;
const ADDRESSES_COUNT = 400;

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
  let i = 0;
  for ( ; i !== personCount; i++ ) {
    friendConnections[ i ]
      = generateRandomIntegerList(
        0, maxFriendConnections, 0, personCount, true
        );
  }
  return friendConnections;
}


export const generatePersonAddressConnections = ( personCount, addressesCount ) => {
  const maxAddressConnections = addressesCount < 10 ? 5 : 10;
  const addressConnections = [];
  let i = 0;
  for ( ; i !== personCount; i++ ) {
    addressConnections[ i ]
      = generateRandomIntegerList(
          0, maxAddressConnections, 0, addressesCount, true
        );
  }
  return addressConnections;
}

