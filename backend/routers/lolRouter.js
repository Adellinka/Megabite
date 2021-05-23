import express from "express";
import expressAsyncHandler from "express-async-handler";
import Lol from "../models/lolModel.js";
import { isAuth, isAdmin } from "../utils.js";
import data from "../data.js";

const lolRouter = express.Router();

lolRouter.get(
  "/", // default url lolChamps (je to definované v server.js)
  expressAsyncHandler(async (req, res) => {
    const lolChamps = await Lol.find({}); // {} = všechno
    res.send(lolChamps);
  })
);

lolRouter.get(
  "/data",
  expressAsyncHandler(async (req, res) => {
    await Lol.remove({});
    const createdChamps = await Lol.insertMany(data.lolChamps); //data = data.js
    res.send({ createdChamps });
  })
);

lolRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const lolChamp = await Lol.findById(req.params.id);
    if (lolChamp) {
      res.send(lolChamp);
    } else {
      res.status(404).send({ messsage: "Champion not found!" });
    }
  })
);

lolRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    //funkce  běží nezávisle na ostatních funkcích, request, response
    const lolChamp = new Lol({
      //const je konstanta, Lol = lolModel
      name: req.body.name, // posílám request na frontend
      nahled: req.body.nahled,
      nadpis: req.body.nadpis,
      zakladni: req.body.zakladni,
      skin: req.body.skin,
      description: req.body.description,
    });
    const createdChamp = await lolChamp.save(); // await čeká až se provedou requesty a až se to provede tak se uloží data a vytvoří se nový champ
    res.send({ message: "Champion was created", lolChamp: createdChamp }); //posílám odpověď na frontend, lolChamp obsahuje id,nazev,skin,..
  })
);

export default lolRouter;
