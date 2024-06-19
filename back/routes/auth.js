const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const User = require("../models/User");

//*configuration multer for file
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)

  }
});
const upload =multer({storage})

//*USER REGISTER

router.post("/register", upload.single("profileImage"), async (req, res) => {
  try {
    const { userName, email, password,confirmPassword } = req.body;
    const profileImage = req.file;

    if(!profileImage){
        return profileImage  =req.file
    }


    const profileImagePath=profileImage.path


    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(409).json({message:"User already exixts"})
    }

    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password,salt)

    //*create a new user

    const newUser=new User({
        userName,
        email,
        password:hashPassword,
        confirmPassword,
        profileImagePath,
    })

    //*save a new user

    await newUser.save()

    //*send a successfully message

    res.status(200).json({message:"user registered successfully",user:newUser})
  } catch (err) {
    console.log(err)
    res.status(500).json({message:"registration failed",error:err.message})
  }
});
router.post("/login",async (req,res)=>{
    try {
        const {email,password}=req.body

        const user = await User.findOne({email})
        if(!user){
            return res.status(409).json({message:"User doesn't exixt!"})
        }

        //compare password

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"invalid Credentials!"})
        }
        //JWT TOKEN
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        delete user.password

        res.status(200).json({token,user})


    } catch (err) {
        console.log(err)
        res.status(500).json({error:err.message})
    }
})
module.exports=router