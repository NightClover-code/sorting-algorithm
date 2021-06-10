//importing utils
const usePrompt = require('prompt-sync')();
const Radio = require('prompt-radio');
//importing classes
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const startSorting = () => {
  let dataStructure: string = 'Array of Numbers';

  const prompt = new Radio({
    name: 'dataStructures',
    message: 'What data structure would you like to sort?',
    choices: ['Array of Numbers', 'Linked List', 'String'],
  });

  prompt.ask((answer: any) => {
    dataStructure = answer;
    if (dataStructure === 'Array of Numbers') {
      const numbers = [];
      const len = usePrompt('Enter the length of the array: ');

      for (let i = 0; i < len; i++) {
        const item = usePrompt(`Enter the value of [${i}]: `);
        numbers.push(item);
      }

      const numbersCollection = new NumbersCollection(numbers);

      console.log('Previous nums: ', numbers);

      numbersCollection.sort();

      console.log('Sorted nums: ', numbersCollection.data);
    } else if (dataStructure === 'String') {
      const characters = usePrompt('Enter a string of characters: ');

      const charactersCollection = new CharactersCollection(characters);

      console.log('Previous characters: ', characters);

      charactersCollection.sort();

      console.log('Sorted Characters: ', charactersCollection.data);
    } else {
      const linkedList = new LinkedList();

      const len = usePrompt(
        'Enter the number of items to append to the list: '
      );

      for (let i = 0; i < len; i++) {
        const item = usePrompt(`Enter the value ${i}: `);
        linkedList.add(item);
      }

      linkedList.print();

      linkedList.sort();

      linkedList.print();
    }
  });
};

startSorting();
