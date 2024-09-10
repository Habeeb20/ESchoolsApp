import mongoose from "mongoose";


const educationSchema = new mongoose.Schema({
    school : {
        type:String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    nation: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    },  
    startYear: {
        type: String,
        required: true
    }
}, {timestamps: true})


const Education = mongoose.model("Education", educationSchema)

export default Education