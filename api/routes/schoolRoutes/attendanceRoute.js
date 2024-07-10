import express from "express";
import { markAttendance, getAllAttendance } from "../../controllers/school/attendance.js";

const AttendanceRouter = express.Router();

AttendanceRouter.post('/markattendance', markAttendance)
AttendanceRouter.get('/attendance', getAllAttendance)


export default AttendanceRouter