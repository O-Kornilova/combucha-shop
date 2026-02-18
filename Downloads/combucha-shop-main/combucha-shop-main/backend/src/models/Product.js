import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    volume: {
      type: Number,
      required: true,
      default: 0.5,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "UAH",
    },
    images: {
      type: [
        {
          url: { type: String, required: true },
          isMain: { type: Boolean, default: false },
        },
      ],
      default: [],
    },
    taste: {
      type: [String],
      default: ["original"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    sale: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "General",
    },
    countInStock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
