import mongoose from "mongoose";

const studentProfileSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    regNumber: {
        type:Number,
        required: true
    },
   
    grade: {
        type:String,
        required: true
    },

    School: {
        type: String,
        required: true,
    },
    SchoolFees: {
        type:String,
        required: true,
    },

    yearOfAdmission:{
        type: String,
        required: true
    },

 
}, { timestamps: true})


const StudentProfile = mongoose.model("StudentProfile", studentProfileSchema)

export default StudentProfile