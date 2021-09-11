const { response } = require("express");
const {Product} = require("../models/product.model");

module.exports.index = (req,res) => {
  res.json({message:"Hello World"});
}

module.exports.createProduct = (req,res) => {
  const {title, price, description} = req.body;
  console.log(req.body);
  Product.create({
    title,
    price,
    description
  })
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.getAllProducts = (req,res) => {
  Product.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err));
}

module.exports.getProductById = (req, res) => {
  Product.findOne({_id:req.params.id})
    .then(product => res.json(product))
    .catch(err => response.json(err))
}