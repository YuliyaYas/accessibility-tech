import getPage from '../main';
import samplePage from '../output.js';

test('get page throws an error', () => {
    expect(() => getPage()).toThrow();
    expect(() => getPage()).toThrow(Error);
  });