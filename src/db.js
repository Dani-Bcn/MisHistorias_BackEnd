import mongoose from "mongoose"

mongoose.set("strictQuery", false);

export const connectDb = ( async ()=>{
     await mongoose.connect(process.env.MONGO_URL)
     try{
        console.log(">> Db connected")
     }catch(error){
            console.log(error)
     }
})