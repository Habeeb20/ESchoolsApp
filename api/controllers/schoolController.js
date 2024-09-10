import jwt from "jsonwebtoken";
import School from "../models/School.js"


export const signup = async (req, res, next) => {
    console.log(req.body)
    const {name, email, password, isAdmin} = req.body;
    try {
      
       const schoolUser = await School.create({name, email, password, isAdmin});
        res.status(201).json(schoolUser)

    } catch (error) {
        console.log(error)
        res.status(500).json("an error occured while registering user")
        
    }
};

export const login = async (req, res, next ) => {
    const {username, password} = req.body;

    try {
        
        const schoolUser = await School.findOne({email});
        if(!schoolUser) {return res.status(400).json("username is not registered")};
        const isSchoolUser = await bcrypt.compare(password, schoolUser.password);
        if(!isSchoolUser){
            return res.status(400).json("password does not match")
        }
        const token = jwt.sign({id:schoolUser._id, isAdmin:username.isAdmin}, process.env.JWT_SECRET)
        const{password: pass, ...rest} = schoolUser._doc;
        res
            .cookie("access_token", token, {httpOnly: true})
            .status(200)
            .json(rest);

    } catch (error) {
        console.log(error)
        next(error);
    }
}