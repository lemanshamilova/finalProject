const productRouter = require('express').Router()
const Products=require("../controller/products.js")

productRouter.get("/products", Products.getAllProducts)
productRouter.get("/products/:id", Products.getById)
productRouter.post("/products", Products.postProducts)
productRouter.delete("/products/:id", Products.deleteById)
productRouter.patch("/products/:id", Products.patchById)
productRouter.put("/products/:id", Products.putById)

module.exports=productRouter


