import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const configiration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAi = new OpenAIApi(configiration);

const generateImage = async (desc) => {
  try {
    const aiResponse = await openAi.createImage({
      prompt: desc,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const img = aiResponse.data.data[0].b64_json;
    return img;
  } catch (e) {
    let message = "";
    if (e.message === "Request failed with status code 400") {
      message = "Inappropriate Description!!";
    }
    throw new Error(message || "Internal Server Error");
  }
};

export default {
  generateImage,
};
