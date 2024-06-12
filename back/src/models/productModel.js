const mongoose = require('mongoose');

const productSchema=mongoose.Schema(
    {
        image:String,
        title:String,
        price:Number

    },
    {
        collection:"Products",
        timestamp: true
    }



)

const Products=mongoose.model("Products",productSchema)
module.exports=Products