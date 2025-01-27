import {v2 as cloudinary} from 'cloudinary';
import  { CloudinaryStorage } from "multer-storage-cloudinary"
import multer from 'multer';
import dotenv from 'dotenv'

dotenv.config() 

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET ,
  api_url: process.env.CLOUDINARY_URL
});

const storage = new CloudinaryStorage({  
  cloudinary,
  params: {
    allowed_formats: ["jpg", "png", "jpeg"],
    folder: "Img_Mis_Historias"      // Nombre carpeta cloudinary
  } 
});

export default multer({storage})  