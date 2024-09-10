import mongoose from "mongoose";


const personalDetailsSchema = new mongoose.Schema({
    Name : {
        type:String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    career: {
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


const personalDetails = mongoose.model("PersonalDetails", personalDetailsSchema)

export default personalDetails