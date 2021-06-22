import { Sorter } from '../Sorter';
const usePrompt = require('prompt-sync')();

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }

  sortUserInput() {
    const characters = usePrompt('Enter a string of characters: ');

    this.sortAndPrint({
      data: characters,
      dataStructure: new CharactersCollection(characters),
      dataText: 'characters',
    });
  }
}
