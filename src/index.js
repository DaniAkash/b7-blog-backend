require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const postsRouter = require("./routers/postsRouter");
const authorRouter = require("./routers/authorRouter");
const adminRouter = require("./routers/adminRouter");

const app = express();

app.set("trust proxy", 1); // trust first proxy
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Blog Backend running!");
});

app.use("/posts", postsRouter);
app.use("/authors", authorRouter);
app.use("/admin", adminRouter);

const server = app.listen(8080, () => {
  console.log("Server running on port: " + server.address().port);
});
