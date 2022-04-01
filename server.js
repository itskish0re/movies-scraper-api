import express from "express";
import {getById, getTop250, getToptv250} from "./scraper.js";
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/title/:titleId", (req, res) => {
  getById(req.params.titleId)
    .then((response) => res.json(response));
});

app.get("/top250", (req, res) => {
  getTop250()
    .then((response) => res.json(response));
});

app.get("/toptv250", (req, res) => {
  getToptv250()
    .then((response) => res.json(response));
});


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));