import fileUpload from "../cloudinary.config.js";
/* import { Router } from "express"; */

export const addImg = (req, res) => {
  res.send(req.files);
  console.log(req.files);
};

/* const router = Router() */


/* router.post("/api/uploadImg", fileUpload.single("imageUrl"), (req, res) => { 
  if (!req.file) {         
    return;
  } res.send({ fileUrl: req.file.path });
  res.json({ fileUrl: req.file.path });
});  */

/* export default router */