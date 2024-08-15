// routes/expenditureFinance.js
import express from "express";
import ExpenditureFinance from "../../models/finance/expenditurefinance.js";
import { isAuthenticated, isAuthorized } from "../../middlewares/authenticate.js";

const expenditureFinanceRoute = express.Router();

expenditureFinanceRoute.post('/expenditure', isAuthenticated, async(req, res) => {
    const {description, amount} = req.body;
    try {
        const expenditure = await ExpenditureFinance.create({description, amount, userId: req.userId});
        res.status(201).json(expenditure);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

expenditureFinanceRoute.get('/getexpenditure', isAuthenticated, async(req, res) => {
    try {
        const expenditure = await ExpenditureFinance.find({ userId: req.userId });
        res.status(200).json(expenditure);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

export default expenditureFinanceRoute;
