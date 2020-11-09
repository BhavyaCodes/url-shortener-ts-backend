import Url from "./model";
import { RequestHandler } from "express";
import { IUrl } from "./model";

export const create: RequestHandler = async (req, res, next) => {
  const existing = await Url.findOne({ full: req.body.url }).lean();
  if (existing) {
    res.json(existing);
    return;
  }

  const url = new Url({
    full: req.body.url,
  });
  const savedUrl: IUrl = await url.save();
  res.json({ url: savedUrl });
};
