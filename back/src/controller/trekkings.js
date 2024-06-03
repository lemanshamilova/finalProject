const Trekkings = require("../models/model");

const getAllData = async (req, res) => {
  const trekkings = await Trekkings.find({});
  res.send(trekkings);
};

const postData = async (req, res) => {
  const obj = req.body;
  const newData = new Trekkings(obj);
  newData.save();
  res.send("succes");
};
const getById = async (req, res) => {
  const getElem = await Trekkings.find({ _id: req.params.id });
  res.send(getElem);
};

const deleteById = async (req, res) => {
  await Trekkings.findOneAndDelete({ _id: req.params.id });
  res.send("deleted!");
};

const patchById = async (req, res) => {
  const newData = await Trekkings.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.send(newData);
};

const putById = async (req, res) => {
  const newData = await Trekkings.findOneAndReplace(
    { _id: req.params.id },
    req.body
  );
  res.send(newData);
};

module.exports={getAllData,postData,getById,patchById,putById,deleteById}