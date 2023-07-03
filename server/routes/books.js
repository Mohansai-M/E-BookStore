import express from "express";
import Books from "../bookModel.js";
import bodyParser from "body-parser";
import { findAll } from "../controllers/findAll.js";
import { findOne } from "../controllers/findOne.js";
import { addBook } from "../controllers/addBook.js";
import middleware from "./middleware.js";
import multer from "multer";
const ProductRouter = express.Router();

ProductRouter.get("/",findAll);

ProductRouter.get("/:isbn",findOne);


ProductRouter.post("/add", middleware.single("bookImage"), addBook);

export default ProductRouter;
