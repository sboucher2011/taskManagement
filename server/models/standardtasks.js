import mongoose from "mongoose";

const StandardTaskScchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: false,
    },
    frequency: {
      type: String,
      require: false,
    },
    chargeNumber: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const StandardTask = mongoose.model("StandardTask", StandardTaskScchema);

export default StandardTask;
