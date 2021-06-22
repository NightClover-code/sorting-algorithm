//importing utils
const Radio = require('prompt-radio');
const usePrompt = require('prompt-sync')();
//importing classes
import { Sorter } from './Sorter';

class SorterStart {
  radioPrompt = new Radio({
    name: 'dataStructures',
    message: 'What data structure would you like to sort?',
    choices: ['Array of Numbers', 'Linked List', 'String'],
  });

  startSorting() {
    this.radioPrompt.ask((answer: answer) => {
      if (answer === 'Array of Numbers') {
        this.sortUserInput();
      } else if (answer === 'String') {
        this.sortUserInput();
      } else {
        this.sortUserInput();
      }
    });
  }
}

//start sorting
export const sorterStart = new SorterStart();
