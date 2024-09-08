
import Admin from "../../models/school/adminRegister.js";
import { Student } from "../../models/school/studentSchema.js";
import { Teacher } from "../../models/school/teacherSchema.js";

import bcrypt from "bcrypt";


export const studentSignIn = async (req, res, next ) => {
    const {email, password} = req.body
    try{
        const student = await Student.findOne({email})
        if(!student){
            return res.status(400).json("the email is incorrect")
        }

        const isStudentpassword = await bcrypt.compare(password, student.password)
        if(!isStudentpassword){
            res.status(401).json("your password is incorrect")
        }
    
        res.status(200).json({success: true, message: "student signed in successfully"})
    }catch(err) {
        next(err)

    }
}

export const teacherSignIn = async(req, res, next) => {
    const {email, password} = req.body; 
    try {
        const teacher = await Teacher.findOne({email})
        if(!teacher){
            return res.status(400).json("the email is incorrect")
        }

        const isTeacherpassword = await bcrypt.compare(password, teacher.password)
        if(!isTeacherpassword){
            res.status(401).json("your password is incorrect")
        }
    
        res.status(200).json({success: true, message: "teacher signed in successfully"})
    } catch (error) {
        next(error)
    }
}