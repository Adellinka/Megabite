import mongoose from "mongoose";

const valorantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    nahled: { type: String, required: true },
    zakladni: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Valorant = mongoose.model("Valorant", valorantSchema);

export default Valorant;
