
import bcrypt from "bcrypt";
import Teacher from "../../models/essentialSchool/teacherSchema.js";
import Subject from "../../models/essentialSchool/subjectSchema.js";

export const teacherRegister = async (req, res) => {
    const { name, email, password, role, school, teachSubject, teachSclass } = req.body;
    try {
        const existingTeacherByEmail = await Teacher.findOne({ email });

        if (existingTeacherByEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const teacher = new Teacher({ name, email, password: hashedPass, role, school, teachSubject, teachSclass });
        let result = await teacher.save();

        if (teachSubject) {
            await Subject.findByIdAndUpdate(teachSubject, { teacher: teacher._id });
        }

        result.password = undefined;
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const teacherLogIn = async (req, res) => {
    try {
        let teacher = await Teacher.findOne({ email: req.body.email });

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        const validated = await bcrypt.compare(req.body.password, teacher.password);

        if (!validated) {
            return res.status(400).json({ message: "Invalid password" });
        }

        teacher = await teacher.populate("teachSubject", "subName sessions")
            .populate("school", "schoolName")
            .populate("teachSclass", "sclassName");

        teacher.password = undefined;
        res.status(200).json(teacher);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({ school: req.params.id })
            .populate("teachSubject", "subName")
            .populate("teachSclass", "sclassName");

        if (teachers.length > 0) {
            const modifiedTeachers = teachers.map((teacher) => ({
                ...teacher._doc,
                password: undefined
            }));
            return res.status(200).json(modifiedTeachers);
        } else {
            return res.status(404).json({ message: "No teachers found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getTeacherDetail = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id)
            .populate("teachSubject", "subName sessions")
            .populate("school", "schoolName")
            .populate("teachSclass", "sclassName");

        if (teacher) {
            teacher.password = undefined;
            return res.status(200).json(teacher);
        } else {
            return res.status(404).json({ message: "No teacher found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateTeacherSubject = async (req, res) => {
    const { teacherId, teachSubject } = req.body;
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            { teachSubject },
            { new: true }
        );

        if (teachSubject) {
            await Subject.findByIdAndUpdate(teachSubject, { teacher: updatedTeacher._id });
        }

        res.status(200).json(updatedTeacher);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteTeacher = async (req, res) => {
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);

        if (!deletedTeacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        await Subject.updateOne(
            { teacher: deletedTeacher._id },
            { $unset: { teacher: "" } }
        );

        res.status(200).json(deletedTeacher);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteTeachers = async (req, res) => {
    try {
        const deletionResult = await Teacher.deleteMany({ school: req.params.id });

        if (deletionResult.deletedCount === 0) {
            return res.status(404).json({ message: "No teachers found to delete" });
        }

        await Subject.updateMany(
            { teacher: { $in: deletionResult.deletedCount.map(teacher => teacher._id) } },
            { $unset: { teacher: "" } }
        );

        res.status(200).json(deletionResult);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteTeachersByClass = async (req, res) => {
    try {
        const deletionResult = await Teacher.deleteMany({ sclassName: req.params.id });

        if (deletionResult.deletedCount === 0) {
            return res.status(404).json({ message: "No teachers found to delete" });
        }

        await Subject.updateMany(
            { teacher: { $in: deletionResult.deletedCount.map(teacher => teacher._id) } },
            { $unset: { teacher: "" } }
        );

        res.status(200).json(deletionResult);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const teacherAttendance = async (req, res) => {
    const { status, date } = req.body;

    try {
        const teacher = await Teacher.findById(req.params.id);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const existingAttendance = teacher.attendance.find(
            (a) => a.date.toDateString() === new Date(date).toDateString()
        );

        if (existingAttendance) {
            existingAttendance.status = status;
        } else {
            teacher.attendance.push({ date, status });
        }

        const result = await teacher.save();
        return res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};
