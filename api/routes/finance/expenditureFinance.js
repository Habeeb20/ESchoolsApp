import express from "express";
import ExpenditureFinance from "../../models/finance/expenditurefinance.js";
import { isAuthenticated } from "../../middlewares/auth.js";

const expenditureFinanceRoute = express.Router()

expenditureFinanceRoute.post('/expenditure', async(req, res) => {
    const {description, amount} = req.body;
    try {
        const expenditure = await ExpenditureFinance.create({description, amount});
        res.status(201).json(expenditure);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


expenditureFinanceRoute.get('/getexpenditure', isAuthenticated, async(req, res) => {
    try {
        const expenditure = await ExpenditureFinance.find()
        res.status(200).json(expenditure)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default expenditureFinanceRoute