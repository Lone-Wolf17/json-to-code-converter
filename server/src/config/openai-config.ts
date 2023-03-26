import { Configuration, OpenAIApi } from "openai";
import EnvVars from "../constants/EnvVars";

const configuration = new Configuration({
  apiKey: EnvVars.OpenAIAPIKey,
});

const openai = new OpenAIApi(configuration);

export default openai;
