import express from "express";

const schoolRoute = express.Router()

import { adminRegister,adminLogIn, getAdminDetail } from "../../controllers/EssentialSchool/AdminController.js";
import { sclassCreate,sclassList, deleteSclass, deleteSclasses, getSclassDetail, getSclassStudents } from "../../controllers/EssentialSchool/ClassController.js";
import { complainCreate, complainList } from "../../controllers/EssentialSchool/ComplainController.js";
import { noticeCreate, noticeList, deleteNotice, deleteNotices, updateNotice } from "../../controllers/EssentialSchool/NoticeController.js";
import { studentRegister, studentLogIn, getStudentDetail,getStudents,deleteStudent,deleteStudents,updateStudent, studentAttendance, deleteStudentsByClass,updateExamResult, clearAllStudentsAttendance,clearAllStudentsAttendanceBySubject,removeStudentAttendance,removeStudentAttendanceBySubject } from "../../controllers/EssentialSchool/StudentController.js";
import { subjectCreate, classSubjects, deleteSubject, deleteSubjects,deleteSubjectsByClass, getSubjectDetail, freeSubjectList, allSubjects } from "../../controllers/EssentialSchool/SubjectController.js";
import { teacherRegister, teacherLogIn, getTeacherDetail, getTeachers, deleteTeacher, deleteTeachers, deleteTeachersByClass, updateTeacherSubject, teacherAttendance } from "../../controllers/EssentialSchool/TeacherController.js";



// Admin
schoolRoute.post('/AdminReg', adminRegister);
schoolRoute.post('/AdminLogin', adminLogIn);

schoolRoute.get("/Admin/:id", getAdminDetail)
// router.delete("/Admin/:id", deleteAdmin)

// router.put("/Admin/:id", updateAdmin)

// Student

schoolRoute.post('/StudentReg', studentRegister);
schoolRoute.post('/StudentLogin', studentLogIn)

schoolRoute.get("/Students/:id", getStudents)
schoolRoute.get("/Student/:id", getStudentDetail)

schoolRoute.delete("/Students/:id", deleteStudents)
schoolRoute.delete("/StudentsClass/:id", deleteStudentsByClass)
schoolRoute.delete("/Student/:id", deleteStudent)

schoolRoute.put("/Student/:id", updateStudent)

schoolRoute.put('/UpdateExamResult/:id', updateExamResult)

schoolRoute.put('/StudentAttendance/:id', studentAttendance)

schoolRoute.put('/RemoveAllStudentsSubAtten/:id', clearAllStudentsAttendanceBySubject);
schoolRoute.put('/RemoveAllStudentsAtten/:id', clearAllStudentsAttendance);

schoolRoute.put('/RemoveStudentSubAtten/:id', removeStudentAttendanceBySubject);
schoolRoute.put('/RemoveStudentAtten/:id', removeStudentAttendance)

// Teacher

schoolRoute.post('/TeacherReg', teacherRegister);
schoolRoute.post('/TeacherLogin', teacherLogIn)

schoolRoute.get("/Teachers/:id", getTeachers)
schoolRoute.get("/Teacher/:id", getTeacherDetail)

schoolRoute.delete("/Teachers/:id", deleteTeachers)
schoolRoute.delete("/TeachersClass/:id", deleteTeachersByClass)
schoolRoute.delete("/Teacher/:id", deleteTeacher)

schoolRoute.put("/TeacherSubject", updateTeacherSubject)

schoolRoute.post('/TeacherAttendance/:id', teacherAttendance)

// Notice

schoolRoute.post('/NoticeCreate', noticeCreate);

schoolRoute.get('/NoticeList/:id', noticeList);

schoolRoute.delete("/Notices/:id", deleteNotices)
schoolRoute.delete("/Notice/:id", deleteNotice)

schoolRoute.put("/Notice/:id", updateNotice)

// Complain

schoolRoute.post('/ComplainCreate', complainCreate);

schoolRoute.get('/ComplainList/:id', complainList);

// Sclass

schoolRoute.post('/SclassCreate', sclassCreate);

schoolRoute.get('/SclassList/:id', sclassList);
schoolRoute.get("/Sclass/:id", getSclassDetail)

schoolRoute.get("/Sclass/Students/:id", getSclassStudents)

schoolRoute.delete("/Sclasses/:id", deleteSclasses)
schoolRoute.delete("/Sclass/:id", deleteSclass)

// Subject

schoolRoute.post('/SubjectCreate', subjectCreate);

schoolRoute.get('/AllSubjects/:id', allSubjects);
schoolRoute.get('/ClassSubjects/:id', classSubjects);
schoolRoute.get('/FreeSubjectList/:id', freeSubjectList);
schoolRoute.get("/Subject/:id", getSubjectDetail)

schoolRoute.delete("/Subject/:id", deleteSubject)
schoolRoute.delete("/Subjects/:id", deleteSubjects)
schoolRoute.delete("/SubjectsClass/:id", deleteSubjectsByClass)


export default schoolRoute;