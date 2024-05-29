import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    books: {
      type: [mongoose.Schema.ObjectId],
      ref: "Book",
    },
    booksLibrary: {
      type: [mongoose.Schema.ObjectId],
      ref: "Book",
    },
    imageUserUrl:{
      type:String
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userModel);
