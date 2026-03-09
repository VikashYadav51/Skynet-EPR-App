import app from "./app.js";
import dotenv from "dotenv";
import pool from "./database/database.js";

dotenv.config({ });

// console.log(`DB_PASSWORD:`, process.env.DB_PASSWORD)

app.get("/", async(req, res) =>{
    console.log("Hello World"); 
    try {
        const result = await pool.query("SELECT current_database()");
        res.json(result.rows[0].current_database);
        console.log(`Current database: ${result.rows[0].current_database}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})


const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
