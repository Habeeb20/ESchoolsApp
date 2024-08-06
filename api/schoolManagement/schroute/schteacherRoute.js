import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import SchTeacherSchema from "../schmodel/TeacherSchema.js";
import SchStudentSchema from "../schmodel/StudentSchema.js";
import SchComment from "../schmodel/Comment.js";

const schteacherRoute = express.Router();

schteacherRoute.post('/schteacher-login', async (req, res) => {
    const { email, password } = req.body;
    const teacher = await SchTeacherSchema.findOne({ email });
    if (teacher && await bcrypt.compare(password, teacher.password)) { 
        const token = jwt.sign({ id: teacher._id }, process.env.JWT_SECRET);
        res.json({ token });
    } else {
        res.status(400).json({ message: "Invalid credentials" });
    }
});

schteacherRoute.post("/schpost-comment", async (req, res) => {
    try {
        const { studentId, subject, midTermScore, examScore, totalScore, report } = req.body;
        const newComment = new SchComment({ studentId, subject, midTermScore, examScore, totalScore, report });
        await newComment.save();
        const student = await SchStudentSchema.findById(studentId);
        student.comments.push(newComment._id);
        await student.save();
        res.status(201).json(newComment);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
});

schteacherRoute.get('/schstudents', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const teacherId = decoded.id;
        const teacher = await SchTeacherSchema.findById(teacherId);
        const students = await SchStudentSchema.find({ class: teacher.class });
        res.status(200).json(students);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
});

// schteacherRoute.get('/schteachers', async (req, res) => {
//     try {
//         const teachers = await SchTeacherSchema.find();
//         res.status(200).json(teachers);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

export default schteacherRoute;
