import express from "express";
import Books from "../bookModel.js";
import { findAll } from "../controllers/findAll.js";
import { findOne } from "../controllers/findOne.js";
const ProductRouter = express.Router();

ProductRouter.get("/",findAll);

ProductRouter.get("/:isbn",findOne);

export default ProductRouter;
