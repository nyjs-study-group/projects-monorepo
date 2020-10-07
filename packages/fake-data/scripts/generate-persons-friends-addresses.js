
import {
  generateAddresses,
  generatePersons,
  generatePersonAddressConnections,
  generateFriendConnections,
} from '../src';


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




generate().then( () => console.log( 'fake data generated')).catch( e => console.log( e.message ));
