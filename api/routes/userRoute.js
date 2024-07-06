import express from "express";
import { studentSignIn, teacherSignIn } from "../controllers/userController.js";


const userRoute = express.Router();

userRoute.post("/student/signin", studentSignIn)
userRoute.post("/teacher/signin", teacherSignIn)


export default userRoute
