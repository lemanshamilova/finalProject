const mongoose = require("mongoose")

const UserSchema= new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        confirmPassword:{
            type:String,
            required:true,
        },
        profileImagePath:{
            type:String,
            default:""
        },
        basket:{
            type:Array,
            default:[]
        },
        wishlist:{
            type:Array,
            default:[]
        },
        propertyList:{
            type:Array,
            default:[]
        },
        reservationList:{
            type:Array,
            default:[]
        }

    },
    {timestamps:true}
)

const User = mongoose.model("User",UserSchema)
module.exports=User