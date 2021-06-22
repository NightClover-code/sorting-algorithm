export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract sortUserInput(param: string | number): void;
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

  sortAndPrint({ data, dataStructure, dataText }: Print) {
    console.log(`Previous ${dataText}: `, data);
    dataStructure.sort();
    console.log(`Sorted ${dataText}: `, dataStructure.data);
  }
}
