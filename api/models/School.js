import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schoolSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },

    email:{
        type:String,
        required: true,
       
    },

    password: {
        type: String,
        required: true,
    },

    isAdmin:{
        type: Boolean,
        default: false,
    },

   
});
schoolSchema.pre("save",  async function(next) {
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
} );

const School = mongoose.model("School", schoolSchema);

export default School