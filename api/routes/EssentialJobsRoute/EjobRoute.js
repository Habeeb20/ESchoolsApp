import express from "express";
// import {
//   deleteJob,
//   getAllJobs,
//   getMyJobs,
//   getSingleJob,
//   postJob,
//   updateJob,
// } from "../controllers/EssentialJobs/EjobController.js";
// import { isAuthenticated } from "../middlewares/auth.js";
import { isAuthenticated } from "../../middlewares/auth.js";
import { deleteJob, getAllJobs, getMyJobs, getSingleJob, postJob, updateJob } from "../../controllers/EssentialJobs/EjobController.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs", isAuthenticated, getMyJobs);
router.put("/update/:id", isAuthenticated, updateJob);
router.delete("/delete/:id", isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);

export default router;
