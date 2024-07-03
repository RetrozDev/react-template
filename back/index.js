

require("dotenv").config();
require("dotenv").config({ path: "../front/.env" });
const app = require("./src/app.js")


const port = process.env.APP_PORT;
const backendUrl = process.env.VITE_BACKEND_URL;

app
  .listen(port, () => {
    console.info(`Backend launched on ${backendUrl}`);
  })
  .on("error", (err) => {
    console.error("Error :", err.message);
  });
