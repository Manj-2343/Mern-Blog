import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
