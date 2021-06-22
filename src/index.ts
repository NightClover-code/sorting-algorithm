//importing utils
const Radio = require('prompt-radio');
const usePrompt = require('prompt-sync')();
//importing classes
import { Sorter } from './Sorter';

class SorterStart {
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
