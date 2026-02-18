import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";

// POST /api/products — добавить продукт
export const createProduct = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403);
    throw new Error("Not authorized as admin");
  }

  const {
    name,
    volume,
    price,
    currency,
    images,
    taste,
    rating,
    sale,
    description,
    category,
    countInStock,
  } = req.body;

  const product = new Product({
    name,
    volume,
    price,
    currency,
    images: images || [],
    taste: taste || ["original"],
    rating: rating || 0,
    sale: sale || 0,
    description: description || "",
    category: category || "General",
    countInStock: countInStock || 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// GET /api/products — получить все продукты
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// GET /api/products/:id — получить продукт по ID
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Продукт не найден");
  }
  res.json(product);
});
