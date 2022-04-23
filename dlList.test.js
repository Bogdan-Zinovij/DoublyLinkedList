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

  describe('method delete', () => {
    test('should delete the first item in the list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      list.delete(0);

      expect(list.get(0)).toBe('2');
      expect(list.length()).toBe(2);
    });

    test('should delete the last item in the list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      list.delete(2);

      expect(() => list.get(2)).toThrow('Incorrect index');
      expect(list.length()).toBe(2);
    });

    test('should delete the list item in the middle', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      list.delete(1);

      expect(list.get(1)).toBe('3');
      expect(list.length()).toBe(2);
    });

    test('should throw an error when trying to delete an element with an index less than 0', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));

      expect(() => list.delete(-1)).toThrow('Incorrect index');
    });

    test('should throw an error when trying to delete an element with an index greater than the length of the list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));

      expect(() => list.delete(3)).toThrow('Incorrect index');
    });
  });

  describe('method deleteAll', () => {
    test('should delete two identical values', () => {
      const list = new dlList();
      ['1', '2', '3', '1'].forEach((value) => list.append(value));
      list.deleteAll('1');

      expect(list.get(0)).toBe('2');
      expect(list.get(1)).toBe('3');
      expect(list.length()).toBe(2);
    });

    test('should delete one value', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      list.deleteAll('2');

      expect(list.get(0)).toBe('1');
      expect(list.get(1)).toBe('3');
      expect(list.length()).toBe(2);
    });

    test('should try to find an item that is not in the list and do nothing', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      list.deleteAll('4');

      expect(list.get(0)).toBe('1');
      expect(list.get(1)).toBe('2');
      expect(list.get(2)).toBe('3');
      expect(list.length()).toBe(3);
    });
  });

  describe('method clone', () => {
    test('should create a copy of the list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      const listCopy = list.clone();

      expect(listCopy.get(0)).toBe('1');
      expect(listCopy.get(1)).toBe('2');
      expect(listCopy.get(2)).toBe('3');
      expect(listCopy.length()).toBe(3);
    });

    test('should clone an empty list', () => {
      const list = new dlList();
      const listCopy = list.clone();

      expect(listCopy.length()).toBe(0);
    });

    test('the changes to the copy of the list must not affect the original list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));

      const listCopy = list.clone();
      listCopy.delete(2);

      expect(list.get(2)).toBe('3');
      expect(list.length()).toBe(3);
    });
  });

  describe('method findFirst', () => {
    test('should find the first of two suitable list item', () => {
      const list = new dlList();
      ['1', '2', '3', '1'].forEach((value) => list.append(value));

      expect(list.findFirst('1')).toBe(0);
    });

    test('should find the first suitable list item', () => {
      const list = new dlList();
      ['1', '2', '3', '1'].forEach((value) => list.append(value));

      expect(list.findFirst('2')).toBe(1);
    });

    test('should return -1 when trying to find an item that is not in the list', () => {
      const list = new dlList();
      ['1', '2', '3', '1'].forEach((value) => list.append(value));

      expect(list.findFirst('4')).toBe(-1);
    });

    test('should return -1 when trying to find an item in an empty list', () => {
      const list = new dlList();

      expect(list.findFirst('4')).toBe(-1);
    });
  });

  describe('method findLast', () => {
    test('should find the last element of the two suitable', () => {
      const list = new dlList();
      ['1', '2', '3', '1'].forEach((value) => list.append(value));

      expect(list.findLast('1')).toBe(3);
    });

    test('should find the only suitable element', () => {
      const list = new dlList();
      ['1', '2', '3', '1'].forEach((value) => list.append(value));

      expect(list.findLast('2')).toBe(1);
    });

    test('should return -1 when trying to find an item that is not in the list', () => {
      const list = new dlList();
      ['1', '2', '3', '1'].forEach((value) => list.append(value));

      expect(list.findLast('4')).toBe(-1);
    });

    test('should return -1 when trying to find an item in an empty list', () => {
      const list = new dlList();

      expect(list.findLast('4')).toBe(-1);
    });
  });

  describe('method reverse', () => {
    test('should reverse elements in the list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      list.reverse();

      expect(list.get(0)).toBe('3');
      expect(list.get(1)).toBe('2');
      expect(list.get(2)).toBe('1');
      expect(list.length()).toBe(3);
    });

    test('should reverse a list with only one element', () => {
      const list = new dlList();
      ['1'].forEach((value) => list.append(value));
      list.reverse();

      expect(list.get(0)).toBe('1');
    });

    test('should reverse an empty list', () => {
      const list = new dlList();
      list.reverse();

      expect(list.length()).toBe(0);
    });
  });

  describe('method clear', () => {
    test('should clear a list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      list.clear();

      expect(list.length()).toBe(0);
    });

    test('should clear an empty list', () => {
      const list = new dlList();
      list.clear();

      expect(list.length()).toBe(0);
    });
  });

  describe('method extend', () => {
    test('should extend an existing list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      const list2 = new dlList();
      ['4', '5', '6'].forEach((value) => list2.append(value));
      list.extend(list2);

      expect(list.get(3)).toBe('4');
      expect(list.get(4)).toBe('5');
      expect(list.get(5)).toBe('6');
      expect(list.length()).toBe(6);
    });

    test('should extend the list with another empty list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      const list2 = new dlList();
      list.extend(list2);

      expect(list.get(0)).toBe('1');
      expect(list.get(1)).toBe('2');
      expect(list.get(2)).toBe('3');
      expect(list.length()).toBe(3);
    });

    test('should extend the empty list with another non-empty list', () => {
      const list = new dlList();
      const list2 = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      list.extend(list2);

      expect(list.get(0)).toBe('1');
      expect(list.get(1)).toBe('2');
      expect(list.get(2)).toBe('3');
      expect(list.length()).toBe(3);
    });

    test('should not be affected by changes to the second list on the extennded list', () => {
      const list = new dlList();
      ['1', '2', '3'].forEach((value) => list.append(value));
      const list2 = new dlList();
      ['3', '4', '5'].forEach((value) => list2.append(value));
      list.extend(list2);
      list.delete(5);
      list.delete(0);

      expect(list2.length()).toBe(3);
      expect(list.length()).toBe(5);
    });
  });
});
