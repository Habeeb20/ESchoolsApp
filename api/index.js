import connectDb from "./database/dbConnect.js";
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import bcrypt from 'bcrypt'
import User1 from "./models/user.js";
import jwt from "jsonwebtoken"
import bodyParser from  "body-parser"
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

import schoolRouter from "./routes/schoolRoutes.js"
import adminRouter from "./routes/schoolRoutes/adminRoute.js"
import userRoute from "./routes/schoolRoutes/userRoute.js"
import classRoute from "./routes/schoolRoutes/classRoute.js"
import teacherRouter from "./routes/teacherRoute.js"
import studentRoute from "./routes/studentRoute.js"
import bookroute from "./routes/schoolRoutes/libraryRoute.js";
import corsOptions from "./config/corsOptions.js";
import announcementrouter from "./routes/schoolRoutes/announcementRoute.js";
import Attendance from "./models/school/attendance.js";
import AttendanceRouter from "./routes/schoolRoutes/attendanceRoute.js";
import bookRouter from "./routes/schoolRoutes/libraryRoute.js";
import student_Router from "./routes/schoolRoutes/stdentRoute.js";
import teacher_Router from "./routes/schoolRoutes/tcherRoute.js";
import paymentRoute from "./routes/paymentRoute.js"
import validator from "validator";

//Ejobs

import EapplicationRoute from "./routes/EssentialJobsRoute/EapplicationRoute.js";
import EjobRoute from "./routes/EssentialJobsRoute/EjobRoute.js";
import EuserRoute from "./routes/EssentialJobsRoute/EuserRoute.js"


//admission
import User from './models/user.js'

//bookseller
import bookstoreRouter from "./routes/BooksellerRoutes/bookStore.js";
import bookrouter from "./routes/BooksellerRoutes/bookseller.js";

//teacherprofile

import teacherProfileRoute from "./routes/teacherProfileRoute.js";

const __dirname = path.resolve()
const port = 4000

const app = express();


app.use(express.json())
app.use(bodyParser.json())
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
app.use('/api', teacherRouter);
app.use('/api', studentRoute);

app.use("/api", announcementrouter );
app.use("/api", AttendanceRouter);
app.use("/api", bookRouter);
app.use("/api", student_Router);
app.use("/api", teacher_Router);


//ejobs routes

app.use("/api/application", EapplicationRoute);
app.use("/api/job", EjobRoute);
app.use("/api/user", EuserRoute);





app.use(errorMiddleware)

//Book
app.use('/api', bookroute )


//payment

app.use('/api', paymentRoute)


//bookseller

app.use('/api/booksellers', bookrouter)
app.use('/api/books', bookstoreRouter)

//teacherprofile

app.use('/api/teacherprofile', teacherProfileRoute)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal Server Error';
    return res.status(statusCode).json({
        message,
    });
})



app.use(express.static(path.join(__dirname, '/client/dist')))

app.post('/register', async (req, res) => {
  try {
    const { name, email, phone, school, department, faculty, history, password, admissionStartDate, admissionEndDate, admissionRequirements, tuitionFees, students, location, schoolFees, onBoarding } = req.body;

    // Convert strings to arrays if necessary
    const departmentArray = Array.isArray(department) ? department : department.split(',').map(s => s.trim());
    const facultyArray = Array.isArray(faculty) ? faculty : faculty.split(',').map(s => s.trim());
    const studentsArray = Array.isArray(students) ? students : students.split(',').map(s => s.trim());

    // Convert 'Yes'/'No' string to boolean
    const onBoardingBoolean = onBoarding === 'Yes' ? true : false;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already registered');
    }

    const newUser = new User({ 
      name, 
      email, 
      phone, 
      school, 
      department: departmentArray, 
      faculty: facultyArray, 
      history, 
      password, 
      admissionStartDate, 
      admissionEndDate, 
      admissionRequirements, 
      tuitionFees, 
      students: studentsArray,
      location,
      schoolFees,
      onBoarding: onBoardingBoolean, // store the boolean value
    });

    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error registering user');
  }
});


  // User Authentication
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).send('Invalid credentials');
      }
      const token = user.generateAuthToken();
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).send('Error logging in');
    }
  });
 
const auth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    jwt.verify(token, 'your_jwt_secret_key', (err, decoded) => {
      if (err) return res.status(401).send('Unauthorized');
      req.user = decoded;
      next();
    });
  };

app.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send('Error fetching profile');
  }
});



app.put('/profile', auth, async (req, res) => {
    try {
      const { name, phone, school, department, faculty, history, admissionStartDate, admissionEndDate, admissionRequirements, tuitionFees, students,location, schoolFees, onBoarding } = req.body;
  
      const user = await User.findByIdAndUpdate(
        req.user._id, 
        { 
          name, 
          phone, 
          school, 
          department, 
          faculty, 
          history, 
          admissionStartDate, 
          admissionEndDate, 
          admissionRequirements, 
          tuitionFees, 
          students,
          location,
          schoolFees,
          onBoarding 
        }, 
        { new: true }
      );
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send('Error updating profile');
    }
  });
  
  app.get('/schools', async (req, res) => {
    try {
      const schools = await User.find({});
      res.status(200).json(schools);
    } catch (error) {
      res.status(500).send('Error retrieving schools');
    }
  });
  app.delete('/profile', auth, async (req, res) => {
    const userId = req.user.id;  
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            console.log("user not found")
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occurred during deletion of account' });
    }
});

app.get('/schoolscompare', async (req, res) => {
  try {
    const { location, schoolFees, onBoarding, name } = req.query;

    // Construct query to match any of the provided search parameters
    const query = [];
    
    if (location && typeof location === 'string') {
      query.push({ location: { $regex: location, $options: 'i' } });
    }
    if (schoolFees && !isNaN(parseInt(schoolFees))) {
      query.push({ schoolFees: parseInt(schoolFees) });
    }
    if (onBoarding !== undefined) {
      query.push({ onBoarding: JSON.parse(onBoarding.toLowerCase()) });
    }
    if (name && typeof name === 'string') {
      query.push({ name: { $regex: name, $options: 'i' } });
    }

   
    const schools = await User.find({ $or: query });
    res.json(schools);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get('/countSchools', async (req, res) => {
  try {
    const { locations } = req.query;

    if (!locations || !Array.isArray(locations)) {
      return res.status(400).json({ message: 'Locations query parameter must be an array of strings' });
    }

    const counts = await Promise.all(locations.map(async (loc) => {
      const count = await User.countDocuments({
        location: { $regex: loc, $options: 'i' }
      });
      return { location: loc, count };
    }));

    res.json(counts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});




  app.get('/comparison', async (req, res) => {
    const { school } = req.query;
    try {
        const school1 = await User.findOne({ school: new RegExp(`^${ school}$`, 'i') }); // case-insensitive search
        if (school1) {
            res.json(school1);
        } else {
            res.status(404).json({ message: 'School not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  });


 
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})
