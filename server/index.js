import express from "express";
import mongoose from "mongoose";
import router from "./routes/books.js";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";;


import { fileURLToPath } from "url";
import bodyParser from "body-parser";

/*CONFIGURATIONS*/

//const __filename = fileURLToPath(import.meta.url);

const app = express();


mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/Books");

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});


app.get('/',(req,res) =>
{
res.status(200).json({ message: "Hello from Server!",app:'Check'});
})

app.use(cors());
app.use(express.json());

app.use("/books", router);


const port = 4000;

app.listen(port, ()=>
{
    console.log("App running on port "+port);
});

