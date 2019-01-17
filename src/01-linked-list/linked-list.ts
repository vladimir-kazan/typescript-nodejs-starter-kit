export class Node<T> {
  value: T;
  next: Node<T>;

  constructor(value: T, next: Node<T> = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: Node<T>;
  tail: Node<T>;
}
