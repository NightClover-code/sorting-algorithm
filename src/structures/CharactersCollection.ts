import { Sorter } from '../Sorter';

export class CharactersCollection extends Sorter {
  characters: string = '';

  get length(): number {
    return this.characters.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.characters[leftIndex].toLowerCase() >
      this.characters[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.characters.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.characters = characters.join('');
  }

  sortUserInput(characters: string): void {
    this.sortAndPrint({
      data: characters,
      dataStructure: this,
      dataText: 'characters',
    });
  }
}
