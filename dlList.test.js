const dlList = require('./dlList');

describe('method append', () => {
  test('should throw an error when appending a numeric value', () => {
    const list = new dlList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append(1)).toThrow(
      `The value of node should be a "string" type`
    );
  });

  test('should throw an error when appending a string of more than 2 characters', () => {
    const list = new dlList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append('ab')).toThrow(
      'The value should be a single character'
    );
  });

  test('should throw an error when appending an undefined value', () => {
    const list = new dlList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append(undefined)).toThrow(
      `The value of node should be a "string" type`
    );
  });

  test('should throw an error when appending a null value', () => {
    const list = new dlList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append(null)).toThrow(
      `The value of node should be a "string" type`
    );
  });

  test('should throw an error when appending an object value', () => {
    const list = new dlList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append({ a: 1 })).toThrow(
      `The value of node should be a "string" type`
    );
  });

  test('should throw an error when appending a bolean value', () => {
    const list = new dlList();
    ['1', '2', '3'].forEach((value) => list.append(value));

    expect(() => list.append(false)).toThrow(
      `The value of node should be a "string" type`
    );
  });

  test('should add a new character to the empty list', () => {
    const list = new dlList();
    list.append('1');

    expect(list.get(0)).toBe('1');
    expect(list.length()).toBe(1);
  });

  test('should add a new character to the end of the list', () => {
    const list = new dlList();
    ['1', '2'].forEach((value) => list.append(value));
    list.append('3');

    expect(list.get(2)).toBe('3');
    expect(list.length()).toBe(3);
  });

  describe('method length', () => {
    test('should return the length of an empty list', () => {
      const list = new dlList();

      expect(list.length()).toBe(0);
    });

    test('should return the length of the list with one element', () => {
      const list = new dlList();
      list.append('1');

      expect(list.length()).toBe(1);
    });

    test('should return the length of a list with several items', () => {
      const list = new dlList();
      ['1', '2', '3', '4', '5'].forEach((value) => list.append(value));

      expect(list.length()).toBe(5);
    });
  });

  describe('method get', () => {
    test('should throw an error when trying to find an element with an index less than 0', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));

      expect(() => list.get(-1)).toThrow('Incorrect index');
    });

    test('should throw an error when trying to find an item with an index longer than the list length', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));

      expect(() => list.get(3)).toThrow('Incorrect index');
    });

    test('should throw an error when trying to find the first item in an empty list', () => {
      const list = new dlList();

      expect(() => list.get(0)).toThrow('Incorrect index');
    });

    test('should return the first element of the list', () => {
      const list = new dlList();
      ['1', '2', '3', '4', '5'].forEach((value) => list.append(value));

      expect(list.get(0)).toBe('1');
    });

    test('should return the last element of the list', () => {
      const list = new dlList();
      ['1', '2', '3', '4', '5'].forEach((value) => list.append(value));

      expect(list.get(4)).toBe('5');
    });

    test('should return the third element of the list', () => {
      const list = new dlList();
      ['1', '2', '3', '4', '5'].forEach((value) => list.append(value));

      expect(list.get(2)).toBe('3');
    });
  });

  describe('method insert', () => {
    test('should insert a character at the beginning of the list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      list.insert('0', 0);

      expect(list.get(0)).toBe('0');
      expect(list.length()).toBe(4);
    });

    test('should insert a character at the third position in the list', () => {
      const list = new dlList();
      ['1', '2', '4'].forEach((value) => list.append(value));
      list.insert('3', 2);

      expect(list.get(2)).toBe('3');
      expect(list.length()).toBe(4);
    });

    test('should throw an error when trying to insert an item at a position with an index less than 0', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));

      expect(() => list.insert('0', -1)).toThrow('Incorrect index');
    });

    test('should throw an error when trying to insert an item at a position with an index greater than the length of the list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));

      expect(() => list.insert('4', 3)).toThrow('Incorrect index');
    });
  });
});
