export class Node<T> {
  value: T = null;
  next: Node<T> = null;

  constructor(value: T, next: Node<T> = null) {
    this.value = value;
    this.next = next;
  }

  toString(): string {
    if (!this.next) {
      return this.value.toString();
    }
    return `${this.value} -> ${this.next}`;
  }
}

export class LinkedList<T> {

  static FromArray<T>(array: Array<T>): LinkedList<T> {
    // array.reduce()
    return new LinkedList<T>();
  }

  head: Node<T> = null;
  tail: Node<T> = null;

  get isEmpty() {
    return this.head === null;
  }

  toString(): string {
    if (!this.head) {
      return 'Empty list';
    }
    return this.head.toString();
  }

  // Adds a value at the front of the list (Array.unshift)
  push(value: T) {
    this.head = new Node(value, this.head);
    if (this.tail === null) {
      this.tail = this.head;
    }
  }

  // Adds a value at the end of the list (Array.push)
  append(value: T) {
    if (this.isEmpty) {
      this.push(value);
      return;
    }
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }

  // O(i)
  get(index: number): Node<T> {
    let currentNode = this.head;
    let currentIdx = 0;
    while (currentNode !== null && currentIdx < index) {
      currentNode = currentNode.next;
      currentIdx += 1;
    }
    return currentNode;
  }

  // Adds a value after a particular node of the list (Array.splice(at, 0, value)
  // O(1)
  insertAfter(value: T, after: Node<T>): Node<T> {
    if (this.tail === after) {
      this.append(value);
      return this.tail;
    }
    after.next = new Node(value, after.next);
    return after.next;
  }
}
