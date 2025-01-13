import mongoose from "mongoose"

mongoose.set("strictQuery", false);
console.log(process.env.MONGO_URL)

export const connectDb = ( async ()=>{
     await mongoose.connect(process.env.MONGO_URL)
     try{
        console.log(">> Db connected")
     }catch(error){
            console.log(error)
     }
})