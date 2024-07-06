import mongoose from "mongoose";
import validator from "validator";

const teacherSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        validate:[validator.isEmail, " please provide  a valid email"]
    },
    profileWriteUp: {
        type:String,
        required: true
    },

    workExperience: {
        type: String,
        required: true,
    },
    address: {
        type:String,
        required: true,
    },

    courses:{
        type: String,
        required: true
    },

    yearsOfExperience: {
        type:Number,
        required: true
    },

});


const Teacher = mongoose.model("Teacher", teacherSchema)

export default Teacher