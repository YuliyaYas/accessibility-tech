import { hasTabIndexInPTag, hasChildrenInPTag } from '../rules/pRules';
import samplePage1 from './testPages/samplePage1.js';
import samplePage4 from './testPages/samplePage4.js';

import cheerio from 'cheerio';


describe('p tag rules for tab indexes Sample page 1 and 4', function () {
    it("There is no tab indexes in p tags", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasTabIndexInPTag($)[0].isPassed).toEqual(true);
    });

    it("There are tab indexes in p tags", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasTabIndexInPTag($)[0].isPassed).toEqual(false);
    });
});


describe('p tag rules for tab indexes Sample page 1 and 4', function () {
    it("There is no tab indexes in p tags", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasChildrenInPTag($)[0].isPassed).toEqual(true);
    });

    it("There are tab indexes in p tags", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasChildrenInPTag($)[0].isPassed).toEqual(false);
    });
});
