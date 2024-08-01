import mongoose from "mongoose";

const bookModel = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    genre: {
      type: String,
      require: true,
      trim: true,
    },

    dataUser: {
      userName: {
        type: String,
        trim: true,
      },
      lastName: {
        type: String,
        trim: true,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
      },
      gmail: {
        type: String,
        ref: "gmail",
        require: true,
      },
    },
    rating: {
      type: Number,
    },

    numVotes: {
      type: Number,
    },
    reCountVotes: {
      type: Number,
    },

    idUserVote: [],
    chapters: [
      {
        number: { type: String },
        title: { type: String },
        text: { type: String },
      },
      { timestamps: true },
    ],
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookModel);
