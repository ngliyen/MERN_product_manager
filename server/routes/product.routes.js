const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  // app.get("/api", ProductController.index);
  app.post("/api/products", ProductController.createProduct);
  
  //READ
  app.get("/api/products", ProductController.getAllProducts);
  app.get("/api/products/:id", ProductController.getProductById);

  //UPDATE
  app.put("/api/products/:id", ProductController.updateProduct);

  //DELETE
  app.delete("/api/products/:id", ProductController.deleteProductById);
}