import mongoose from "mongoose";


const certificationSchema = new mongoose.Schema({
    certification : {
        type:String,
        required: true
    },
    issuer: {
        type: String,
        required: true
    },
    yearIssued: {
        type: String,
        required: true
    },
  
}, {timestamps: true})


const Certification = mongoose.model("Certification", certificationSchema)

export default Certification