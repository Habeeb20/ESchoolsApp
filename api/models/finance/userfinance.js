// import mongoose from "mongoose"
// import bcrypt from 'bcrypt'



// const UserSchema = new mongoose.Schema({
//     username:{type: String, required: true, unique: true},
//     password:{type: String, required: true}
// })

// UserSchema.pre('save', async function(next) {
//     if(!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// });


// const UserFinance = mongoose.model("Auth", UserSchema)

// export default UserFinance
// models/finance/userfinance.js
import mongoose from "mongoose";

const UserFinanceSchema = new mongoose.Schema({
    username: String,
    password: String,
}, { timestamps: true });

export default mongoose.model('UserFinance', UserFinanceSchema);
