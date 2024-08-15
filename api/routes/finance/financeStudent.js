// routes/financeStudentRouter.js
import express from "express";
import StudentFinance from "../../models/finance/studentfinance.js";
import { isAuthenticated } from "../../middlewares/authenticate.js";

const financeStudentRouter = express.Router();

financeStudentRouter.post('/financestudent', isAuthenticated, async(req, res) => {
    const {name, amountPaid, purpose} = req.body;
    try {
        const student = await StudentFinance.create({name, amountPaid, purpose, userId: req.userId});
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

financeStudentRouter.get('/getfinancestudent', isAuthenticated, async(req, res) => {
    try {
        const students = await StudentFinance.find({ userId: req.userId });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default financeStudentRouter;
