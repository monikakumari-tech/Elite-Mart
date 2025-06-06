import {v2 as cloudinary} from "cloudinary";
import productModel from "../models/productModel.js";
// add product admin
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
  
    const images= [image1,image2,image3,image4].filter((item)=>item!==undefined)
    console.log(images)

    const imagesURL= await Promise.all(
        images.map(async (item)=>{
            let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
            return result.secure_url
        })
    )
    console.log(imagesURL)
    
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller
    );
   
    // save data on MongoDB
    const productData= { 
       name,
      description,
      price:Number(price),
      image:imagesURL,
      date:Date.now(),
      category,
      subCategory,
      sizes:JSON.parse(sizes),
      bestSeller:bestSeller==="true"?true:false
    }

    const product= new productModel(productData)
    await product.save()
    res.json({
      success: true,
      message: "product added"
    })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// list product admin 
const listProducts = async (req, res) => {
  try{
      const products= await productModel.find({})
      res.json({
        success:true,
        products
      })
  }catch(error){
    res.json({success: false, message: error.message})
  }
};
// remove product admin
const removeProduct = async (req, res) => {
  try{
         await productModel.findByIdAndDelete(req.body.id)
         res.json({success: true, message:"product remove"})
  }catch(error){
    res.json({success: false, message: error.message})
  }
};
// single product
const singleProduct = async (req, res) => {
  try{
     const {productId}= req.body
      const product= await productModel.findById(productId)
       res.json({success: true, 
        product
  })
  }catch(error){
    res.json({success: false, message: error.message})
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };

