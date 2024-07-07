import mongoose from "mongoose";
import validator from "validator";


const educationSchema = new mongoose.Schema({
    schoolUser : {
        type:String,
        required: true
    },
    userPhoneNumber: {
        type: Number,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        validator: [validator.isEmail, "please input a valid email" ]
    },
    userPosition: {
        type: String,
        required: true
    },

    userAddress: {
        type: String,
        required: true
    }

}, {timestamps: true})


const Education = mongoose.model("Education", educationSchema)

export default Education