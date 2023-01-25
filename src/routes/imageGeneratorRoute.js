import express from "express";
import imageService from "../services/imageService.js";
const imageGeneratorRouter = express.Router();

imageGeneratorRouter.post("/generate", async (req, res, next) => {
  console.log(req.body);
  try {
    const img = await imageService.generateImage(req.body.desc);
    res.send(img);
  } catch (err) {
    next(err);
  }
});

export default imageGeneratorRouter;
