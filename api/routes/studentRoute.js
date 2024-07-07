import express from "express";
import { getStudentProfile,
     getAllStudentsProfile, 
     createStudentAccount, 
     createStudentProfile, 
     updateStudentProfile, 
     deleteStudentProfile, 
     loginStudentAccount } from "../controllers/studentController.js";


const studentRoute = express.Router();


studentRoute.get("/getAllstudentProfile", getAllStudentsProfile)
studentRoute.get("/getstudentProfile", getStudentProfile)
studentRoute.post("/loginstudentAcount", loginStudentAccount)
studentRoute.post("/deletestudentProfile", deleteStudentProfile)
studentRoute.post("/createstudentAccount", createStudentAccount)
studentRoute.post("/createstudentProfile", createStudentProfile)
studentRoute.post("/updatestudentProfile", updateStudentProfile)

export default studentRoute