import mongoose from "mongoose";


const schoolLicenseSchema = new mongoose.Schema({
    license : {
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


const SchoolLicense = mongoose.model("SchoolLicense", schoolLicenseSchema)

export default SchoolLicense