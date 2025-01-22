import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  const token = req.cookies.token;
  
 

  return res.status(200).json({ message: token });
  

  if (!token) {
    return res.status(401).json({ message: "No autorizado" });
  }
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token invalido" });
    }
    req.user = user;
    next(); 
  });
};
