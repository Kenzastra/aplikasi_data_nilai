import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import Router from "./routes/route.js";
dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
} catch (error) {
    console.log(error);
}

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use(Router);

app.listen(process.env.APP_PORT, ()=> console.log('Server up and running'))