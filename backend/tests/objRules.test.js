import samplePage1 from './testPages/samplePage1.js';
import samplePage3 from './testPages/samplePage3.js';
import samplePage4 from './testPages/samplePage4.js';
import { hasAccessibleNameInObjects } from '../rules/objRules.js';
import cheerio from 'cheerio';

describe('Object tag rules', function() {
    it("displays the correct error if object tag has no alt text", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasAccessibleNameInObjects($)[0].isPassed).toEqual(false);
    });

    it("object has alt attribute", () => {
        const $ = cheerio.load(samplePage3.response);
        expect(hasAccessibleNameInObjects($)[0].isPassed).toEqual(true);
    });

    // it("passes all tests if there is no empty buttons", () => {
    //     const $ = cheerio.load(samplePage1.response);
    //     expect(hasAccessibleNameInObjects($).isPassed).toBeUndefined()

    // });
});
