import { PipesTestPipe } from './pipes-test.pipe';

describe('PipesTestPipe', () => {
  it('create an instance', () => {
    const pipe = new PipesTestPipe();
    expect(pipe).toBeTruthy();
  });
});
