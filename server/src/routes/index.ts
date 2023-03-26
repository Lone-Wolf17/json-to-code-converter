import { Router } from "express";
import openai from "../config/openai-config";
import openaiService from "../services/openai.service";

const router = Router();

router.get("/api", (req, res) => {
  console.log("I dey here ooo!!!");
  res.status(200).json({ message: "Hello World!!" });
});

router.post("/convert", async (req, res) => {
  /// Destructure the JSON object
  const { value } = req.body;

  /// The chatGPT prompt

  const response = await openaiService.convertJSONToTypescript(value);

  res.json({
    message: "Successful",
    response,
  });
});

export default router;
