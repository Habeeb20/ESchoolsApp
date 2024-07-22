import connectDb from "./database/dbConnect.js";
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import path from "path"
import cloudinary from "cloudinary"
import fileUpload from "express-fileupload";
import ErrorHandler from "./middlewares/error.js";
import { errorMiddleware } from "./middlewares/error.js";
//connecting to the database
connectDb();
import schoolRoute from "./routes/EssentialSchool/schoolRoute.js";
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



//Ejobs

import EapplicationRoute from "./routes/EssentialJobsRoute/EapplicationRoute.js";
import EjobRoute from "./routes/EssentialJobsRoute/EjobRoute.js";
import EuserRoute from "./routes/EssentialJobsRoute/EuserRoute.js"


//AI
import chatRoute from "./routes/userAIRoute/userAIRoute.js";
import bookroute from "./routes/Book/bookroute.js";
import paymentRoute from "./routes/paymentRoute.js";



const __dirname = path.resolve()
const port = 4000

const app = express();


app.use(express.json())
app.use(cors({
    origin: [process.env.client_URL],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))
app.use(express.static('public'))
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: "/tmp/",
}))

mongoose.connection.once('open', () => {
    console.log("connected")
    app.listen(port, () => console.log(`server is listening on port ${port}`))
})



cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
  });
  


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


//ejobs routes

app.use("/api/application", EapplicationRoute);
app.use("/api/job", EjobRoute);
app.use("/api/user", EuserRoute);


//essentialschool route

app.use("/api/school", schoolRoute)

app.use(express.static(path.join(__dirname, '/client/dist')))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

//chatAI

app.use("/api", chatRoute);

app.use(errorMiddleware)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal Server Error';
    return res.status(statusCode).json({
        message,
    });
})

//Book
app.use('/api', bookroute )


//payment

app.use('/api', paymentRoute)





// app.listen(port, () => {
//     console.log("server is running on port " + port)
// })

