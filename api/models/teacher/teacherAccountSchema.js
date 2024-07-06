import mongoose from "mongoose";
import validator from "validator";

const teacherAccountSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        validate:[validator.isEmail, "please provide a valid email"]
    },

    password: {
        type:String,
        required: true,
        minlength: 6
    },
});

const TeacherAccount = mongoose.model("TeacherAccount", teacherAccountSchema)

export default TeacherAccount
