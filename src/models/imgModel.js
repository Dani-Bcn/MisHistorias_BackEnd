import mongoose from "mongoose";


const imgSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    }
})

module.exports = model("Img", imgSchema)