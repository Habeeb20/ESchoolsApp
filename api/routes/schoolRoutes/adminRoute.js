import express from "express";

import { adminLogin,adminRegister } from "../../controllers/school/adminController.js";

const adminRouter = express.Router();


adminRouter.post('/adminSignUp', adminRegister)
adminRouter.post('/adminLogin', adminLogin)
export default adminRouter