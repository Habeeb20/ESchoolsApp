// models/finance/studentfinance.js
import mongoose from "mongoose";

const StudentFinanceSchema = new mongoose.Schema({
    name: String,
    amountPaid: Number,
    purpose: String, // Added purpose
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserFinance' },
}, { timestamps: true });

export default mongoose.model('StudentFinance', StudentFinanceSchema);
