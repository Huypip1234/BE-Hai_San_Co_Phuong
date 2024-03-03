import express from "express";
import * as productController from "../controller/productController.js";

const router = express.Router();

router.get("/all", productController.getAllProduct);
router.post("/add", productController.addProduct);
router.patch("/edit", productController.editProduct);
router.get("/detail/:id", productController.getProductDetail);
router.delete("/delete/:id", productController.deleteProduct);

export default router;
