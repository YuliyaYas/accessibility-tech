import { hasCorrectMetaMaxViewportScale, hasCorrectMetaViewportUserScale}  from '../rules/metaRules';
import samplePage1 from './testPages/samplePage1.js';
import samplePage2 from './testPages/samplePage2.js';
import samplePage3 from './testPages/samplePage3.js';


import cheerio from'cheerio';

describe('meta rules for Sample page 1 and 3 - viewport max scaling', function() {
    it("viewport max scaling is lower than 5", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasCorrectMetaMaxViewportScale($).isPassed).toEqual(false);
    });

    it("viewport max scaling is 5 or more", () => {
        const $ = cheerio.load(samplePage2.response);
        expect(hasCorrectMetaMaxViewportScale($).isPassed).toEqual(true);
    });

    it("viewport max scaling is absent shouldn't throw an error", () => {
        const $ = cheerio.load(samplePage3.response);
        expect(hasCorrectMetaMaxViewportScale($)).toBeUndefined();
    });
});


describe('meta rules for Sample page 2', function() {
    const $ = cheerio.load(samplePage2.response);
    // it("", () => {
    //     expect(hasCorrectMetaViewportUserScale($).isPassed).toEqual(false);
    // });
});