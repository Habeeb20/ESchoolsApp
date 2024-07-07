import express from "express";
import { schoolEjobSignup } from "../../controllers/eJobs/SchoolAuthController.js";

const schoolAuthRoute = express.Router();

schoolAuthRoute.post("/schoolAuth", schoolEjobSignup)

export default schoolAuthRoute