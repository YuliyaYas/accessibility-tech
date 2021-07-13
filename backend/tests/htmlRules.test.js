import { hasLanguageAttribute}  from '../rules/htmlRules';
import samplePage from './samplePage.js';
import cheerio from'cheerio';


describe('html rules', function() {
    const $ = cheerio.load(samplePage.response);
    const htmlTag = $('html');
    // it("when html has language value ", () => {
    //     expect(hasLanguageAttribute(htmlTag).isPassed).toEqual(true);
    // });

    // it("html has no language value", () => {
    //     expect(hasLanguageAttribute({}).isPassed).toEqual(false);
    // });
});