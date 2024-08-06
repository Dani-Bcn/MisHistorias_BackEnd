import {app} from "./src/app.js"
import { connectDb } from "./src/db.js"  
import "dotenv/config.js";



const port = "https://mis-historias-back-end.vercel.app/" || 4000;
 app.listen(port,()=>{
    
   console.log(`port runing in ${port}`)
    
 }) 


connectDb()
 
