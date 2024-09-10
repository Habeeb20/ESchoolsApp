import mongoose from "mongoose";
import validator from "validator";

const classSchema =new mongoose.Schema({
    grade:{
        type:String,
        required: true
    },
});

const Class = mongoose.model("Class", classSchema)

export default Class