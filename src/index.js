import express from "express";
import renderer from "./helpers/renderer";
import favicon from "serve-favicon";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(process.env.PORT || 3000);
