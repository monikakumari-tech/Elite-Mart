import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET
  );
};

const loginUser = async (req, res) => {
  try{
    const { email, password } = req.body; 
    const user= await userModel.findOne({email})
    if(!user){
     return  res.json(
      {
        success:false,
        message:"user does not exist"
      }
     )
    }
    const isMatch= await bcrypt.compare(password,user.password)
    if(isMatch){
      const token= createToken(user._id)
      res.json(
        {
          success:true,
          token
        }
      )
    }else{
      res.json(
        {
          success:false,
          message:"invalid credentials"
        }
      )
    }
}catch(error){
    console.log(error)
    res.json({
      success:false,
      message: error.message
    })
}

};
const registerUser = async (req, res) => {
  // res.send({message:"register api is working"})
  try {
    const { name, email, password } = req.body;   //data will taken from cliient

    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "user already exist" });
    }
    // validation email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }
    // hashing user password
    const salt= await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(password,salt)

    // create the user
    const newUser= new userModel({
      name,
      email,
      password: hashPassword
    })

    const user= await newUser.save()
    const token= createToken(user._id)
    res.json({
      success:true,
      token
    })
  } catch (error) {
    console.log(error)
    res.json({
      success:false,
      message:error.message
    })
  }
};
const adminLogin = async (req, res) => {
  try{
     const {email, password}= req.body
     console.log(req.body)
     if(process.env.ADMIN_EMAIL==email && process.env.ADMIN_PASSWORD==password){
       const token= jwt.sign(email+password,process.env.JWT_SECRET)
       console.log(email+password)
      
       res.json({
        success: true,
        token
       })
     }else{
       res.json({
        success:false,
        message: "Invalid credentials"
       })
     }
  }catch(error){
    res.json({
      success: false,
      message: error.message
    })
  }
};

export { loginUser, registerUser, adminLogin };

