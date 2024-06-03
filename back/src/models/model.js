const mongoose = require('mongoose');

const schema=mongoose.Schema(
    {
        image:String,
        title:String,
        description:String,
        price:Number

    },
    {
        collection:"Trekkings",
        timestamp: true
    }



)

const Trekkings=mongoose.model("Trekkings",schema)
module.exports=Trekkings