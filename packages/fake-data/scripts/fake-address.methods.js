
const faker = require( 'faker' );
const fs = require('fs');
const path = require('path');

const generateRandomIntegerList
  = require('./util.methods').generateRandomIntegerList;

const PROJECT_PATH = process.cwd();
const DATA_PATH = path.resolve( PROJECT_PATH, 'packages', 'fake-data', 'data');

const PERSON_COUNT = 500;
const ADDRESSES_COUNT = 400;


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
