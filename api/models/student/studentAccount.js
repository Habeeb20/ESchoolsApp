import mongoose from "mongoose";

import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID()
    },
    role: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});
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
      chats: [chatSchema]

})


const StudentAccount = mongoose.model('StudentAccount', studentAccountSchema);

export default StudentAccount