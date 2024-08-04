import mongoose from "mongoose";

const ExpenditureSchema = new mongoose.Schema({
    description: {type:String, required: true},
    amount:{type: Number, required: true}
})

const ExpenditureFinance = mongoose.model('Expenditure', ExpenditureSchema)

export default ExpenditureFinance