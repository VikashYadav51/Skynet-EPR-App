import  pkg  from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config({});

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});


// Event handler for successful connection
pool.on("connect", ()=>{
    console.log("Connected to database");
});

// Error handling 
pool.on("error", (err)=>{
    console.log("Error connecting to database", err);
});

export default pool;
