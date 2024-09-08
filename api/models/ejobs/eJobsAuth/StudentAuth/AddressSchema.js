import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    Address : {
        type:String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    LGA: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    } 
  
}, {timestamps: true})


const Address = mongoose.model("Address", addressSchema)

export default Address