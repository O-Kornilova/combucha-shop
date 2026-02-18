import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";
import { protect } from "../middleware/authMiddleware.js";
import {
  createProduct,
  getProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

// POST /api/products — добавить продукт (только админ)
router.post("/", protect, createProduct);

// GET /api/products — получить все продукты
router.get("/", getProducts);

// GET /api/products/:id — получить продукт по ID
router.get("/:id", getProductById);

// PUT /api/products/:id — обновить продукт
router.put(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    Object.assign(product, req.body);
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  })
);

// DELETE /api/products/:id — удалить продукт
router.delete(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    await product.deleteOne();
    res.json({ message: "Product removed" });
  })
);

export default router;
