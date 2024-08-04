import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import UserFinance from "../../models/finance/userfinance.js";

const financeAuthRouter = express.Router();

financeAuthRouter.post('/financesignup', async(req, res) =>{
    const {username, password} = req.body
    try {
        const existingUser = await UserFinance.findOne({username})
        if(existingUser){
            return res.status(400).json({message:'user already exist'})
        }
        const user = new UserFinance({username, password});
        await user.save();

        const token = jwt.sign({id: user._id}, process.env.financesecret, {expiresIn: '1h'})
        res.status(200).json({token})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

financeAuthRouter.post('/financelogin', async(req, res) => {
    const {username, password} = req.body;
    try {
        const user = await UserFinance.findOne({username});
        if(!user) return res.status(400).json({message: "user does not exist, please signup"})
        
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch)return res.status(400).json({message: "incorrect password"})

        const token = jwt.sign({id:user._id}, process.env.financesecret, {expiresIn:'1h'})
        res.status(200).json(token)
    } catch (error) {
        res.status(500).json(error.message)
    }
})


export default financeAuthRouter