//importing classes
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([0, 5, 6, -6, 9]);
const sorter = new Sorter(numbersCollection);

sorter.sort();
