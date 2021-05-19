import mongoose from "mongoose";

const pubgSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    nahled: { type: String, required: true },
    mapa: { type: String, required: true },
    description: { type: String, required: true },
    nadpis: { type: String },
  },
  {
    timestamps: true,
  }
);

const Pubg = mongoose.model("Pubg", pubgSchema);

export default Pubg;
