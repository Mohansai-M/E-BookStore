import express from "express";
import Books from "../bookModel.js";
import { findAll } from "../controllers/findAll.js";

const ProductRouter = express.Router();

ProductRouter.get("/",findAll);

export default ProductRouter;
