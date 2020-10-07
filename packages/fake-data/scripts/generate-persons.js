
const fs = require('fs');
const path = require('path');

import {
  generatePersons
} from '../src';

const COUNT = 1000;
const PROJECT_PATH = process.cwd();

const DATA_PATH = path.resolve( PROJECT_PATH, 'packages', 'fake-data', 'data');
const PERSONS_PATH = path.resolve( DATA_PATH, 'persons.json');

const generateAndSavePersons = () => {
  const persons = generatePersons(COUNT);
  fs.writeFileSync(
    PERSONS_PATH,
    JSON.stringify(persons, null, 2),
  );
}

generateAndSavePersons();
console.log( `Generated ${COUNT} fake persons and saved at ${PERSONS_PATH}`);

