
import express from "express"
import * as contrroller from "../controller/photosController.js"
const router = express.Router()
router
    .get("/",contrroller.getAllPhotos)
    


    export default router