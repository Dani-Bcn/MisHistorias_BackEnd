import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = async (req, res, next) => {
  const token = await req.cookies.token;
  
 

  await  res.status(200).json({ message:"token", token });
  await  next(); 
/* 
  if (!token) {
    return res.status(401).json({ message: "No autorizado" });
  }
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token invalido" });
    }
    req.user = user; 
   
  });*/
};
