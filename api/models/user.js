import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    school: { type: String },
    department: [{ type: String }],  // Array of strings
    faculty: [{ type: String }],     // Array of strings
    history: { type: String },
    admissionStartDate: { type: Date },
    admissionEndDate: { type: Date },
    admissionRequirements: { type: String },
    tuitionFees: { type: Number },
    students: [{ type: String }],    // Array of strings
    password: { type: String, required: true },
    location: {type: String, required: true},
    schoolFees: {type: String, required: true},
    onBoarding: {type: Boolean, required: true}
  },
  { timestamps: true }
);

// Hash the password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Generate JWT token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, 'your_jwt_secret_key');
};

const User1 = model('User1', userSchema);

export default User1;
