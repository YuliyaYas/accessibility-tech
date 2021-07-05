const express = require("express");
const cheerio = require('cheerio');
const got = require('got');
const fs = require('fs');
const puppeteer = require('puppeteer');

const PORT = 3001;
const app = express();

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

app.use(express.json())

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post('/page-scan', (req, res) => {
  const body = req.body;
  puppeteer.launch({ headless: true })
    .then(async (browser) => {
      let page = await browser.newPage()
      page.setViewport({ width: 1366, height: 768 });
      await page.goto(body.url);
        body.url && page.goto(body.url, { waitUntil: 'domcontentloaded' })
        .then(() => {
          const content = page.content();
          content
            .then((response) => {
              const $ = cheerio.load(response);
              let allEls = $('a');
              allEls.each((i, el) => console.log('el-------_>', i, "-----_>", el))
              // console.log(JSON.stringify(allEls, getCircularReplacer()))
              //   fs.writeFile("output.json",   JSON.stringify(allEls, getCircularReplacer()), 'utf8', function (err) {
              //     if (err) {
              //         console.log("An error occured while writing JSON Object to File.");
              //         return console.log(err);
              //     }

              //     console.log("JSON file has been saved.");
              // });
              res.send({ myResponse: 'YAY'})

            })
        })
    })
    .catch((err) => {
      console.log(" CAUGHT WITH AN ERROR ", err);
      res.status(400).send(err);
    })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});