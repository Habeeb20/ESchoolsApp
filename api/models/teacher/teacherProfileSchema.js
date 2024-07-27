import mongoose from "mongoose";
import validator from "validator";

    const teacherProfileSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        },
        profileWriteUp: {
            type: String,
            required: true,
            trim: true,
        },
        workExperience: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        courses: {
            type: [String],
            required: true,
            validate: {
                validator: function (arr) {
                    return arr.length > 0;
                },
                message: 'At least one course is required',
            },
        },
        yearsOfExperience: {
            type: String,
            required: true,
            trim: true,
        },
    }, { timestamps: true });
    

const TeacherProfile  = mongoose.model("TeacherProfile", teacherProfileSchema)

export default TeacherProfile 