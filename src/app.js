import express from "express";
import cors from "cors";
import router from "./routes/noteRoutes.js";
import corsOptions from "./config/cors.js";
import "dotenv/config";

const app = express();

//Cors
app.use(cors(corsOptions));
//Read data from forms
app.use(express.json());
//Middleware that parses incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/api/notes", router);

export default app;