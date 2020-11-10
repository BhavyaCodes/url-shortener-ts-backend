import Url from "./model";
import { RequestHandler } from "express";
import { IUrl } from "./model";

export const create: RequestHandler = async (req, res, next) => {
  const existing = await Url.findOne({ full: req.body.url }).lean();
  if (existing) {
    res.json({ url: existing });
    return;
  }

  const url = new Url({
    full: req.body.url,
  });
  const savedUrl: IUrl = await url.save();
  res.json({ url: savedUrl });
};

export const redirect: RequestHandler = async (req, res, next) => {
  const url = await Url.findOne({
    short: req.params.shortUrl,
  }).lean();
  if (url) {
    res.status(200).json(url.full);
    return;
  }
  res.status(404).json({ error: "url not found" });
};
