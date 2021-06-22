import { Sorter } from '../Sorter';
const usePrompt = require('prompt-sync')();

export class NumbersCollection extends Sorter {
  numbers: number[] = [];

  get length(): number {
    return this.numbers.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.numbers[leftIndex] > this.numbers[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.numbers[leftIndex];
    this.numbers[leftIndex] = this.numbers[rightIndex];
    this.numbers[rightIndex] = leftHand;
  }

  sortUserInput(len: number): void {
    for (let i = 0; i < len; i++) {
      const item = usePrompt(`Enter the value [${i}]: `);
      this.numbers.push(item);
    }

    this.sortAndPrint({
      data: this.numbers,
      dataStructure: this,
      dataText: 'nums',
    });
  }
}
