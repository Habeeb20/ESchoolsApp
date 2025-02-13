import express from "express";
import { teacherSignIn } from "../controllers/school/userController.js";

import 
    { getAllteachersProfile,
      getTeacherProfile, 
      loginTeacherAccount, 
      deleteTeacherProfile,
      createTeacherAccount, 
      createTeacherProfile,
      updateTeacherProfile } from "../controllers/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.get("/getAllteachersProfile", getAllteachersProfile)
teacherRouter.get("/getTeacherProfile/:id", getTeacherProfile)
teacherRouter.post('/loginTeacherAcount', loginTeacherAccount)
teacherRouter.delete("/deleteTeacherProfile/:id", deleteTeacherProfile)
teacherRouter.post('/createTeacherAccount', createTeacherAccount)
teacherRouter.post('/createTeacherProfile', createTeacherProfile)
teacherRouter.post("/updateTeacherProfile/:id", updateTeacherProfile)

export default teacherRouter;