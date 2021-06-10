//importing utils
const Radio = require('prompt-radio');
const usePrompt = require('prompt-sync')();
//importing classes
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

interface Print {
  dataStructure: NumbersCollection | CharactersCollection;
  dataText: 'nums' | 'characters';
  data: number[] | string;
}

class SorterStart {
  linkedList = new LinkedList();
  numbers: number[] = [];
  radioPrompt = new Radio({
    name: 'dataStructures',
    message: 'What data structure would you like to sort?',
    choices: ['Array of Numbers', 'Linked List', 'String'],
  });

  startSorting() {
    this.radioPrompt.ask((answer: any) => {
      let dataStructure = answer;
      if (dataStructure === 'Array of Numbers') {
        this.sortNumbers();
      } else if (dataStructure === 'String') {
        this.sortCharacters();
      } else {
        this.sortLinkedList();
      }
    });
  }

  sortNumbers() {
    const len = usePrompt('Enter the length of the array: ');

    for (let i = 0; i < len; i++) {
      const item = usePrompt(`Enter the value [${i}]: `);
      this.numbers.push(item);
    }

    const numbersCollection = new NumbersCollection(this.numbers);

    numbersCollection.sort();
    this.print({
      data: this.numbers,
      dataStructure: numbersCollection,
      dataText: 'nums',
    });
  }

  sortCharacters() {
    const characters = usePrompt('Enter a string of characters: ');
    const charactersCollection = new CharactersCollection(characters);

    charactersCollection.sort();
    this.print({
      data: characters,
      dataStructure: charactersCollection,
      dataText: 'characters',
    });
  }

  sortLinkedList() {
    const len = usePrompt('Enter the number of items to append to the list: ');

    for (let i = 0; i < len; i++) {
      const item = usePrompt(`Enter the value ${i}: `);
      this.linkedList.add(item);
    }

    console.log(`Previous Linked List: `);
    this.linkedList.print();
    this.linkedList.sort();
    console.log(`\nSorted Linked List: `);
    this.linkedList.print();
  }

  print({ data, dataStructure, dataText }: Print) {
    console.log(`Previous ${dataText}: `, data);
    console.log(`Sorted ${dataText}: `, dataStructure.data);
  }
}

//start sorting
export const sorterStart = new SorterStart();
