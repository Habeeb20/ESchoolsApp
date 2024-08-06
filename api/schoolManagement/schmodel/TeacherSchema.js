import mongoose from "mongoose";

const schTeacherSchema= new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    class: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
});

schTeacherSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  

const SchTeacherSchema = mongoose.model('SchTeacher', schTeacherSchema)

export default SchTeacherSchema