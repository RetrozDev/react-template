const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const router = require("./router");

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);
app.use(express.json);
app.use(cookieParser());
app.use(bodyParser.json);

app.use("/api", router);

module.exports = app;
