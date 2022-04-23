class Node {
  constructor(character) {
    const elementType = typeof character;
    if (elementType !== 'string') {
      throw new Error(`The value of node should be a "string" type`);
    }
    if (character.length > 1) {
      throw new Error('The value should be a single character');
    }
    this.value = character;
    this.next = null;
    this.prev = null;
  }
}
