import express from "express"
import authRouter from "./routes/routes.js"
import uploadImg from "./controllers/userControllers.js"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

export const app = express()

app.use(cookieParser())
app.use(express.json())

app.use(cors({
  origin:(origin, () =>{
    const ACCEPTED_ORIGINs=[
      "http://localhost:5137",
      "http://localhost:4000",
      "http://localhost:8000",
      "https://mis-historias-front-end.vercel.app/",
      "https://mis-historias-back-end.vercel.app/"
    ]
  })
  
  }));
app.use(authRouter)
app.use(uploadImg)
app.use(morgan("dev"))









