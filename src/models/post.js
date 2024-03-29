import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      max: 500,
    },
    image: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Post", postSchema);
