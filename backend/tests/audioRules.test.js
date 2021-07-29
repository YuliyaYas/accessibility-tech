import { hasTrackTagInAudio}  from '../rules/audioRules';
import samplePage1 from './testPages/samplePage1.js';
import samplePage4 from './testPages/samplePage4.js';

import cheerio from 'cheerio';

describe('Audio tag has track element with [kind="captions"]', function() {
    it("Shows no errors for sample page 1", () => {
        const $ = cheerio.load(samplePage1.response);
        expect(hasTrackTagInAudio($)).toEqual([]);
    });

    it("Throws error when audio tag misses track tag sample page 4", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasTrackTagInAudio($)[0].isPassed).toEqual(false);
    });

    it("Passes when audio tag has track tag with correct kind type sample page 4", () => {
        const $ = cheerio.load(samplePage4.response);
        expect(hasTrackTagInAudio($)[1].isPassed).toEqual(true);
    });
});