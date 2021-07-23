import { hasAriaHiddenInABodyTag}  from '../rules/bodyRules';
import samplePage1 from './testPages/samplePage1.js';
import samplePage3 from './testPages/samplePage3.js';
import samplePage4 from './testPages/samplePage4.js';

import cheerio from 'cheerio';

describe('Body tag has correct aria-hidden attribute', function() {
    it("Body tag has correct aria-hidden attribute sample page 1", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasAriaHiddenInABodyTag($).isPassed).toEqual(true);
    });

    it("Body tag has correct aria-hidden attribute sample page 3", () => {
        const $ = cheerio.load(samplePage3.response);
        expect(hasAriaHiddenInABodyTag($).isPassed).toEqual(true);
    });
});

describe('body rule for Sample page 4', function() {
    const $ = cheerio.load(samplePage4.response);
    it("Body tag doesn't have a correct aria-hidden attribute", () => {
        expect(hasAriaHiddenInABodyTag($).isPassed).toEqual(false);
    });
});
