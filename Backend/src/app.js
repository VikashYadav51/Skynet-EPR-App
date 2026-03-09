import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./database/database.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config({ });



// cors options
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// data parsing
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser(process.env.COOKIE_SECRET));

 
export default app;
