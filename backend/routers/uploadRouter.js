import multer from "multer";
import express from "express";
import { isAuth, isAdmin } from "../utils.js";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "../uploads/");
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

const uploadMultiple = upload.fields([
  { name: "nahled", maxCount: 10 },
  { name: "zakladni", maxCount: 10 },
  { name: "skin", maxCount: 20 },
]);

uploadRouter.post("/", uploadMultiple, isAuth, isAdmin, (req, res) => {
  if (req.files.nahled) {
    console.log(
      "/" +
        req.files.nahled[0].path.substring(3, 10) +
        "/" +
        req.files.nahled[0].path.substring(11, req.files.nahled[0].path.length)
    );
    res.send(
      "/" +
        req.files.nahled[0].path.substring(3, 10) +
        "/" +
        req.files.nahled[0].path.substring(11, req.files.nahled[0].path.length)
    );
  }
  if (req.files.zakladni) {
    console.log(
      "/" +
        req.files.zakladni[0].path.substring(3, 10) +
        "/" +
        req.files.zakladni[0].path.substring(
          11,
          req.files.zakladni[0].path.length
        )
    );
    res.send(
      "/" +
        req.files.zakladni[0].path.substring(3, 10) +
        "/" +
        req.files.zakladni[0].path.substring(
          11,
          req.files.zakladni[0].path.length
        )
    );
  }
  if (req.files.skin) {
    var files = [];
    var fileKeys = Object.keys(req.files.skin);
    fileKeys.forEach(function (key) {
      files.push(req.files.skin[key]);
    });

    files.forEach((file) =>
      res.write(
        "/" +
          file.path.substring(3, 10) +
          "/" +
          file.path.substring(11, file.path.length) +
          ","
      )
    );
    res.end();
  }
});

export default uploadRouter;
