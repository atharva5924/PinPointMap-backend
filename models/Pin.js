import mongoose, { Schema } from "mongoose";

const PinSchema = new Schema({
  lat: Number,
  lng: Number,
  remark: String,
  address: String,
});

export const Pin = mongoose.model("PinS", PinSchema);
