import connectDB from "../database/database.js";
import knex from "knex";

const User = knex(connectDB).table("user");
