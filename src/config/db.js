import pg from "pg";
import "dotenv/config";

const db = new pg.Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

db.connect()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err.stack));

export default db;