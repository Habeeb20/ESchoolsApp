import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken'
import bcrypt from  "bcryptjs"
    const teacherProfileSchema = new mongoose.Schema({
        fName: {
            type: String,
            required: true,
            trim: true,
        },
        lName: {
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
        phone: {
            type:String,
            required: true
        },
        profSum: {
            type: String,
            required: true,
            trim: true,
        },
        workExp: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        courseStud: {
            type: String,
            required: true,
            // validate: {
            //     validator: function (arr) {
            //         return arr.length > 0;
            //     },
            //     message: 'At least one course is required',
            // },
        },
        yrsOfExp: {
            type: String,
            required: true,
            trim: true,
        },
        contAdd: {
            type: String,
            required: true
        },
        insAtt: {
            type: String,
            required: true,
         
        },
        grade:{
            type:String,
            required: true
        },
        password: {
            type:String,
            required: true
        }
    }, { timestamps: true });
    
    teacherProfileSchema.pre('save', async function (next) {
        if (this.isModified('password')) {
          this.password = await bcrypt.hash(this.password, 10);
        }
        next();
      });
      
      // Generate JWT token
      teacherProfileSchema.methods.generateAuthToken = function () {
        return jwt.sign({ _id: this._id }, 'your_jwt_secret_key');
      };
const TeacherProfile  = mongoose.model("TeacherProfile", teacherProfileSchema)

export default TeacherProfile 