 import multer from "multer"

 const storage= multer.diskStorage({  //diskstorage use for storing a file on server
    filename: function(req, file, callback){
        callback(null,file.originalname)
    }
 })
 const upload= multer({
    storage
 })

 export default upload