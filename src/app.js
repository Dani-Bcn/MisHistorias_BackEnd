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
    
    credentials:true
  }));
app.use(authRouter)
app.use(uploadImg)
app.use(morgan("dev"))









