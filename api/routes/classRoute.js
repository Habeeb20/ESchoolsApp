import express from "express";
import { createClass, getAllClasses, getAClass } from "../controllers/classController.js";


const classRoute = express.Router()

classRoute.get('/class', getAllClasses)
classRoute.get("/class/:id", getAClass)
classRoute.post("/createclass", createClass)

export default classRoute