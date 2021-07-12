import { getPage }  from '../controller/scraper.js';
import express from 'express'

const PORT = 3001;
const app = express();

app.use(express.json())

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post('/page-scan', (req, res) => {
  getPage(req, res)
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});