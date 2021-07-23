import { hasNoAltTagInInputWithTypeImage}  from '../rules/inputRules';
import samplePage1 from './testPages/samplePage1.js';
import samplePage3 from './testPages/samplePage3.js';
import samplePage4 from './testPages/samplePage4.js';

import cheerio from 'cheerio';

describe('Input tag with type of image has alt attribute', function() {
    it("Input tag with type of image has alt attribute in sample page 3", () => {
        const $ = cheerio.load(samplePage3.response);
        expect(hasNoAltTagInInputWithTypeImage($).isPassed).toEqual(true);
    });

    it("Input tag with type of image has no attribute in sample page 4", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasNoAltTagInInputWithTypeImage($)[0].isPassed).toEqual(false);
    });

    it("If there is no inputs with type of image it returns nothing", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasNoAltTagInInputWithTypeImage($)).toEqual([]);
    })

});
