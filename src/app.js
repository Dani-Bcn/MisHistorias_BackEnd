import express from "express"
import authRouter from "./routes/routes.js"
import uploadImg from "./controllers/userControllers.js"
import deleteImg from "./controllers/userControllers.js"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

export const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin:"https://mis-historias-front-end-seven.vercel.app",
  credentials:true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));
 app.use(authRouter) 
app.use(uploadImg)
app.use(deleteImg)
app.use(morgan("dev"))
app.use(
  session({
    secret: config.domain,
    store: new SequelizeStore({
      db: db.sequelize,
      checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
      expiration: 15 * 24 * 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
    saveUninitialized: true,
    cookie: { secure: true, sameSite: "none" },
  })
);








