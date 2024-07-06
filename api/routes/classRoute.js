import express from "express";
import { createClass, getAllClasses } from "../controllers/classController.js";


const classRoute = express.Router()

classRoute.post("/class", getAllClasses)
classRoute.post("/creatclass", createClass)

export default classRoute