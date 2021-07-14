import { hasLanguageAttribute}  from '../rules/htmlRules';
import samplePage from './testPages/samplePage.js';
import samplePage1 from './testPages/samplePage1.js';

import cheerio from'cheerio';

describe('html rules for Sample page 1', function() {
    const $ = cheerio.load(samplePage.response);
    it("when html has language value ", () => {
        expect(hasLanguageAttribute($).isPassed).toEqual(true);
    });
});


describe('html rules for Sample page 1', function() {
    const $ = cheerio.load(samplePage1.response);
    it("html has no language tag value", () => {
        expect(hasLanguageAttribute($).isPassed).toEqual(false);
    });
});