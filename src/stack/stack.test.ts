import { Stack } from './stack';

describe('class Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack = null;
  });

  it('should print stack', () => {
    // given
    stack.push(1);
    stack.push(2);
    stack.push(3);
    // stack.pop();
    // when
    const str = stack.toString();
    // then
    console.log(str);
  });


});
