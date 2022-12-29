import mongoose from 'mongoose';
import path from "path";
import db from './db';
import cors from 'cors';
import routes from './routes/index';
import express from 'express';
import {application} from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv-defaults";
const app = express();

if (process.env.NODE_ENV === "development") {
	app.use(cors());
}

app.get("/api",(req,res)=>{
    console.log("GET /api");
    res.send({message: "Hello from the server"}).status(200)
});

if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "../frontend", "build")));
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
    });
}
const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server is up on port ${port}.`);
});
