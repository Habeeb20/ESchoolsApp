import express from "express";
import Payment from "../models/Payment.js";
import { Axios } from "axios";
import axios from "axios";
import crypto from "crypto";
const paymentRoute = express.Router();

paymentRoute.post("/paystack/pay", async (req, res) => {
    const {email, amount } = req.body;
    
    const reference = crypto.randomBytes(12).toString('hex');
    const data = {
        email,
        amount: amount * 100, 
        reference,
    }

    try{
        const response = await axios.post('https://api.paystack.co/transaction/initialize', data, {
            headers:{
                Authorization:`Bearer ${process.env.paystack_Api}`,
                'Content-Type': 'application/json',
            }
        });

        const payment = new Payment({email, amount, reference, status:'pending'})
        await payment.save();

        res.status(200).json(response.data);
      

    }catch {
        res.status(500).json({message: 'Payment initialization failed', error: error.message})
    }

});

paymentRoute.get('/products', async(req, res) => {
    try {
        const products = await Payment.find();
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

paymentRoute.post("/payment/verify", async (req, res) => {
    const {reference} = req.body;
    try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`,{
        headers: {
            Authorization: `Bearer ${process.env.paystack_Api}`,
        },
    })

    const payment = await Payment.findOne({referrence});
    if(response.data.data.status === 'success'){
        payment.status = 'success';
        await payment.save();
    }
    res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({message: "payment verification failed"})
    }
})


export default paymentRoute