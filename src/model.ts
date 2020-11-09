import mongoose, { Schema, Document } from "mongoose";
import shortid from "shortid";

export interface IUrl extends Document {
  full: string;
  short: string;
}

export const UrlSchema = new Schema({
  full: {
    required: true,
    type: String,
  },
  short: {
    required: true,
    type: String,
    default: shortid.generate,
  },
});

const Url = mongoose.model<IUrl>("Url", UrlSchema);
export default Url;
