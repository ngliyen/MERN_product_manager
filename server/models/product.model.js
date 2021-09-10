const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must be at least 3 characters"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be greater than or equal to $0"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [6, "Description must be at least 6 characters"]
  }

}, {timestamps:true})

module.exports.Product = mongoose.model("Product", ProductSchema);