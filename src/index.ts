import express, {
  RequestHandler,
  Request,
  Response,
  NextFunction,
  json,
} from "express";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(json());
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ hi: "There" });
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
