import { hasAltAttrInImg } from '../rules/imgRules';
import samplePage1 from './testPages/samplePage1.js';
import samplePage3 from './testPages/samplePage3.js';

import cheerio from 'cheerio';

describe('img rules for Sample page 1', function () {
    const $ = cheerio.load(samplePage1.response);
    it("All images have alt attribute", () => {
        expect(hasAltAttrInImg($)[0].isPassed).toEqual(true);
    });
});


describe('img rules for Sample page 3', function () {
    const $ = cheerio.load(samplePage3.response);
    it("some images have no alt attribute", () => {
        expect(hasAltAttrInImg($).length).toEqual(2);
    });

    it("it displays the appropriate selector", () => {
        expect(hasAltAttrInImg($)[0]).toMatchObject({ "selector": "#logo" });
        expect(hasAltAttrInImg($)[1]).toMatchObject({ "selector": ".stork-img" })
    });

});