import mongoose from "mongoose";

const studentAccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
      },
      regNumber: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
})


const StudentAccount = mongoose.model('StudentAccount', studentAccountSchema);

export default StudentAccount