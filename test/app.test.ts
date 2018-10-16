import { App } from '../src/app';

describe('class App', () => {
  let app: App;

  beforeAll(() => {
    app = new App();
  });
  afterAll(() => {
    app = null;
  });

  it('should assign app name', () => {
    const appDemo = new App('Demo');
    expect(appDemo.name).toBe('Demo');
  });

  describe('class App, method run()', () => {
    it('should call method1 [with spy]', () => {
      // arrange
      const spy = jest.spyOn(app, 'method1');
      // act
      app.run();
      // assert
      expect(spy).toBeCalled();
    });

    it('should call method1 [with mock]', () => {
      // arrange
      app.method1 = jest.fn().mockName('method1 mock');
      // act
      app.run();
      // assert
      expect(app.method1).toHaveBeenCalled();
    });
  });
});
