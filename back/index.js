import {app} from "./src/app.js"
import { connectDb } from "./src/db.js"  


const port = process.env.PORT || 8000;

 app.listen(port,()=>{    
   console.log(`port runing in ${port}`)    
 }) 
 
connectDb()
 
