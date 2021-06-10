//importing classes
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([0, 5, 6, -6, 9, 5645]);
const charactersCollection = new CharactersCollection('achrafLol');

const sorter = new Sorter(charactersCollection);

sorter.sort();
