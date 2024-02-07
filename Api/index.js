import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb Is Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running on port 8000!!!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);