//importing utils
const Radio = require('prompt-radio');
const usePrompt = require('prompt-sync')();
//importing classes
import { NumbersCollection } from './structures/NumbersCollection';
import { CharactersCollection } from './structures/CharactersCollection';
import { LinkedList } from './structures/LinkedList';

class SorterStart {
  numbersCollection = new NumbersCollection();
  linkedList = new LinkedList();
  characters = new CharactersCollection();

  radioPrompt = new Radio({
    name: 'dataStructures',
    message: 'What data structure would you like to sort?',
    choices: ['Array of Numbers', 'Linked List', 'String'],
  });

  startSorting() {
    this.radioPrompt.ask((answer: answer) => {
      if (answer === 'Array of Numbers') {
        const len = usePrompt('Enter the length of the array: ');
        this.numbersCollection.sortUserInput(len);
      } else if (answer === 'String') {
        const characters = usePrompt('Enter a string of characters: ');
        this.characters.sortUserInput(characters);
      } else {
        const len = usePrompt(
          'Enter the number of items to append to the list: '
        );
        this.linkedList.sortUserInput(len);
      }
    });
  }
}

//start sorting
export const sorterStart = new SorterStart();
