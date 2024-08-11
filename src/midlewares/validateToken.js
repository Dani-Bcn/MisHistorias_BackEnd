import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import { profile } from "../controllers/userControllers.js";


export const authRequired = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
   
console.log(profile)

  } else {
    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) {
        res.json({ message: "Error" });
      }
      req.user = user;
      next();
    });
  }
};
