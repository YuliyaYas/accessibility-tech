import samplePage1 from './testPages/samplePage1.js';
import samplePage4 from './testPages/samplePage4.js';
import { hasAccessibleNameInBtns } from '../rules/btnRules.js';
import cheerio from'cheerio';

describe('button rules for Sample page 1 and 4 - buttons have accessible name', function() {
    it("displays the correct error if button has no text", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasAccessibleNameInBtns($)[0].isPassed).toEqual(false);
    });

    it("detects the correct selector for the button that has no text", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasAccessibleNameInBtns($)[0].selector).toEqual('.embla__button embla__button--prev');
    });

    it("passes all tests if there is no empty buttons", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasAccessibleNameInBtns($)).toEqual([]);
    });
});
