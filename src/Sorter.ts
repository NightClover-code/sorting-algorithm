//importing utils
const Radio = require('prompt-radio');

export abstract class Sorter {
  radioPrompt = new Radio({
    name: 'dataStructures',
    message: 'What data structure would you like to sort?',
    choices: ['Array of Numbers', 'Linked List', 'String'],
  });

  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract sortUserInput(): void;
  abstract length: number;

  sort(): void {
    //sorting logic
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }

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

  sortAndPrint({ data, dataStructure, dataText }: Print) {
    console.log(`Previous ${dataText}: `, data);
    dataStructure.sort();
    console.log(`Sorted ${dataText}: `, dataStructure.data);
  }
}
