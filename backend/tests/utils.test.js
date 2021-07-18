import { getSelector } from '../utils.js';
import cheerio from'cheerio';

const hasId = "<!DOCTYPE html><html><fakeelement><meta name=\"viewport\" content=\"width=device-width,initial-scale=1, user-scalable=yes,shrink-to-fit=no\"></fakeelement<title>Portfolio</title><link href=\"/static/css/main.baa4d6fa.chunk.css\" rel=\"stylesheet\"><body><div id=\"top-div\"><div class=\"middle-div\"><div><div><img id=\"test\"/></div></div></div></div></body></html>";

const hasClass = "<!DOCTYPE html><html><fakeelement><meta name=\"viewport\" content=\"width=device-width,initial-scale=1, user-scalable=yes,shrink-to-fit=no\"></fakeelement<title>Portfolio</title><link href=\"/static/css/main.baa4d6fa.chunk.css\" rel=\"stylesheet\"><body><div id=\"top-div\"><div class=\"middle-div\"><div><div><img class=\"test\"/></div></div></div></div></body></html>";

const hasParentId = "<!DOCTYPE html><html><fakeelement><meta name=\"viewport\" content=\"width=device-width,initial-scale=1, user-scalable=yes,shrink-to-fit=no\"></fakeelement<title>Portfolio</title><link href=\"/static/css/main.baa4d6fa.chunk.css\" rel=\"stylesheet\"><body><div id=\"top-div\"><div class=\"middle-div\"><div><div id=\"test\"><img /></div></div></div></div></body></html>";

const hasParentClass = "<!DOCTYPE html><html><fakeelement><meta name=\"viewport\" content=\"width=device-width,initial-scale=1, user-scalable=yes,shrink-to-fit=no\"></fakeelement<title>Portfolio</title><link href=\"/static/css/main.baa4d6fa.chunk.css\" rel=\"stylesheet\"><body><div id=\"top-div\"><div class=\"middle-div\"><div><div class=\"test\"><img /></div></div></div></div></body></html>";

const hasNoParentId = "<!DOCTYPE html><html><fakeelement><meta name=\"viewport\" content=\"width=device-width,initial-scale=1, user-scalable=yes,shrink-to-fit=no\"></fakeelement<title>Portfolio</title><link href=\"/static/css/main.baa4d6fa.chunk.css\" rel=\"stylesheet\"><body><div id=\"test\"><h2><div><div><img /></h2></div></div></div></body></html>"

const hasNoIdorClassAtAll = "<!DOCTYPE html><html><fakeelement><meta name=\"viewport\" content=\"width=device-width,initial-scale=1, user-scalable=yes,shrink-to-fit=no\"></fakeelement<title>Portfolio</title><link href=\"/static/css/main.baa4d6fa.chunk.css\" rel=\"stylesheet\"><body><div><h2><div><div><img /></h2></div></div></div></body></html>"

describe('id rules', function () {
    it("if element has an id - it returns the id selector", () => {
        const $ = cheerio.load(hasId);
        const imgs = $('img');
        expect(getSelector(imgs[0])).toEqual('#test');
    });

    it("if element has a class - it returns the class selector", () => {
        const $ = cheerio.load(hasClass);
        const imgs = $('img');
        expect(getSelector(imgs[0])).toEqual('.test');
    });

    it("if parent element has an id - it returns the correct selector", () => {
        const $ = cheerio.load(hasParentId);
        const imgs = $('img');
        expect(getSelector(imgs[0])).toEqual('#test > img');
    });

    it("if parent element has a class - it returns the correct selector", () => {
        const $ = cheerio.load(hasParentClass);
        const imgs = $('img');
        expect(getSelector(imgs[0])).toEqual('.test > img');
    });

    it("if element has no parent id or class - it returns the correct selector", () => {
        const $ = cheerio.load(hasNoParentId);
        const imgs = $('img');
        expect(getSelector(imgs[0])).toEqual('#test > h2 > div > div > img');
    });

    it("if element has no parent id or class at all up tp body - it returns the correct selector", () => {
        const $ = cheerio.load(hasNoIdorClassAtAll);
        const imgs = $('img');
        expect(getSelector(imgs[0])).toEqual('html > body > fakeelement > div > h2 > div > div > img');
    });
});