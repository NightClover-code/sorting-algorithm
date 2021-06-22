type answer = 'Array of Numbers' | 'String' | 'LinkedList';

interface Print {
  dataStructure: NumbersCollection | CharactersCollection;
  dataText: 'nums' | 'characters';
  data: number[] | string;
}
