// import express from "express";
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken'
// import UserFinance from "../../models/finance/userfinance.js";

// const financeAuthRouter = express.Router();

// financeAuthRouter.post('/financesignup', async(req, res) =>{
//     const {username, password} = req.body
//     try {
//         const existingUser = await UserFinance.findOne({username})
//         if(existingUser){
//             return res.status(400).json({message:'user already exist'})
//         }
//         const user = new UserFinance({username, password});
//         await user.save();

//         const token = jwt.sign({id: user._id}, process.env.financesecret, {expiresIn: '1h'})
//         res.status(200).json({token})
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// });

// financeAuthRouter.post('/financelogin', async(req, res) => {
//     const {username, password} = req.body;
//     try {
//         const user = await UserFinance.findOne({username});
//         if(!user) return res.status(400).json({message: "user does not exist, please signup"})
        
//         const isMatch = await bcrypt.compare(password, user.password)
//         if(!isMatch)return res.status(400).json({message: "incorrect password"})

//         const token = jwt.sign({id:user._id,  adminId: user.adminId}, process.env.financesecret, {expiresIn:'1h'})
//         res.status(200).json(token)
//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// })


// export default financeAuthRouter


// routes/auth.js
import express from "express";
import jwt from "jsonwebtoken";
import UserFinance from "../../models/finance/userfinance.js";
import bcrypt from "bcrypt";

const authRouter = express.Router();

// User Registration
authRouter.post('/financesignup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserFinance({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// User Login
authRouter.post('/financelogin', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserFinance.findOne({ username });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.financesecret, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default authRouter;
