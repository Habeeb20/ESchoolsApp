import connectDb from "./database/dbConnect.js";
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import path from "path"
//connecting to the database
connectDb();
import schoolRouter from "./routes/schoolRoutes.js"
import adminRouter from "./routes/schoolRoutes/adminRoute.js"
import userRoute from "./routes/schoolRoutes/userRoute.js"
import classRoute from "./routes/schoolRoutes/classRoute.js"
import teacherRouter from "./routes/teacherRoute.js"
import studentRoute from "./routes/studentRoute.js"
import schoolAuthRoute from "./routes/eJobs/SchoolAuthRoute.js";
import corsOptions from "./config/corsOptions.js";
import announcementrouter from "./routes/schoolRoutes/announcementRoute.js";
import Attendance from "./models/school/attendance.js";
import AttendanceRouter from "./routes/schoolRoutes/attendanceRoute.js";
import bookRouter from "./routes/schoolRoutes/libraryRoute.js";
import student_Router from "./routes/schoolRoutes/stdentRoute.js";
import teacher_Router from "./routes/schoolRoutes/tcherRoute.js";
const __dirname = path.resolve()
const port = 4000

const app = express();


app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(cookieParser());

mongoose.connection.once('open', () => {
    console.log("connected")
    app.listen(port, () => console.log(`server is listening on port ${port}`))
})


app.use('/api', schoolRouter);
app.use('/api', adminRouter );
app.use('/api', userRoute);
app.use('/api', classRoute);
app.use("/api", teacherRouter);
app.use('/api', studentRoute);
app.use("/api", schoolAuthRoute);
app.use("/api", announcementrouter );
app.use("/api", AttendanceRouter);
app.use("/api", bookRouter);
app.use("/api", student_Router);
app.use("/api", teacher_Router);

app.use(express.static(path.join(__dirname, '/client/dist')))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})





// app.listen(port, () => {
//     console.log("server is running on port " + port)
// })

