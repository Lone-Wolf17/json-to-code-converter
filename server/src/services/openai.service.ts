import openai from "../config/openai-config";
import HttpStatusCodes from "../constants/HttpStatusCodes";
import ApiError from "../utils/ApiError";

export const Errors = {
  NoContent: "Error generating response",
};

export const convertJSONToTypescript = async (jsonValue: string) => {
  const prompt = `Convert the JSON object into Typescript Interfaces \n ${jsonValue} Please, I need the only the code, I don't need any explanations.`;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  const content = await completion.data.choices[0].message?.content;

  if (!content) {
    throw new ApiError(HttpStatusCodes.INTERNAL_SERVER_ERROR, Errors.NoContent);
  }

  return content;
};

export default {
  convertJSONToTypescript,
};
