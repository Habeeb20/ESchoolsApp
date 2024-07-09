import mongoose from "mongoose";
import validator from "validator";


const personalDetailsSchema = new mongoose.Schema({
    schoolName : {
        type:String,
        required: true
    },
    schoolEmail: {
        type: String,
        required: true,
        validator: [validator.isEmail, "please input a correct email address"]
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