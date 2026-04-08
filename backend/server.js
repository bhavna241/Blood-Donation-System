import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import donorRoutes from "./routes/donorRoutes.js";
import cors from "cors";


dotenv.config();

const app = express();

app.use(cors());

// IMPORTANT 👇
app.use(express.json());

// ROUTE 👇 (this is the main thing)
app.use("/api/donors", donorRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/bloodDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});