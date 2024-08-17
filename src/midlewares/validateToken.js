import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = async (req, res, next) => {
  const { token } = req.cookie(
    "XSRF-TOKEN", 
    req.csrfToken(),
    {
        secure: false,
        sameSite: 'None',
        domain: 'https://mis-historias-front-end-seven.vercel.app'
    }
);

  if (!token) {
    res.json({ message: "no autorizado" });
  } else {   
    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) {
        res.json({message: "Error"});
      }
     req.user = user;      
      next();
    });
  }
};
