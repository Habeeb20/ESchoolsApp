import mongoose from "mongoose";

const schoolOwnerSchema = new mongoose.Schema({
    name: String,
    history: String,
    admissionDetails: String,
    faculties: [String],
    departments: [{
        faculty: String,
        department: String,
        about: String
    }],
    termsAndConditions: String,
    admissionRequirements: String
})

const SchoolOwner = mongoose.model("schoolOwner", schoolOwnerSchema)

export default SchoolOwner