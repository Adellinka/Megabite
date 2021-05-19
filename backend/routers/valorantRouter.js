import express from "express";
import expressAsyncHandler from "express-async-handler";
import Valorant from "../models/valorantModel.js";
import { isAuth, isAdmin } from "../utils.js";
import data from "../data.js";

const valorantRouter = express.Router();

valorantRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const valorantChamps = await Valorant.find({});
    res.send(valorantChamps);
  })
);

valorantRouter.get(
  "/data",
  expressAsyncHandler(async (req, res) => {
    // await Valorant.remove({});
    const createdChamps = await Valorant.insertMany(data.valorantChamps);
    res.send({ createdChamps });
  })
);

valorantRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const valorantChamp = await Valorant.findById(req.params.id);
    if (valorantChamp) {
      res.send(valorantChamp);
    } else {
      res.status(404).send({ messsage: "Champion not found!" });
    }
  })
);

valorantRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const valorantChamp = new Valorant({
      name: req.body.name,
      nahled: req.body.nahled,
      zakladni: req.body.zakladni,
      description: req.body.description,
    });
    const createdChamp = await valorantChamp.save();
    res.send({ message: "Champion was created", valorantChamp: createdChamp });
  })
);

export default valorantRouter;
