import StudentAccount from "../models/student/studentAccount.js";
import StudentProfile from "../models/student/studentProfile.js";
import bcryptjs from "bcryptjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const createStudentAccount = async (req, res, next) => {
    const {email,regNumber, password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newstudentAccount = new StudentAccount({email,regNumber, password: hashedPassword})
    try {
        if(!email ||!regNumber || !password){
            return res.status(401).json({message:"please fill out the form correctly"})
        }

        const ifstudentAccountExists = await StudentAccount.findOne({email})
        if(ifstudentAccountExists){
            return res.status(400).json({message: "sorry, there is an account with that email, kindly login"})
        }
        await newstudentAccount.save();
        return res.status(201).json({message: "you have successfully created your account"}, newstudentAccount)
    } catch (error) {
        next(error)
        
    }
}


export const loginStudentAccount = async(req, res, next) => {
    const {email, password} = req.body
    try {
        const confirmDetails = await StudentAccount.findOne({email})
        if(!confirmDetails){return res.status(404).json({message:  "incorrect Email"})}
        const isPassword = await bcrypt.compare(password, confirmDetails.password)
        if(!isPassword){return res.status(404).json({message: "incorrect password"})}

        const age = 1000 * 60 * 60 * 24 * 7
        const token = jwt.sign({id: confirmDetails.id}, process.env.JWT_SECRET)
        const {password: hashedPassword, ...rest} = confirmDetails._doc;
        res.cookies("access-token", token, {httpOnly: true}, {expiresIn: age}).status(200).json(rest)
    } catch (error) {
        next(error)
    }
}




export const createStudentProfile = async(req, res, next) => {
    console.log(req.body);
    const {firstName, lastName, regNumber, grade, School, SchoolFees, yearOfAdmission} = req.body
    try {
        if(!firstName || !lastName || !regNumber || !grade || !School || !SchoolFees || !yearOfAdmission){
            return res.status(400).json("please fill in the full form")
        }
        await StudentProfile.create({firstName, lastName, regNumber, grade, School, SchoolFees, yearOfAdmission});
        res.status(200).json({
            success: true,
            message: "student's details is created"
        })

    } catch (error){
        next(error)

    }
}



export const getStudentProfile = async(req, res, next) => {
    const {id} = req.params
    try {
        const studentProfile = await StudentProfile.findById(id)
        if(!studentProfile){
            res.status(404).json({message: "profile not found"})
        }

        res.status(200).json(studentProfile)
    } catch (error) {
        next(error)
    }
}



export const updateStudentProfile = async(req, res, next) => {
    try {
        const {id} = req.params
        const studentProfile = await StudentProfile.findByIdAndUpdate({_id:id}, ...req.body)
        if(!studentProfile){
            return res.status(400).json({message: "no such profile"})
        }

        return res.status(200).json(studentProfile)
    } catch (error) {
        next(error)
    }
}


export const deleteStudentProfile = async (req, res, next) => {
    try {
        const {id} = req.params
        const studentProfile = await StudentProfile.findByIdAndDelete({_id:id})
        if(!studentProfile){return res.status(400).json({message:"an error occured"})}

        return res.status(200).json(studentProfile)
    } catch (error) {
        next(error)
    }
}

export const getAllStudentsProfile = async(req, res, next) => {
    try {
        const student = await StudentProfile.find();
        res.status(200).json({
            success: true,
            student
        })
    } catch (error) {
        next(error)
    }
}


