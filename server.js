import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Pin } from "./models/Pin.js";
import connectDB from "./db/index.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/pins", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.json(pins);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch pins" });
  }
});

app.post("/api/pins", async (req, res) => {
  const { lat, lng, remark, address } = req.body;
  try {
    const newPin = new Pin({ lat, lng, remark, address });
    await newPin.save();
    res.status(201).json(newPin);
  } catch (err) {
    res.status(500).json({ error: "Failed to save pin" });
  }
});

app.delete("/api/pins/:id", async (req, res) => {
  try {
    await Pin.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete pin" });
  }
});

app.put("/api/pins/:id", async (req, res) => {
  try {
    const updatedPin = await Pin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedPin);
  } catch (err) {
    res.status(500).json({ error: "Failed to update pin" });
  }
});

// Connect to MongoDB
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
