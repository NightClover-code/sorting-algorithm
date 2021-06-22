import { Sorter } from '../Sorter';
const usePrompt = require('prompt-sync')();

export class NumbersCollection extends Sorter {
  numbers: number[] = [];

  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }

  sortUserInput() {
    const len = usePrompt('Enter the length of the array: ');

    for (let i = 0; i < len; i++) {
      const item = usePrompt(`Enter the value [${i}]: `);
      this.numbers.push(item);
    }

    this.sortAndPrint({
      data: this.numbers,
      dataStructure: new NumbersCollection(this.numbers),
      dataText: 'nums',
    });
  }
}
