import { App } from '../src/app';

describe('Demo test', () => {
  it('should assign app name', () => {
    const app = new App('Demo');
    expect(app.name).toBe('Demo');
  });
});
