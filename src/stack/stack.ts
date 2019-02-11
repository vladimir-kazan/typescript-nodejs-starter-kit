export class Stack<T> {
  private storage: T[] = [];

  push(item: T) {
    this.storage.push(item);
  }

  pop(): T {
    return this.storage.pop();
  }

  toString(): string {
    const top = '----top----\n';
    const bottom = '\n-----------';
    const elements = this.storage
      .reverse()
      .map(i => `${i}`)
      .join('\n');
    return `${top}${elements}${bottom}`;
  }
}
