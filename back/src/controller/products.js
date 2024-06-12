const Products = require("../models/productModel.js");

const getAllProducts = async (req, res) => {
  const products = await Products.find({});
  res.send(products);
};

const postProducts = async (req, res) => {
  const obj = req.body;
  const newData = new Products(obj);
  newData.save();
  res.send("succes");
};
const getById = async (req, res) => {
  const getElem = await Products.findById({ _id: req.params.id });
  res.send(getElem);
};

const deleteById = async (req, res) => {
  await Products.findOneAndDelete({ _id: req.params.id });
  res.send("deleted!");
};

const patchById = async (req, res) => {
  const newData = await Products.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.send(newData);
};

const putById = async (req, res) => {
  const newData = await Products.findOneAndReplace(
    { _id: req.params.id },
    req.body
  );
  res.send(newData);
};

module.exports={getAllProducts,postProducts,getById,patchById,putById,deleteById}