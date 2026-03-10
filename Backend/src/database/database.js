import knex from "knex";
import dotenv from "dotenv";

dotenv.config({});

const connectDB = knex({
  client : "pg",
  connection : {
    connectionString: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
  },

  pool : {
    min : 2,
    max : 10
  },

  migrations : {
    tableName : "knex_migrations",
    directory : "./migrations",
  },
  
})

export default connectDB;