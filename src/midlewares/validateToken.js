import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


export const authRequired = async (req, res, next) => {
  const { token } = req.cookies;

  console.log(req.cookies)

 console.log(token)
   

    if (!token) {
      
      res.json({ message: "no autorizado" });
   

  } else {

    console.log(token)
    res.json({ message: token });
    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) {
        res.json({ message: "Error" });
      }
      req.user = user;
      next();
    });
  }
};
