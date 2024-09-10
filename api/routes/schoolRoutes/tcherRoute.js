import express from "express";
import { createTeacher, getAllTeachers } from "../../controllers/school/tcherController.js";

const teacher_Router = express.Router();

teacher_Router.post('/teachers', createTeacher);
teacher_Router.get('/getallteachers', getAllTeachers);



export default teacher_Router;