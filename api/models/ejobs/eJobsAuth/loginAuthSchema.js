import mongoose from "mongoose";

const loginAuthSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
      },
     
      password: {
        type: String,
        required: true
      },
})


const LoginAuth = mongoose.model('LoginAuth', loginAuthSchema);

export default LoginAuth