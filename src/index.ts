//importing classes
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([0, 5, 6, -6, 9, 5645]);
const charactersCollection = new CharactersCollection('achrafLol');
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-62);
linkedList.add(10);
linkedList.add(65);

linkedList.print();
