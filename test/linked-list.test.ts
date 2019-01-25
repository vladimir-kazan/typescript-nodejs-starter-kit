import { LinkedList } from '../src/01-linked-list/linked-list';

describe('class LinkedList', () => {
  let list: LinkedList<string>;

  beforeEach(() => {
    list = new LinkedList<string>();
  });
  afterEach(() => {
    list = null;
  });

  it('push()', () => {
    list.push('world');
    list.push('Hello');
    // console.log(list);
    // console.log(list.toString());
  });

  it('append()', () => {
    list.append('Hello');
    list.append('world');
    console.log(list);
    console.log(list.toString());
    console.log(list.get(3));
    const hello = list.get(0);
    const newNode = list.insertAfter('a beautiful', hello);
    console.log({ newNode });
    console.log(list.toString());
    console.log(list);
  });
});
