import openai from "../config/openai-config";
import { AcceptedLanguages } from "../constants/enums";
import HttpStatusCodes from "../constants/HttpStatusCodes";
import ApiError from "../utils/ApiError";

export const Errors = {
  NoContent: "Error generating response",
};

/**
 * Different languages uses different constructs to declare types
 * eg, Classes are not available in Rust while structs are not availble in Java
 */
type AcceptedTypeConstructs = "interfaces" | "classes" | "structs";

export const convertJSONToTypescript = async (
  jsonInput: string,
  language: AcceptedLanguages
) => {
  const typeConstruct = mapLanguageToTypeConstruct(language);
  const prompt = `Convert the JSON object into ${language} ${typeConstruct} \n ${jsonInput} Please, I need the only the code, I don't need any explanations.`;

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

function mapLanguageToTypeConstruct(
  language: AcceptedLanguages
): AcceptedTypeConstructs {
  switch (language) {
    case AcceptedLanguages.Rust:
    case AcceptedLanguages.C:
    case AcceptedLanguages.Go:
      return "structs";

    case AcceptedLanguages.Typescript:
      return "interfaces";

    default:
      return "classes";
  }
}

export default {
  convertJSONToTypescript,
};
