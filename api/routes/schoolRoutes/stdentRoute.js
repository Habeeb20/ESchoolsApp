import express from "express";
import { createStudent, getAllStudents } from "../../controllers/school/stdentController.js";


const student_Router = express.Router();

student_Router.get('/studentgetall', getAllStudents);
student_Router.post('/student', createStudent);


export default student_Router;
