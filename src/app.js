import express from "express";
import authRouter from "./routes/routes.js";
import uploadImg from "./controllers/userControllers.js";
import deleteImg from "./controllers/userControllers.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

app.use(cookieParser(
  {
    secure: false,
    sameSite: "None",
  }
));
app.use(express.json());
app.use(
  cors({
    origin: "https://mis-historias-front-end-seven.vercel.app",
    credentials: true,
    secure: false,
    sameSite: "None",
  })
);
app.use(authRouter);
app.use(uploadImg);
app.use(deleteImg);
app.use(morgan("dev"));
app.set('trust proxy', 1);
app.use(express.urlencoded({ extended: false }));
