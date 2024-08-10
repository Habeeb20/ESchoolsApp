import express from "express";
import StudentFinance from "../../models/finance/studentfinance.js";
import ExpenditureFinance from "../../models/finance/expenditurefinance.js";
import { isAuthenticated } from "../../middlewares/auth.js";

const financeSummaryRoute = express.Router();

financeSummaryRoute.get('/summary', isAuthenticated, async(req, res) => {
    try {
        const student = await StudentFinance.find()
        const expenditure = await ExpenditureFinance.find()

        const totalAmountPaid = student.reduce((sum, student) => sum + student.amountPaid, 0)
        const totalExpenditure = expenditure.reduce((sum, exp) => sum + exp.amount, 0);
        const balance = totalAmountPaid - totalExpenditure;
        const numberOfStudentPaid = student.filter(student => student.amountPaid > 0).length;
        const totalOutstanding = student.reduce((sum, student) => sum + (student.amountPaid === 0 ? student.amountPaid : 0), 0)

        res.status(200).json({
            totalAmountPaid,
            totalExpenditure,
            balance,
            numberOfStudentPaid,
            totalOutstanding
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


export default financeSummaryRoute