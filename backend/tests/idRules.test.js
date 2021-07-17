import { hasDuplicateOrEmptyId } from '../rules/idRules';
import samplePage1 from './testPages/samplePage1.js';
import samplePage3 from './testPages/samplePage3.js';

import cheerio from 'cheerio';

describe('id rules for Sample page 3', function () {
    const $ = cheerio.load(samplePage3.response);
    it("some ids have duplicates", () => {
        expect(hasDuplicateOrEmptyId($)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ "category": "id_rule", "description": "Your elements have a duplicate id #logo", "isPassed": false, "name": "Id duplicates and/or empty", "selector": null, "tag": "id", "tip": "Id should be a unique value. Please rename the id attribute to a unique id" })
            ])
        )
    });

    it("some ids have no value", () => {
        expect(hasDuplicateOrEmptyId($)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ description: `Your elements have a duplicate id #logo` })
            ])
        )
    });
});

describe('id rules for Sample page 1', function () {
    const $ = cheerio.load(samplePage1.response);
    it("Ids are not duplicate or empty", () => {
        expect(hasDuplicateOrEmptyId($).length).toEqual(0);
    });
});
