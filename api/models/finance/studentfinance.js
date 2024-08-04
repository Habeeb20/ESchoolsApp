import mongoose from "mongoose";


const StudentSchema = new mongoose.Schema({
    name:{type:String, required: true},
    amountPaid:{type: Number, required: true, default: 0}
})

const StudentFinance = mongoose.model('Studentfinance', StudentSchema)

export default StudentFinance