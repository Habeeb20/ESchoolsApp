import jwt from 'jsonwebtoken'
import UserFinance from '../models/finance/userfinance.js'



export const isAuthenticated = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ message: "No token provided" });

   
        jwt.verify(token.split(' ')[1], process.env.financesecret, (err, decoded) => {
            if(err) return res.status(500).json({message:"failed to authenticate token"})
                req.userId = decoded.id;
                next()
        });
 
};

// Middleware to authorize user based on resource ownership
export const isAuthorized = async (req, res, next) => {
    try {
        const user = await UserFinance.findById(req.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        // Check if the user has access to the requested resource
        // (Add your authorization logic here)
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};