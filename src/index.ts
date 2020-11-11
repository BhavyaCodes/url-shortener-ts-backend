require("dotenv").config();
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";

import express, { Request, Response, NextFunction, json } from "express";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL!, "http://localhost:3000"],
  })
);
app.use(json());
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ hi: "There" });
});

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

mongoose
  .connect(process.env.DB_URL as string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
