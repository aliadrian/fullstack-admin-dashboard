import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    pricse: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", ProductSchema);
export default Product;
