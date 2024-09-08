import express from "express";
import { signup, login } from "../controllers/schoolController.js";

const schoolRouter = express.Router();

schoolRouter.post("/schoolsignup", signup);
schoolRouter.post("/schoolLogin", login)



export default  schoolRouter;