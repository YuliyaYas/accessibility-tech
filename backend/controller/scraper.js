import cheerio from'cheerio';
import fs from 'fs';
import puppeteer from 'puppeteer';
import samplePage from '../tests/testPages/samplePage.js'
import samplePage1 from '../tests/testPages/samplePage1.js'
import { hasLanguageAttribute } from '../rules/htmlRules.js';
import { hasCorrectMetaMaxViewportScale, hasCorrectMetaViewportUserScale } from '../rules/metaRules.js';

// export const getPage = (req, res) => {
//   const body = req.body;
//   puppeteer.launch({ headless: true })
//     .then(async (browser) => {
//       let page = await browser.newPage()
//       page.setViewport({ width: 1366, height: 768 });
//       await page.goto(body.url);
//         body.url && page.goto(body.url, { waitUntil: 'domcontentloaded' })
//         .then(() => {
//           const content = page.content();
//           content
//             .then((response) => {
//               scanPage(response, res);
//             })
//         })
//     })
//     .catch((err) => {
//       console.log(" CAUGHT WITH AN ERROR ", err);
//       res.status(400).send(err);
//     })
// };

export const getPage = (req, res) => {
  scanPage(samplePage.response, res);

};

export const scanPage = (response, res) => {
  const $ = cheerio.load(response);
  // const metaTags = $('meta');
  // const pTags = $('p');
  let result = [
    hasLanguageAttribute($),
    hasCorrectMetaMaxViewportScale($),
    hasCorrectMetaViewportUserScale($)
  ].filter(function (e) {return e != null;});
    // allEls.each((i, el) => console.log('el-------_>', i, "-----_>", el))
  //   fs.writeFile("output.json",   JSON.stringify(response), 'utf8', function (err) {
  //     if (err) {
  //         console.log("An error occured while writing JSON Object to File.");
  //         return console.log(err);
  //     }
  //     console.log("JSON file has been saved.");
  // });
// console.log(result)
  res.send({ result})

}
