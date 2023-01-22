import mongoose from "mongoose";

const UserScchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserScchema);

export default User;
