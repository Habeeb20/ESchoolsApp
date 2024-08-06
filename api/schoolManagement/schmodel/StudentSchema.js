import mongoose from "mongoose";
const Schema = mongoose.Schema

const schStudentSchema = new Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
    registrationNumber: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },

});
schStudentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

const SchStudentSchema = mongoose.model('SchStudent', schStudentSchema)

export default SchStudentSchema