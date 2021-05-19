import express from "express";
import mongoose from "mongoose";
import pubgRouter from "../backend/routers/pubgRouter.js";
import lolRouter from "../backend/routers/lolRouter.js";
import valorantRouter from "../backend/routers/valorantRouter.js";
import userRouter from "./routers/userRouter.js";
import data from "../backend/data.js";
import uploadRouter from "./routers/uploadRouter.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/megabite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/uploads", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/pubgMaps", pubgRouter);
app.use("/api/lolChamps", lolRouter);
app.use("/api/valorantChamps", valorantRouter);

const __dirname = path.resolve();
app.use(
  "/uploads",
  express.static(
    path.join(__dirname.substring(__dirname, __dirname.length - 8), "/uploads")
  )
);
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
);

/* app.get("/", (req, res) => {
  res.send("Server is ready");
}); */

const port = 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
