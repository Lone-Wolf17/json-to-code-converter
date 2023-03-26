import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "morgan";

import EnvVars from "./constants/EnvVars";
import Routes from "./routes";

const app = express();

const PORT = EnvVars.Port;

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(logger("dev"))
  .use(cors());

app.use(Routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
