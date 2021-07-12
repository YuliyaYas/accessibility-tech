import getPage from '../controller/scraper';
import samplePage from './samplePage.js';

test('get page throws an error', () => {
    expect(() => getPage()).toThrow();
    expect(() => getPage()).toThrow(Error);
  });