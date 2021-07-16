import getPage from '../controller/scraper';

test('get page throws an error', () => {
    expect(() => getPage()).toThrow();
    expect(() => getPage()).toThrow(Error);
  });