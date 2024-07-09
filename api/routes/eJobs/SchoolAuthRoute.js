import express from "express";
import { AddressLogic, EducationLogic, PersonalDetailsLogic, SchoolLicenseLogic, schoolEjobSignup } from "../../controllers/eJobs/SchoolAuthController.js";

const schoolAuthRoute = express.Router();

schoolAuthRoute.post("/schoolAuth",
                     PersonalDetailsLogic,
                     AddressLogic,
                     EducationLogic,
                     SchoolLicenseLogic,
                      schoolEjobSignup)

schoolAuthRoute.post("/schoolAuthadd", AddressLogic)
schoolAuthRoute.post("/schoolAuthedu", EducationLogic)
schoolAuthRoute.post("/schoolAuthsch", SchoolLicenseLogic)

export default schoolAuthRoute