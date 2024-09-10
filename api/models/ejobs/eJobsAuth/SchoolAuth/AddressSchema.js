import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    address : {
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
    country: {
        type: String,
        required: true
    },

 
  
}, {timestamps: true})


const Address = mongoose.model("Address", addressSchema)

export default Address