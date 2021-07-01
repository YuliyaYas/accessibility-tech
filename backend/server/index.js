const express = require("express");
const cheerio = require('cheerio');
const got = require('got');

const PORT = 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

got("https://yuliyasart.com/").then(response => {
  const $ = cheerio.load(response.body);
  console.log($('title')[0].children[0].data)
}).catch(err => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});