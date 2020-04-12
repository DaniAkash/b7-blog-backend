const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("trust proxy", 1); // trust first proxy
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Blog Backend running!");
});

const server = app.listen(8080, () => {
  console.log("Server running on port: " + server.address().port);
});
