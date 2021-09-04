import { getPage }  from '../controller/scraper.js';
import express from 'express'
import cors from 'cors';
import { getBlogs } from '../controller/cms.js';

const PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!!" });
});

app.post('/page-scan', (req, res) => {
  getPage(req, res)
});

app.get('/blogs', (req, res) =>{
  getBlogs(req, res);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

