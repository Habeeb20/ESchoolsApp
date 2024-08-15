// models/finance/expenditurefinance.js
import mongoose from "mongoose";

const ExpenditureFinanceSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserFinance' },
}, { timestamps: true });

export default mongoose.model('ExpenditureFinance', ExpenditureFinanceSchema);
