import express from "express";
import AdminSchoolOwner from "../../models/schoolOwner/AdminSchoolOwner.js";
import SchoolOwner from "../../models/schoolOwner/schooleonwerSchema.js";
import jwt from "jsonwebtoken"
import  bcrypt from "bcrypt"


const schOwnerRouter = express.Router()

schOwnerRouter.post('/schownerregister', async (req, res) => {
    const { username, password } = req.body;
    const existingAdmin = await AdminSchoolOwner.findOne({ username });
    if (existingAdmin) {
        return res.status(400).json({ message: 'Admin already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new AdminSchoolOwner({ username, password: hashedPassword });
    await newAdmin.save();
    res.json({ message: 'Admin registered successfully' });
});


// schOwnerRouter.post("/schownerregister", async(req, res)=> {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newAdmin = new AdminSchoolOwner({ username, password: hashedPassword });
//     await newAdmin.save();
//     res.json({ message: 'Admin registered successfully' });
// })

schOwnerRouter.post("/schownerlogin", async(req, res) => {
    const { username, password } = req.body;
    const admin = await AdminSchoolOwner.findOne({ username });
    if (!admin) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: admin._id }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ token });
});
const authenticate = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'secret');
        req.admin = decoded;
        next();
    } catch (e) {
        res.status(400).json({ message: 'Token is not valid' });
    }
};


schOwnerRouter.post("/schownercreate", authenticate, async(req, res) => {
    const newSchool = new SchoolOwner(req.body);
    await newSchool.save();
    res.json(newSchool);
})

schOwnerRouter.get("/schownerget", async(req, res) => {
    const schools = await SchoolOwner.find();
    res.json(schools);
});

schOwnerRouter.put("/schowneredit/:id", authenticate, async(req, res) => {
    const updatedSchool = await SchoolOwner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSchool);
});

schOwnerRouter.delete("schownerdelete/:id", authenticate, async(req, res) => {
    await School.findByIdAndDelete(req.params.id);
    res.json({ message: 'School deleted' });
});


export default schOwnerRouter;