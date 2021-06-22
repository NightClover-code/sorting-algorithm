import { Sorter } from '../Sorter';
const usePrompt = require('prompt-sync')();

export class NumbersCollection extends Sorter {
  data: number[] = [];

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

  sortUserInput(len: number): void {
    for (let i = 0; i < len; i++) {
      const item = usePrompt(`Enter the value [${i}]: `);
      this.data.push(item);
    }

    this.sortAndPrint({
      data: this.data,
      dataStructure: this,
      dataText: 'nums',
    });
  }
}
