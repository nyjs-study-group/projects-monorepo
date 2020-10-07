
const faker = require( 'faker' );
const fs = require('fs');
const path = require('path');

export const generateRandomIntegerList
  = require('./util.methods').generateRandomIntegerList;

const PROJECT_PATH = process.cwd();
const DATA_PATH = path.resolve( PROJECT_PATH, 'packages', 'fake-data', 'data');

const PERSON_COUNT = 500;
const ADDRESSES_COUNT = 400;


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

