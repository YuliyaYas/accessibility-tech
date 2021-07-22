import { hasCorrectMetaMaxViewportScale, hasCorrectMetaViewportUserScale, hasCorrectParentElforMeta }  from '../rules/metaRules';
import samplePage1 from './testPages/samplePage1.js';
import samplePage2 from './testPages/samplePage2.js';
import samplePage3 from './testPages/samplePage3.js';

import cheerio from 'cheerio';

describe('meta rules for Sample page 1, 2 and 3 - viewport max scaling', function() {
    it("viewport max scaling is lower than 5", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasCorrectMetaMaxViewportScale($).isPassed).toEqual(false);
    });

    it("viewport max scaling is 5 or more", () => {
        const $ = cheerio.load(samplePage2.response);
        expect(hasCorrectMetaMaxViewportScale($).isPassed).toEqual(true);
    });

    it("viewport max scaling is absent", () => {
        const $ = cheerio.load(samplePage3.response);
        expect(hasCorrectMetaMaxViewportScale($)).toBeUndefined();
    });
});


describe('meta rules for Sample page 1, 2 and 3 - user-scalable attribute check', function() {
    it("user-scalable is absent", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasCorrectMetaViewportUserScale($).isPassed).toEqual(false);
    });

    it("user-scalable is equal to no", () => {
        const $ = cheerio.load(samplePage2.response);
        expect(hasCorrectMetaViewportUserScale($).isPassed).toEqual(false);
    });

    it("user-scalable is equal to yes", () => {
        const $ = cheerio.load(samplePage3.response);
        expect(hasCorrectMetaViewportUserScale($).isPassed).toEqual(true);
    });
});


describe('meta rules for Sample page 2 and 3 - meta tag has correct parent tag', function() {
    it("meta tag has no or wrong parent tag", () => {
        const $ = cheerio.load(samplePage3.response);
        expect(hasCorrectParentElforMeta($).isPassed).toEqual(false);
    });

    it("meta tag has correct parent tag", () => {
        const $ = cheerio.load(samplePage2.response);
        expect(hasCorrectParentElforMeta($)).toBeUndefined();
    });

});