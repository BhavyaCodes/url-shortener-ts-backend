import Url from "./model";
import { RequestHandler } from "express";
import { IUrl } from "./model";

export const create: RequestHandler = async (req, res, next) => {
  const url = new Url({
    full: req.body.url,
  });
  const savedUrl: IUrl = await url.save();
  res.json({ savedUrl });
  // console.log(req.body);
};
