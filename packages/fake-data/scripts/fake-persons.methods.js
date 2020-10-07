
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
      middleName: name.firstName( gender ),
      age: Math.floor( Math.random() * 100 ),
      occupation: name.jobTitle(),
      mass: Math.floor( Math.random() * 300 + 20 ),
    }
  }
  return persons;
}

export const generateAddresses = ( count ) => {
    const { address } = faker;
    const addresses = [];
    let i = 0;
    for ( ; i !== count; i++ ) {
      addresses[ i ] = {
        address1: address.streetAddress( true ),
        address2: address.secondaryAddress(),
        city: address.city(),
        state: address.state(),
        country: address.country(),
        zipCode: address.zipCode()
      }
    }
    return addresses;
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


export const generate = async () => {

  const persons = generatePersons( PERSON_COUNT );
  const addresses = generateAddresses( ADDRESSES_COUNT );
  const friendConnections = generateFriendConnections( PERSON_COUNT );
  const addressConnections = generatePersonAddressConnections( ADDRESSES_COUNT );

  await fs.writeFileSync(
    path.resolve( DATA_PATH, 'persons.json'),
    JSON.stringify( persons, null, 2 )
  );

  await fs.writeFileSync(
    path.resolve( DATA_PATH, 'addresses.json'),
    JSON.stringify( addresses, null, 2 )
  );

  await fs.writeFileSync(
    path.resolve( DATA_PATH, 'persons-to-persons.json'),
    JSON.stringify( friendConnections, null, 2 )
  );

  await fs.writeFileSync(
    path.resolve( DATA_PATH, 'persons-to-addresses.json'),
    JSON.stringify( addressConnections, null, 2 )
  );
}
