import { Router } from "express";
import { validateZodSchema } from "../middlewares/utils.middleware";
import { convertJsonSchema } from "../schemas/convert-endpoint.schema";
import openaiService from "../services/openai.service";

const router = Router();

router.get("/api", (req, res) => {
  console.log("I dey here ooo!!!");
  res.status(200).json({ message: "Hello World!!" });
});

router.post(
  "/convert",
  validateZodSchema(convertJsonSchema),
  async (req, res) => {
    /// Destructure the JSON object
    const { json_input, language} = req.body;

    /// The chatGPT prompt

    const response = await openaiService.convertJSONToTypescript(json_input, language);

    res.json({
      message: "Successful",
      response,
    });
  }
);

export default router;
