
import * as bunyan from 'bunyan';
const log = bunyan.createLogger( { name: 'Server: Server App' } );

const PROJECT_PATH = process.cwd();

require('dotenv').config({ path: path.resolve( PROJECT_PATH, 'packages', 'server', '.env')})


import path from 'path';
import express from 'express';
import cors from 'cors';


const addresses = require('../../fake-data/data/addresses.json');
const persons = require('../../fake-data/data/persons.json');
const personsToAddresses = require('../../fake-data/data/persons-to-addresses.json');
const personsToPersons = require('../../fake-data/data/persons-to-persons.json');



const { HOST, PORT } = process.env;



const app = express();
app.use( cors() );

app.get('/', (req, res) => res.send( 'Hello' ));
app.get('/api/fake/addresses', ( req, res ) => res.json( addresses ));
app.get('/api/fake/persons', ( req, res ) => res.json( persons ));
app.get('/api/fake/persons-to-addresses', ( req, res ) => res.json( personsToAddresses ));
app.get('/api/fake/persons-to-persons', ( req, res ) => res.json( personsToPersons ));


app.listen( PORT );

log.info(`Server listening on port ${PORT}`);
