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
});
