import TeacherProfile from "../models/teacher/teacherProfileSchema.js";
import TeacherAccount from "../models/teacher/teacherAccountSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import Joi from "joi";


export const createTeacherAccount = async (req, res, next) => {
    const {email, password} = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)

    const newteacherAccount = new TeacherAccount({email, password: hashedPassword})
    try {
        if(!email || !password){
            return res.status(401).json({message:"please fill out the form correctly"})
        }

        const ifteacherAccountExists = await TeacherAccount.findOne({email})
        if(ifteacherAccountExists){
            return res.status(400).json({message: "sorry, there is an account with that email, kindly login"})
        }
        await newteacherAccount.save();
        return res.status(200).json( newteacherAccount)
    } catch (error) {
        next(error)
        
    }
}

export const loginTeacherAccount = async(req, res, next) => {
    const {email, password} = req.body
    try {
        const teacheracct = await TeacherAccount.findOne({email})
        if(!teacheracct){
            return res.status(400).json({message: "incorrect email"})
        }

        const isteacherPassword = await bcrypt.compare(password, teacheracct.password)
        if(!isteacherPassword){
            return res.status(400).json({message: "incorrect password"})
        }

        const age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign({id: teacheracct.id}, process.env.JWT_SECRET)
        const {password:hashedPassword, ...rest} = teacheracct._doc;
        res.cookie('access_token', token, {httpOnly:true, expiresIn:age }).status(200).json(rest)

    } catch (error) {
        next(error)
    }
}

export const createTeacherProfile = async(req, res, next) => {
        const { firstName, lastName, email, profileWriteUp, workExperience, address, courses, yearsOfExperience } = req.body;

        // Check for missing fields
        const missingFields = [];

        if (!firstName.trim()) missingFields.push('firstName');
        if (!lastName.trim()) missingFields.push('lastName');
        if (!email.trim()) missingFields.push('email');
        if (!profileWriteUp.trim()) missingFields.push('profileWriteUp');
        if (!workExperience.trim()) missingFields.push('workExperience');
        if (!address.trim()) missingFields.push('address');
        if (!Array.isArray(courses) || !courses.length || courses.some(course => !course.trim())) missingFields.push('courses');
        if (!yearsOfExperience) missingFields.push('yearsOfExperience');

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in the full form',
                missingFields
            });
        }
        try {
            await TeacherProfile.create({ firstName, lastName, email, profileWriteUp, workExperience, address, courses, yearsOfExperience });
            res.status(200).json({
                success: true,
                message: "Teacher's details have been created successfully"
            });
        } catch (error) {
            next(error);
}

 
    // try {
    //     console.log(req.body);
    //     const {firstName, lastName, email, profileWriteUp, workExperience, address, courses, yearsOfExperience} = req.body
    //     if(!firstName || !lastName || !email  || !profileWriteUp || !workExperience || !address  || !courses || !yearsOfExperience){
    //         return res.status(400).json("please fill in the full form")
    //     }
    //     await TeacherProfile.create({firstName, lastName, email, profileWriteUp, workExperience,address, courses, yearsOfExperience, });
    //     res.status(200).json({
    //         success: true,
    //         message: "teacher's details is created"
    //     })

    // } catch (error){
    //     next(error)

    // }
}

export const getTeacherProfile = async(req, res, next) => {
    const {id} = req.params
    try {
        const teacherProfile = await TeacherProfile.findById(id)
        if(!teacherProfile){
            res.status(404).json({message: "profile not found"})
        }

        res.status(200).json(teacherProfile)
    } catch (error) {
        next(error)
    }
}



export const updateTeacherProfile = async(req, res, next) => {
    try {
        const {id} = req.params
        const teacherProfile = await TeacherProfile.findByIdAndUpdate({_id:id}, ...req.body)
        if(!teacherProfile){
            return res.status(400).json({message: "no such profile"})
        }

        return res.status(200).json(teacherProfile)
    } catch (error) {
        next(error)
    }
}


export const deleteTeacherProfile = async (req, res, next) => {
    try {
        const {id} = req.params
        const teacherProfile = await TeacherProfile.findByIdAndDelete({_id:id})
        if(!teacherProfile){return res.status(400).json({message:"an error occured"})}

        return res.status(200).json(teacherProfile)
    } catch (error) {
        next(error)
    }
}

export const getAllteachersProfile = async(req, res, next) => {
    try {
        const teachers = await TeacherProfile.find();
        res.status(200).json({
            success: true,
            teachers
        })
    } catch (error) {
        next(error)
    }
}