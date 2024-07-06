import Teacher from "../models/teacherSchema.js";

export const createTeacher = async(req, res, next) => {
    console.log(req.body);
    const {firstName, lastName, email, profileWriteUp, workExperience, address, courses, yearsOfexperience} = req.body
    try {
        if(!firstName || !lastName || !email  || !profileWriteUp || !workExperience || !address  || !courses || yearsOfexperience){
            return res.status(400).json("please fill in the full form")
        }
        await Teacher.create({firstName, lastName, email, profileWriteUp, courses, workExperience, yearsOfExperience, address});
        res.status(200).json({
            success: true,
            message: "teacher's details is created"
        })

    } catch (error){
        next(error)

    }
}

export const getAllteachers = async(req, res, next) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json({
            success: true,
            teachers
        })
    } catch (error) {
        next(err)
    }
}