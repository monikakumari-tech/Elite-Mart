import jwt from "jsonwebtoken"

const authUser = async (req, res, next)=>{
 const {token}= req.headers;
if(!token){
  return res.json({
    success: false,
    message: "user not authorise, login again!!"
  })
}
try {
    const tokenDecode= jwt.verify(token, process.env.JWT_SECRET)
    console.log(tokenDecode)
    
    req.body.userId=tokenDecode.id

    next()
} catch (error) {
    res.json({
        success:false,
        message:error.message
    })
}
}


export default authUser