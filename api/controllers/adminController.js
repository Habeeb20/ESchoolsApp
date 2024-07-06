import Admin from "../models/adminRegister.js";


export const adminRegister = async (req, res, next) => {
    console.log(req.body);
    const {email, password} = req.body;
    try {
        if(!email || !password){
            res.status(400).json("incorrect credentials")
        }

        //check if the admin already exists in the database

        const existingAdmin = await Admin.findOne({email});
        if(existingAdmin) {
            return res.status(400).json({success: false, message: "admin already exists"})

        }

        await Admin.create({email, password});
        res.status(200).json({
            success:true,
            message:"Admin Created"
        });
    } catch (error) {
        next (error)
    }
}

export const adminLogin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const admin = await Admin.findOne({email});
        if(!admin) {return res.status(400).json("username is not registered")};
        const isAdmin = await bcrypt.compare(password, admin.password);
        if(!isAdmin){
            return res.status(400).json("password does not match")
        }
        const token = jwt.sign({id:admin._id, isAdmin:username.isAdmin}, process.env.JWT_SECRET)
        const{password: pass, ...rest} = admin._doc;
        res
            .cookie("access_token", token, {httpOnly: true})
            .status(200)
            .json(rest);
    } catch (error) {
        
    }
}