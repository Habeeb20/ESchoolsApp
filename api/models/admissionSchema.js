import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
    title: String,
    link: String
})

const AdmissionData = mongoose.model("Admission", admissionSchema)

export default AdmissionData