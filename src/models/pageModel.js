import mongoose from "mongoose";

const pageModel = new mongoose.Schema(
  {
    chapter: {
      type: String,
      require: true,
      trim: true,
    },
    text: {
      type: String,
      require: true,
      trim: true,
    },
    
      sig:{type:String}
    
  },
  { timestamps: true }
);

export default mongoose.model("Page", pageModel);
