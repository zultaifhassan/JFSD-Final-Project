// models/product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageUrl: {
    type: String,
  }
});

const Product = mongoose.model("Product", productSchema);
export default Product;
