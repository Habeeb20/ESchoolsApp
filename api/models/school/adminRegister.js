import mongoose from "mongoose";
import validator from "validator";


const adminRegisterSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase: true,
        validator: [validator.isEmail, "please provide a valid email"]
    },

    password:{
        type: String,
        required: true,
        minlength: 6,
    }
});


const Admin = mongoose.model('AdminRegister', adminRegisterSchema)

export default Admin