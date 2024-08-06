import express from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import AdminSchema from "../schmodel/AdminSchema.js";
import SchTeacherSchema from "../schmodel/TeacherSchema.js";
import SchStudentSchema from "../schmodel/StudentSchema.js";

const schAdminRoute = express.Router();

schAdminRoute.post('/schadminregister', async(req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    try {
      const admin = new AdminSchema({ email, password: hashedPassword });
      await admin.save();
      res.status(200).send({ message: 'Admin registered successfully' });
    } catch (err) {
      res.status(500).send('There was a problem registering the admin.');
    }
})

schAdminRoute.post('/schadminlogin', async (req, res) => { 
    const { email, password } = req.body;
    const admin = await AdminSchema.findOne({ email });
    if (admin && await bcrypt.compare(password, admin.password)) {
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  });
  

schAdminRoute.post('/schregister-teacher', async(req, res) => {
    try {
        const { name, email, class: className, phone, password } = req.body;
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const adminId = decoded.id;
        const newTeacher = new SchTeacherSchema({ name, email, class: className, phone, password, admin: adminId });
        await newTeacher.save();
        res.status(201).json(newTeacher);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})


schAdminRoute.post('/schregister-student', async(req, res) => {
    try {
        const { name, class: className, registrationNumber, phone, password } = req.body;
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const adminId = decoded.id;
        const newStudent = new SchStudentSchema({ name, class: className, registrationNumber, phone, password, admin: adminId });
        await newStudent.save();
        res.status(201).json(newStudent);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
});


schAdminRoute.get('/schteachers', async(req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const adminId = decoded.id;
        const teachers = await SchTeacherSchema.find({ admin: adminId });
        res.status(200).json(teachers);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})


schAdminRoute.get('/schstudents', async(req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const adminId = decoded.id;
        const students = await SchStudentSchema.find({ admin: adminId });
        res.status(200).json(students);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})

schAdminRoute.delete('/delete-schteacher/:id', async(req, res) => {
    try {
        await SchTeacherSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Teacher deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})

schAdminRoute.delete('/delete-schstudent/:id', async(req, res) => {
    try {
        await SchStudentSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Student deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    
})

schAdminRoute.put('/update-schteacher/:id', async(req, res) => {
    try {
        const updatedTeacher = await SchTeacherSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTeacher);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})

schAdminRoute.put('/update-schstudent/:id', async(req, res) => {
    try {
        const updatedStudent = await SchStudentSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedStudent);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})


export default schAdminRoute