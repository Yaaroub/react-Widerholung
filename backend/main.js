import express from "express";
import photoRouter from "./router/photosRouter.js"
const server = express();
server.use(express.json())
server.use("/photos",photoRouter)
server.listen(1235, () => {
  console.log("i am running");
});
