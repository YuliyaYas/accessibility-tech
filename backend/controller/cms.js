export const getBlogs = (req, res) => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/CONTENTFUL_SPACE`, {
        method: "POST",
        headers: {
          Authorization: `Bearer [CONTENTFUL_TOKEN]`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query {
      postCollection {
        items {
          title
        }
      }
    }`,
        }),
       })
        .then(response => response.json())
        .then(json => {
          const { data } = json;
          console.log(data.postCollection.items);
          // [ { title: "Hello world"} ]
        });
    // const body = req.body;
    // puppeteer.launch({ headless: true })
    //   .then(async (browser) => {
    //     let page = await browser.newPage()
        
    //     page.setViewport({ width: 1366, height: 768 });
    //     await page.goto(body.url);
    //     const image = await page.screenshot();
  
    //       body.url && page.goto(body.url, { waitUntil: 'domcontentloaded' })
    //       .then(() => {
    //         const content = page.content();
    //         content
    //           .then((response) => {
    //             scanPage(response, res, image);
    //           })
    //       })
    //   })
    //   .catch((err) => {
    //     console.log(" CAUGHT WITH AN ERROR ", err);
    //     res.status(400).send(err);
    //   })
  };

