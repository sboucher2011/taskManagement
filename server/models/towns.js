import mongoose from "mongoose";

const TownScchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      require: false,
    },
    pocName: {
      type: String,
      require: false,
    },
    pocPhone: {
      type: String,
      require: false,
    },
    pocEmail: {
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
