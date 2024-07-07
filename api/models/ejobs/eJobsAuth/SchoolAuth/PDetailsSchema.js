import mongoose from "mongoose";


const personalDetailsSchema = new mongoose.Schema({
    schoolName : {
        type:String,
        required: true
    },
    schoolEmail: {
        type: String,
        required: true
    },
    schoolType: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true
    }
}, {timestamps: true})


const PersonalDetails = mongoose.model("PersonalDetails", personalDetailsSchema)

export default PersonalDetails