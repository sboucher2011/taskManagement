import mongoose from "mongoose";

const TownScchema = mongoose.Schema(
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

const Town = mongoose.model("Town", TownScchema);

export default Town;
