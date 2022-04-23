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

class dlList {
  #head = null;
  #tail = null;
  #length = 0;

  length() {
    return this.#length;
  }

  append(character) {
    const node = new Node(character);

    if (this.#length === 0) {
      this.#head = node;
    } else {
      let currNode = this.#head;

      while (currNode.next !== null) {
        currNode = currNode.next;
      }

      currNode.next = node;
      node.prev = currNode;
    }

    this.#tail = node;
    this.#length++;
  }

  insert(character, index) {
    if (index < 0 || index >= this.#length) {
      throw new Error('Incorrect index');
    }

    const node = new Node(character);

    if (index === 0) {
      node.next = this.#head;
      this.#head.prev = node;
      this.#head = node;
      this.#length++;
    } else {
      let currIndex = 0;
      let currNode = this.#head;

      while (currIndex < this.#length) {
        if (currIndex === index - 1) {
          node.next = currNode.next;
          currNode.next.prev = node;
          node.prev = currNode;
          currNode.next = node;
          this.#length++;

          return;
        }

        currNode = currNode.next;
        currIndex++;
      }
    }
  }

  delete(index) {
    if (index < 0 || index >= this.#length) {
      throw new Error('Incorrect index');
    }

    if (index === 0) {
      this.#head = this.#head.next;
      this.#head.prev = null;
    } else if (index === this.#length - 1) {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
    } else {
      let currIndex = 0;
      let currNode = this.#head;

      while (currIndex < this.#length) {
        if (currIndex === index - 1) {
          currNode.next = currNode.next.next;
          currNode.next.prev = currNode;
          this.#length--;

          return;
        }

        currNode = currNode.next;
        currIndex++;
      }
    }

    this.#length--;
  }

  deleteAll(character) {
    let currNode = this.#head;
    let currIndex = 0;

    while (currNode) {
      if (currNode.value === character) {
        currNode = currNode.next;
        this.delete(currIndex);
      } else {
        currNode = currNode.next;
        currIndex++;
      }
    }
  }

  get(index) {
    if (index < 0 || index >= this.#length) {
      throw new Error('Incorrect index');
    }

    let currIndex = 0;
    let currNode = this.#head;

    while (currIndex < this.#length) {
      if (currIndex === index) {
        return currNode.value;
      }

      currNode = currNode.next;
      currIndex++;
    }
  }

  clone() {
    const newList = new dlList();
    let currNode = this.#head;

    for (let i = 0; i < this.#length; i++) {
      newList.append(currNode.value);

      if (currNode.next) {
        currNode = currNode.next;
      }
    }

    return newList;
  }

  reverse() {
    let currNode = this.#head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      prevNode = currNode.prev;
      currNode.next = prevNode;
      currNode.prev = nextNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.#tail = this.head;
    this.#head = prevNode;
  }

  findFirst(character) {
    let currNode = this.#head;
    let currIndex = 0;

    while (currIndex < this.#length - 1) {
      if (currNode.value === character) {
        return currIndex;
      } else if (currNode.next !== null) {
        currNode = currNode.next;
        currIndex++;
      }
    }

    return -1;
  }

  findLast(character) {
    let currNode = this.#tail;
    let currIndex = this.#length - 1;

    while (currIndex > 0) {
      if (currNode.value === character) {
        return currIndex;
      } else if (currNode.prev !== null) {
        currNode = currNode.prev;
        currIndex--;
      }
    }

    return -1;
  }
}
