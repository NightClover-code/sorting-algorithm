import { Sorter } from '../Sorter';

export class CharactersCollection extends Sorter {
  data: string = '';

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const data = this.data.split('');

    const leftHand = data[leftIndex];
    data[leftIndex] = data[rightIndex];
    data[rightIndex] = leftHand;

    this.data = data.join('');
  }

  sortUserInput(characters: string): void {
    this.data = characters;

    this.sortAndPrint({
      data: this.data,
      dataStructure: this,
      dataText: 'characters',
    });
  }
}
