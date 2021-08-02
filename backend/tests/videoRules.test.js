import { hasTrackTagWithCaptionsInVideo, hasTrackTagWithDescriptionInVideo }  from '../rules/videoRules';
import samplePage1 from './testPages/samplePage1.js';
import samplePage4 from './testPages/samplePage4.js';

import cheerio from 'cheerio';

describe('Video tag has track element with [kind="captions"]', function() {
    it("Shows no errors for sample page 1", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasTrackTagWithCaptionsInVideo($)).toEqual([]);
    });

    it("Passes when video tag has at least one track tag with correct kind type sample page 4", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasTrackTagWithCaptionsInVideo($)[0].isPassed).toEqual(true);
    });

    it("Throws error when video tag misses track tag sample page 4", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasTrackTagWithCaptionsInVideo($)[1].isPassed).toEqual(false);
    });
});

describe('Video tag has track element with [kind="descriptions"]', function() {
    it("Shows no errors for sample page 1", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasTrackTagWithDescriptionInVideo($)).toEqual([]);
    });

    it("Passes when video tag has at least one track tag with correct with kind=[descriptions] sample page 4", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasTrackTagWithDescriptionInVideo($)[1].isPassed).toEqual(true);
    });

    it("Throws error when video tag misses track tag with kind=[descriptions] sample page 4", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasTrackTagWithDescriptionInVideo($)[0].isPassed).toEqual(false);
    });
});