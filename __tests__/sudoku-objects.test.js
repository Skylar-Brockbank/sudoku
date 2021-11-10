//import the thing that we're testing

//describe statement
//describe('NameOfImportedThing',() => {test('testingMessage', () => {expect(importedObject.property).toEqual(expectedValue);})});

//expected outcomes

import Board from '../src/sudoku-objects.js';

describe('Board',() => {
  test('it should make an object with a 2d array, consisting of 9 9 index long 1d arrays', () => {
    const board1 = new Board();
    expect(board1.spaces[0][0]).toEqual(1);
    expect(board1.spaces[0][1]).toEqual(2);
    expect(board1.spaces[0][2]).toEqual(3);
    expect(board1.spaces[0][3]).toEqual(4);
  });
});