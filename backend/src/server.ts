import dotenv from "dotenv";
dotenv.config();

import { dbConnect } from "./configs/database.config";
dbConnect();

import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
