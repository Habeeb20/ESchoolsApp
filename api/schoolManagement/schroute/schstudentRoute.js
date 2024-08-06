import express from "express";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

import SchStudentSchema from "../schmodel/StudentSchema.js";
import SchComment from "../schmodel/Comment.js";

const schstudentRoute = express.Router();

schstudentRoute.post("/schstudent-login", async(req, res) => {
    const { email, registrationNumber, password } = req.body;
    const student = await SchStudentSchema.findOne({ email, registrationNumber });
    if (student && await bcrypt.compare(password, student.password)) {
      const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
});

schstudentRoute.get("/comments", async(req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const studentId = decoded.id;
        const student = await StudentSchema.findById(studentId).populate('comments');
        res.status(200).json(student.comments);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
});


export default schstudentRoute