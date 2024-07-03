import dotenv from "dotenv";

import app from "./src/app.js";

dotenv.config();
dotenv.config({ path: "../front/.env" });
const port = process.env.APP_PORT;
const backendUrl = process.env.VITE_BACKEND_URL;

app
  .listen(port, () => {
    console.info(`Backend launched on ${backendUrl}`);
  })
  .on("error", (err) => {
    console.error("Error :", err.message);
  });
