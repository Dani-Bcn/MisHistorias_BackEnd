import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = async (req, res, next) => {
  const { token } = req.cookies;
  res.cookie('token', token, {
    httpOnly: true, // la cookie no será accesible desde JavaScript en el navegador
    secure: true,   // asegura que la cookie solo se enviará a través de HTTPS
    sameSite: 'None', // necesario para permitir el uso de cookies cross-site
    domain: 'https://mis-historias-front-end-seven.vercel.app', // dominio donde la cookie será accesible
    path: '/',  // ruta donde la cookie será accesible
    expires: new Date(Date.now() + 8 * 3600000), // opcional, establece la expiración de la cookie
  });

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
