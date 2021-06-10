import { Sorter } from './Sorter';

const sorter = new Sorter([10, 5, 65, 321, -32, -3, 0]);

sorter.sort();

console.log(sorter.collection);
