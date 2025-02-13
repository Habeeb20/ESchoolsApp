import express from "express";
// import {
//   employerGetAllApplications,
//   jobseekerDeleteApplication,
//   jobseekerGetAllApplications,
//   postApplication,
// } from "../controllers/EssentialJobs/EapplicationController.js";
import { isAuthenticated } from "../../middlewares/auth.js";
// import { isAuthenticated } from "../middlewares/auth.js";
import { employerGetAllApplications, jobseekerDeleteApplication, jobseekerGetAllApplications, postApplication } from "../../controllers/EssentialJobs/EapplicationController.js";
const router = express.Router();

router.post("/post", isAuthenticated, postApplication);
router.get("/employer/getall", isAuthenticated, employerGetAllApplications);
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllApplications);
router.delete("/delete/:id", isAuthenticated, jobseekerDeleteApplication);

export default router;
