import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import router from "./router";

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
export default app;
