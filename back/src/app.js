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
 
//"http://localhost:5173"//
//"https://mis-historias-front-end-seven.vercel.app", // Dominio permitido
app.use(cors({
  origin:"https://mis-historias-front-end-seven.vercel.app/",
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] ,// Allow these headers
  credentials: true,
}));
app.use(authRouter);
app.use(uploadImg);
app.use(deleteImg);
app.use(morgan("dev"));
app.set("trust proxy", 1);
