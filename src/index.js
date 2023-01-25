import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import imageGeneratorRouter from "./routes/imageGeneratorRoute.js";
import errorHandler from "./middlewares/errorHandler.js";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/image", imageGeneratorRouter);

// Error Handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
