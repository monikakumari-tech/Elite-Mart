import {v2 as cloudinary} from "cloudinary";
// add product
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
   
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// list product
const listProducts = async (res, req) => {};
// remove product
const removeProduct = async (res, req) => {};
// single product
const singleProduct = async (res, req) => {};

export { addProduct, listProducts, removeProduct, singleProduct };
