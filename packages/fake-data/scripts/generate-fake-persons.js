
import { generate } from './fake-persons.methods';
generate().then( () => console.log( 'fake data generated')).catch( e => console.log( e.message ));
