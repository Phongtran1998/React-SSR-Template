import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import { configure as configureStore } from "./helpers/createStore";

const app = express();
app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.send({ api: "bruh" });
});
app.get("*", (req, res) => {
  const store = configureStore();
  res.send(renderer(req, store));
});

app.listen(process.env.PORT || 3000);
