import express from "express";
import TeacherProfile from "../models/teacher/teacherProfileSchema.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const teacherProfileRoute = express.Router();


teacherProfileRoute.post('/register', async(req, res)=>{
    try{
        const {fName, lName,email, phone, profSum, workExp, address, courseStud, yrsOfExp, contAdd,insAtt, grade,password} = req.body

        const existingUser = await TeacherProfile.findOne({email});
        if(existingUser){
            return res.status(400).json('user already exist')
        }

        const newUser = new TeacherProfile({
            fName, 
            lName,
            email, 
            phone, 
            profSum, 
            workExp, 
            address, 
            courseStud, 
            yrsOfExp, 
            contAdd,
            insAtt, 
            grade,
            password
        });
        
      await newUser.save();
      res.status(201).send('User registered successfully');
    }catch(error){
      console.log(error);
      res.status(500).send('Error registering user');
    }
} )

teacherProfileRoute.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await TeacherProfile.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }

    // Compare the plain text password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate authentication token if password matches
    const token = user.generateAuthToken();
    res.status(200).json({ token });

  } catch (error) {
    console.log(error);
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

  teacherProfileRoute.get('/profile', auth, async (req, res) => {
    try {
      const user = await TeacherProfile.findById(req.user._id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send('Error fetching profile');
    }
  });


  teacherProfileRoute.put('/profile', auth, async(req, res)=> {
    try{
        const {fName, lName,email, phone, profSum, workExp, address, courseStud, yrsOfExp, contAdd,instAdd, grade,password} = req.body

        const user = await TeacherProfile.findByIdAndUpdate(
            req.user._id,
            {
                fName, 
                lName,
                email, 
                phone, 
                profSum, 
                workExp, 
                address, 
                courseStud, 
                yrsOfExp, 
                contAdd,
                instAdd, 
                grade,
                password
            }, 
            {new: true}
        );
        
      res.status(200).json(user);
    }catch (error) {
        res.status(500).send('Error updating profile');
      }
  })

  teacherProfileRoute.get('/teachers', async(req, res) => {
   
    try {
        const teachers = await  TeacherProfile.find({});
        res.status(200).json(teachers);

    } catch (error) {
          res.status(500).send('Error retrieving teachers');
    }
  })

  teacherProfileRoute.get('/teacher/:id', async (req, res) => {
    try {
      const teacher = await TeacherProfile.findById(req.params.id);
      if (!teacher) {
        return res.status(404).json({ message: 'Teacher not found' });
      }
      res.json(teacher);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Server error', error });
    }
  });
  
  

  export default teacherProfileRoute
