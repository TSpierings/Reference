import { FibonacciTimeStatePipe } from './fibonacci-time-state.pipe';

describe('FibonacciTimeStatePipe', () => {
  it('create an instance', () => {
    const pipe = new FibonacciTimeStatePipe();
    expect(pipe).toBeTruthy();
  });
});
