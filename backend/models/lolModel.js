import mongoose from "mongoose";

const lolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    nahled: { type: String, required: true },
    zakladni: { type: String },
    skin: { type: Array, required: true, default: [] }, //Array je pole
    nadpis: { type: String },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//sadfs s

const Lol = mongoose.model("Lol", lolSchema);

export default Lol;
