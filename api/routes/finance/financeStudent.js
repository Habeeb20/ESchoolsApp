import express from "express";
import StudentFinance from "../../models/finance/studentfinance.js";
import { isAuthenticated } from "../../middlewares/auth.js";
const financeStudentRouter = express.Router()

financeStudentRouter.post('/financestudent', async(req, res) => {
    const {name, amountPaid} = req.body;

    try {
        const student = await StudentFinance.create({name, amountPaid});
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});



financeStudentRouter.get('/getfinancestudent', isAuthenticated, async(req, res) => {
    try {
        const student = await StudentFinance.find()
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})



export default financeStudentRouter