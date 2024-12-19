import express from "express";
import authRouter from "./routes/routes.js";
import uploadImg from "./controllers/userControllers.js";
import deleteImg from "./controllers/userControllers.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "https://mis-historias-front-end.vercel.app/", // Dominio permitido
    credentials: true, // Necesario para que las cookies se envíen en solicitudes cross-site
    methods: ["GET", "POST", "PUT", "DELETE", "delete"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Headers permitidos
  })
);
app.use(authRouter);
app.use(uploadImg);
app.use(deleteImg);
app.use(morgan("dev"));
app.set("trust proxy", 1);
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Credentials", true);
  next();
});
